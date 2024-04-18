import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { ThemeProvider } from './contexts/Theme';
import { FontProvider } from './contexts/Font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
        <ThemeProvider>
          <FontProvider>
            <RootNavigation />
          </FontProvider>
        </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;


/* 
To-do: 
  Add functionalty:
  Custom theme to Change custom theme should be different 
*/