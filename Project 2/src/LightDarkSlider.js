// LightDarkSlider component that allows the user to change the theme of the app from light to dark and vice versa
import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import useCustomTheme from './hooks/useCustomTheme';
import MoonIcon from './components/MoonIcon';
import SunIcon from './components/SunIcon';


//  Scroll bar should be opposite color

const LightDarkSlider = () => {
    const { theme, setTheme, colors } = useCustomTheme();

    // Custom Theme hook initialized with the dark theme
    const initialTheme = theme === 'dark' ? true : false;

    return (
        <View style={styles.container}>
            <SunIcon style={styles.sun} fill={colors.text}/>
            <Switch
                trackColor={{ false: colors.light, true: colors.dark }}
                thumbColor={colors.dark}
                ios_backgroundColor={colors.light}
                onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                value={theme === 'dark'}
                style={styles.switch}
            />
            <MoonIcon style={styles.moon}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    switch: {
        marginHorizontal: 10,
        position: 'relative'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginHorizontal: 10,
    },
});

export default LightDarkSlider;