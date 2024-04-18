//DeleteModal.js - Modal pop-up for confirming the deletion of a comment or reply
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const DeleteModal = ({ isVisible, onDelete, onCancel }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Delete Comment</Text>
          <Text style={styles.modalText}>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
              <Text style={styles.textStyle}>NO, CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onDelete}>
              <Text style={styles.textStyle}>YES, DELETE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

//Variables
const sred = 'hsl(358, 79%, 66%)';
const gblue = ' hsl(211, 10%, 45%)';
//Stylesheet
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  deleteButton: {
    backgroundColor: sred,
  },
  cancelButton: {
    backgroundColor: gblue,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Rubik',
  },
  modalTitle: {
    width: '100%',
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'Rubik',
  },
  modalText: {
    marginTop: 10,
    textAlign: 'left',
    fontFamily: 'Rubik',
  },
});

export default DeleteModal;
