// DeleteButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import IconDelete from '../icons/IconDelete';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={onPress}>
      <IconDelete style={styles.deleteIcon} />
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  deleteIcon: {
    width: 12,
    height: 14,
  },
  deleteButtonText: {
    color: '#ED6368',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Rubik',
    marginLeft: 5,
  },
});

export default DeleteButton;