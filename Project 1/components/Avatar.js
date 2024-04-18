/* Avatar.js - Shows the avatar existing at the given path*/
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ imagePath }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imagePath} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
},
});

export default Avatar;