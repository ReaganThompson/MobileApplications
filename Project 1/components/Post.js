// Post.js - Handles each post and its replies and the rating of each post to place in the Apps FlatList
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReplyButton from './buttons/ReplyButton';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import MsgRating from './MsgRating';
import Reply from './Reply';
import Poster from './Poster';
import DeleteModal from './DeleteModal';

const Post = (props) => {
  const { item, index, handleReply, comments, setComments, currentUser, handleDelete, editing, setEditing, setCommentText, commentText } = props;
  const [rating, setRating] = useState(item.score);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  // Rating Handler for each Post
  const handleRating = (newRating) => {
    setRating(newRating);
    let updatedComments = [...comments];
    updatedComments[index].score = newRating;
    setComments(updatedComments);
  };

  // Handles the deletion of a comments reply
  const handleReplyDelete = (replyIndex) => {
    let updatedComments = [...comments];
    updatedComments[index].replies.splice(replyIndex, 1);
    setComments(updatedComments);
  };

  // Handles the edit button on the comment, sets the editing state to true
  const handleEdit = (type, index) => {
    if (type === 'comment') {
      setEditing({ type, index });
      setCommentText(comments[index].content);
    } else {
      setEditing({ type, index });
      setCommentText(comments[index].replies[index].content);
    }
  };

  return (
    <View style={styles.commentSection} testID={`post-${index}`}>
      <View style={styles.commentContainer}>
        {/* Comment Box Header */}
        <Poster item={item} index={index} currentUser={currentUser} />
        {/* Comment Box Body */}
        <Text style={styles.commentText}>{item.content}</Text>
        {/* Comment Box Footer */}
        <View style={styles.replyRatingContainer}>
          <MsgRating rating={item.score} setRating={handleRating} />
          {currentUser.username === item.user.username ? (
            <>
              <DeleteButton
                style={styles.replyButton}
                onPress={() => setDeleteModalVisible(true)}
              />
              <EditButton style={styles.replyButton} handler={() => handleEdit('comment', index)} />
            </>
          ) : (
            <ReplyButton style={styles.replyButton} handler={() => handleReply(index)} />
          )}
        </View>
      </View>
      {/* Comment Replies */}
      <View style={styles.replyList}>
        {item.replies.map((reply, i) => (
          <Reply
            key={i}
            reply={reply}
            handleReply={() => handleReply(index)}
            comments={comments}
            setComments={setComments}
            currentUser={currentUser}
            handleDelete={() => handleReplyDelete(i)}
            handleEdit={() => handleEdit('reply', index)}
          />
        ))}
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
}
// Stylesheet
const styles = StyleSheet.create({
  commentSection: {
    margin: 10,
  },
  commentContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 5,
  },
  commentText: {
    fontSize: 16,
    fontFamily: 'Rubik',
  },
  replyList: {
    marginTop: 5,
    marginLeft: 15,
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
    fontFamily: 'Rubik',
  },
  date: {
    color: '#777',
  },
});

export default Post;
