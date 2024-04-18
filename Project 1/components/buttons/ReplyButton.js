import React, { useState } from 'react';
import { TextInput,
        StyleSheet,
        TouchableOpacity,
        Text } from 'react-native';
import IconReply from '../icons/IconReply';

const ReplyButton = ( {handler} ) => {
    return (
        <TouchableOpacity style={styles.replyButton} onPress={() => handler()}>
            <IconReply fill={mblue} style={styles.replyIcon}/>
            <Text style={styles.replyButtonText}>Reply</Text>
        </TouchableOpacity>
    )
};


//VARIABLES
const mblue = 'hsl(238, 40%, 52%)';
//STYLESHEET
const styles = StyleSheet.create({
    replyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 5,
        width: 80,
    },
    replyButtonText: {
        color: mblue,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        fontFamily: 'Rubik',
    },
    replyIcon: {
        width: 20,
        height: 20,
    },
});

export default ReplyButton;
