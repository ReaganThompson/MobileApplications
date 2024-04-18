//AddCommentBox.js - Box that allows the user to add a comment to a post or reply to a comment
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Avatar from './Avatar';

const AddCommentBox = (props) => {
  const {
    commentText,
    setCommentText,
    placeholderText,
    handleSubmit,
    inputRef,
    isEditing,
    handleUpdate,
    handleCancel,
    item,
  } = props;
  const avatar = require('../assets/images/avatars/image-juliusomo.png');

  return (
    <View style={styles.inputContainer}>
      {/* Text Box */}
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={commentText}
        onChangeText={setCommentText}
        placeholder={placeholderText}
        onSubmitEditing={isEditing ? handleUpdate : handleSubmit}
        multiline={true}
      />
      {/* Footer */}
      <View style={styles.buttonContainer}>
        <Avatar imagePath={avatar} style={styles.avatar} />
        {isEditing ? (
        <>
          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateButtonText}>UPDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
          <Text style={styles.sendButtonText}>SEND</Text>
        </TouchableOpacity>
      )}
      </View>
    </View>
  );
};    
// Stylesheet
const styles = StyleSheet.create({
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    fontFamily: 'Rubik',
  },
  input: {
    color: '#333',
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    height: 100,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlignVertical: 'top',
    padding: 5,
    marginHorizontal: 10,
    marginTop: 10,
    fontFamily: 'Rubik',
    marginBottom: 80,
  },
  sendButton: {
    flex: 1,
    position: 'absolute',
    right: 0,
    backgroundColor: '#3F51B5',
    padding: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Rubik',
  },
  updateButton: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#3F51B5',
    padding: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Rubik',
  },
  cancelButton: {
    position: 'absolute',
    right: 135,
    backgroundColor: '#3F51B5',
    padding: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Rubik',
  },
  /* buttonContainer contains avatar and the bottom row buttons*/
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,

  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
});

export default AddCommentBox;