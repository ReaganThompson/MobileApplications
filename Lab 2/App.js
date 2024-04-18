import CalculatorScreen from './screens/CalculatorScreen';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  async function loadApp() {
    await loadFonts();
    setIsLoaded(true);
  }

  useEffect(() => {
    loadApp();
  }, []);

  if (!isLoaded) {
    return null; // Or render a loading screen
  }else{
    return <CalculatorScreen styles={styles.text} />;
  }

  // Render your app
}

const loadFonts = async () => {
  await Font.loadAsync({
    'League': require('./assets/fonts/LeagueSpartan.ttf'),
    'BoldLeague': require('./assets/fonts/LeagueSpartan-ExtraBold.ttf'), 
  });
};
loadFonts();

// const App = () => {
//   return <CalculatorScreen />;
// };

const styles = StyleSheet.create({
  text: {
    fontFamily: 'BoldLeague',
    fontSize: 16,
    fontWeight: 'bold',
  },
});