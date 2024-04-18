// A component that displays a rating and a plus/minus button to vote on the rating for a message
// Props: rating, messageId, userId, updateRating
//        rating: the current rating of the message
//        messageId: the id of the message
//        userId: the id of the user
//        updateRating: a function to update the rating of the message

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconPlus from './icons/IconPlus';
import IconMinus from './icons/IconMinus';

const lgblue = 'hsl(239, 57%, 85%)';
const lggray = 'hsl(223, 19%, 93%)'

const MsgRating = ({ rating, setRating }) => {
    const handleRating = newRating => {
        setRating(newRating);
    };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="plus-button"
        style={styles.button}
        onPress={() => handleRating(rating + 1)}
      >
        <IconPlus fill={lgblue} style={styles.Icon}/>
      </TouchableOpacity>
      <Text style={styles.ratingText}>{rating}</Text>
      <TouchableOpacity
        testID="minus-button"
        style={styles.button}
        onPress={() => handleRating(rating - 1)}
      >
        <IconMinus fill={lgblue} style={styles.Icon}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: lggray,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      padding: 5,
      margin: 5,
      alignSelf: 'flex-start',
  },
  button: {
      color: 'hsl(211, 10%, 45%)',
      borderRadius: 5,
      padding: 5,
      marginHorizontal: 5,
  },
  IconPlus: {
      width: 20,
      height: 20,
  },
  IconMinus: {
      width: 20,
      height: 20,
  },
  ratingText: {
      color: 'hsl(238, 40%, 52%)',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Rubik',
      marginHorizontal: 5,
  },
});

export default MsgRating;