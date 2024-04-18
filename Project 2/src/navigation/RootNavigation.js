//RootNavigation.js
import { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import BottomTabs from './BottomTabs';
import { useThemeColors } from '../hooks/useThemeColors';
import { useCustomTheme } from '../hooks/useCustomTheme';
import { StatusBar } from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
console.log("Rootnav is running");
  const { colors } = useThemeColors();
  const { theme } = useCustomTheme();
  console.log("We are waiting WHAT")

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.text,
      border: 'transparent',
    },
  };
  
  // wait for the theme and fonts to load before hiding the splash screen
  useEffect(() => {
    const fetchSetting = async () => {
      if (!theme.loading) {
        console.log("Hiding splash screen");
        await SplashScreen.hideAsync();
        console.log("Splash screen should be hidden now");
      }
    };
    fetchSetting()
  }, [theme.loading]);

  if (theme.loading){
    console.log("Theme is loading");
    return null;
  } 

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <BottomTabs />
    </NavigationContainer>
  );
};

export default RootNavigation;