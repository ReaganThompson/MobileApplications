import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../components/themed';
import { RadioButton } from 'react-native-paper';
import { FontContext } from '../../contexts/Font'; // The custom context to manage the font state
import { useCustomTheme } from '../../hooks/useCustomTheme';

const Font = () => {
    const { font, setFont } = useContext(FontContext);
    const [checked, setChecked] = useState(font);
    const { colors } = useCustomTheme();

    const handleChange = (value) => {
        setChecked(value);
        setFont(value);
    };

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.title, fontFamily: font }}>Choose your font:</Text>
            <View style={styles.line} />
            <View style={styles.listContainer}>
                <View style={styles.radioContainer}>
                    <RadioButton.Item
                        label="Arial"
                        labelStyle={{ fontFamily: 'Arial', color: colors.text }}
                        style={{...styles.button, backgroundColor: colors.backgroundSecondary}}
                        value="Arial"
                        status={checked === 'Arial' ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('Arial')}
                    />
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton.Item
                        label="Times New Roman"
                        labelStyle={{ fontFamily: 'Times New Roman', color: colors.text }}
                        style={{...styles.button, backgroundColor: colors.backgroundSecondary}}
                        value="Times New Roman"
                        status={checked === 'Times New Roman' ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('Times New Roman')}
                        uncheckedColor='#ccc'
                    />
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton.Item
                        label="Courier New"
                        labelStyle={{ fontFamily: 'Courier New', color: colors.text }}
                        style={{...styles.button, backgroundColor: colors.backgroundSecondary}}
                        value="Courier New"
                        status={checked === 'Courier New' ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('Courier New')}
                    />
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton.Item
                        label="Verdana"
                        labelStyle={{ fontFamily: 'Verdana', color: colors.text }}
                        style={{...styles.button, backgroundColor: colors.backgroundSecondary}}
                        value="Verdana"
                        status={checked === 'Verdana' ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('Verdana')}
                    />
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton.Item
                        label="Inter"
                        labelStyle={{ fontFamily: 'Inter', color: colors.text }}
                        style={{...styles.button, backgroundColor: colors.backgroundSecondary}}
                        value="Inter"
                        status={checked === 'Inter' ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('Inter')}
                    />
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton.Item
                        label="Inconsolata"
                        labelStyle={{ fontFamily: 'Inconsolata', color: colors.text }}
                        style={{...styles.button, backgroundColor: colors.backgroundSecondary}}
                        value="Inconsolata"
                        status={checked === 'Inconsolata' ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('Inconsolata')}
                    />
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton.Item
                        label="Lora-Regular"
                        labelStyle={{ fontFamily: 'Lora-Regular', color: colors.text }}
                        style={{...styles.button, backgroundColor: colors.backgroundSecondary}}
                        value="Lora-Regular"
                        status={checked === 'Lora-Regular' ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('Lora-Regular')}
                    />
                </View>
                <View style={styles.radioContainer}>
                    <RadioButton.Item
                        label="Lora-Italic"
                        labelStyle={{ fontFamily: 'Lora-Italic', color: colors.text }}
                        style={{...styles.button, backgroundColor: colors.backgroundSecondary}}
                        value="Lora-Italic"
                        status={checked === 'Lora-Italic' ? 'checked' : 'unchecked'}
                        onPress={() => handleChange('Lora-Italic')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 20,
    },
    line: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    lineContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 10,
        width: '90%',
        height: 50,
        alignItems: 'center',
    },
});

export default Font;
