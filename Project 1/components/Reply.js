// Reply.js - Handles each reply to a comment and the rating of each reply to place in the App.js FlatList
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ReplyButton from './buttons/ReplyButton';
import DeleteButton from './buttons/DeleteButton';
import MsgRating from './MsgRating';
import EditButton from './buttons/EditButton';
import Poster from './Poster';
import DeleteModal from './DeleteModal';

const Reply = ({ reply, index, handleReply, currentUser, handleDelete, handleEdit }) => {
  const [rating, setRating] = useState(reply.score);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <View testID={`reply-${index}`}>
      <View style={styles.replyLine}/>
      <View style={styles.replyContainer}>
        {/* Reply Comment Box Header */}
        <Poster item={reply} index={index} currentUser={currentUser} />
        {/* Reply Comment Box Body */}
        <Text style={styles.replyText}>
          <Text style={styles.respondingTo}>@{reply.replyingTo} &nbsp;</Text>
          {reply.content}
        </Text>
        {/* Reply Comment Box Footer */}
        <View style={styles.replyRatingContainer}>
          <MsgRating rating={rating} setRating={handleRating} />
          {currentUser.username === reply.user.username? (
            <>
              <DeleteButton
                style={styles.replyButton}
                onPress={() => setDeleteModalVisible(true)}
              />
              <EditButton 
                style={styles.replyButton} 
                handler={() => handleEdit('comment', index)} 
              />
            </>
          ) : (
            <ReplyButton style={styles.replyButton} handler={() => handleReply(index)} />
          )}
        </View>
      </View>
      {/* Delete Modal Pop-up */}
      <DeleteModal
        isVisible={deleteModalVisible}
        onDelete={() => {
          handleDelete(index);
          setDeleteModalVisible(false);
        }}
        onCancel={() => setDeleteModalVisible(false)}
      />
    </View>
  );
};

//Variables
const mblue = 'hsl(238, 40%, 52%)';
//Stylesheet
const styles = StyleSheet.create({
  replyContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 10,
    borderRadius: 5,
  },
  replyLine: {
    position: 'absolute',
    left: -15,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: '#ccc',
  },
  replyText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Rubik',
    marginVertical: 2,
  },
  respondingTo:{
    fontFamily: 'Rubik',
    color: mblue,
    fontWeight: '700',
  },
  replyRatingContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  replyButton: {
    marginLeft: 'auto',
    marginRight: 0,
  },
});

export default Reply;
