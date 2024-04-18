/* Poster.js - Handles the heading on the post displaying the username and avatar image from the data.json for each user */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Avatar from './Avatar';

const Poster = ({ item, index, currentUser }) => {
    const avatars = {
        juliusomo: require('../assets/images/avatars/image-juliusomo.png'),
        amyrobson: require('../assets/images/avatars/image-amyrobson.png'),
        maxblagun: require('../assets/images/avatars/image-maxblagun.png'),
        ramsesmiron: require('../assets/images/avatars/image-ramsesmiron.png'),
    };

    const username = avatars[item.user.username];
    const isCurrentUser = currentUser.username === item.user.username;

    return (
    <View style={styles.container}>
        {/* Avtar Image */}
        <Avatar imagePath={username} />
        {/* Username */}
        <Text style={styles.username}>{item.user.username}</Text>
        {/* "you" tag */}
        {isCurrentUser && 
        <View style={styles.youTag}>
            <Text style={styles.youTagText}>you</Text>
        </View>}
        {/* Date */}
        <Text style={styles.date}>{item.createdAt}</Text>
    </View>
    );
};

//Variables
const mblue = 'hsl(238, 40%, 52%)';
//Stylesheet
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Rubik',
        marginRight: 10,
    },
    date: {
        color: '#777',
        marginLeft: 'auto',
        fontFamily: 'Rubik',
    },
    youTag: {
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 2.5,
        paddingBottom: 2.5,
        backgroundColor: mblue,
    },
    youTagText: {
        color: 'white',
        fontFamily: 'Rubik',
        fontWeight: '700',
    },
});

export default Poster;
