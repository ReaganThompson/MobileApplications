import React, { createContext, useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const FontContext = createContext();

const FontProvider = ({ children }) => {
  const [font, setFont] = useState('Arial');
  const [fontsLoaded] = useFonts({
    'Lora-Regular': require('../../assets/fonts/lora/Lora-VariableFont.ttf'),
    'Lora-Italic': require('../../assets/fonts/lora/Lora-Italic-VariableFont.ttf'),
    
    'Inter': require('../../assets/fonts/inter/Inter-VariableFont.ttf'),
  
    'Inconsolata': require('../../assets/fonts/inconsolata/Inconsolata-VariableFont.ttf'),
  });
   // wait for the theme and fonts to load before hiding the splash screen
   //   Font.loadAsync() => Should be called to load fonts instead (scalable and effecient)
  //    Does Font.loadAsync block Asynchronous loading? 
  //      => Does font need to load synchornously
  

    useEffect(() => {
      const fetchSetting = async () => {
        if (!fontsLoaded) {
          console.log("Hiding splash screen");
          await SplashScreen.hideAsync();
          console.log("Splash screen should be hidden now");
        }
      };
      fetchSetting()
    }, [fontsLoaded]);
  if (!fontsLoaded){
    console.log("Fonts not laoded");
    // return null;
  }
  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export { FontContext, FontProvider };
