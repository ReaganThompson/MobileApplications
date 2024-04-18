//EditButton.js
import React, { useState } from 'react';
import { TextInput,
        StyleSheet,
        TouchableOpacity,
        Text } from 'react-native';
import IconEdit from '../icons/IconEdit';

const EditButton = ( { handler } ) => {
    return (
        <TouchableOpacity style={styles.EditButton} onPress={() => handler()}>
            <IconEdit fill={mblue} style={styles.editIcon}/>
            <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
    )
};


//VARIABLES
const mblue = 'hsl(238, 40%, 52%)';
//STYLESHEET
const styles = StyleSheet.create({
    EditButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 5,
        width: 80,
    },
    editButtonText: {
        color: mblue,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Rubik',
        marginLeft: 5,
    },
    editIcon: {
        width: 20,
        height: 20,
    },
});

export default EditButton;