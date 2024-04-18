// App.js
import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Post from './components/Post';
import AddCommentBox from './components/AddCommentBox';
import data from './assets/data/data.json';
import { useFonts } from 'expo-font';

const App = () => {
  const [comments, setComments] = useState(data.comments);
  const [commentText, setCommentText] = useState('');
  const [activeReplyIndex, setActiveReplyIndex] = useState(null);
  const [phText, setPhText] = useState('Add a comment...');
  const [editing, setEditing] = useState(null);
  const commentInputRef = useRef();
  const currentUser = data.currentUser

  // Load Font
  const [loaded] = useFonts({
    'Rubik': require('./assets/fonts/Rubik-VariableFont_wght.ttf'),
    'Rubik-Italics': require('./assets/fonts/Rubik-Italic-VariableFont_wght.ttf'),
  });
  if(!loaded){
    return null;
  }

  // Add reply functionality
  const addReply = (index, replyText) => {
    if (replyText !== '') {
      let updatedComments = [...comments];
      updatedComments[index].replies.push({
          content: replyText,
          score: 0,
          user: data.currentUser,
          createdAt: new Date().toString().substring(0, 16),
          id: updatedComments[index].replies.length + 1 });
      // mention the user being replied to
      updatedComments[index].replies[updatedComments[index].replies.length - 1].replyingTo = updatedComments[index].user.username;
      setComments(updatedComments);
      setPhText('Add a comment...');
    }
  };

  // Add comment functionality
  const addComment = () => {
    if (commentText !== '') {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          content: commentText,
          replies: [],
          createdAt: new Date().toString().substring(0, 16),
          score: 0,
          user: data.currentUser,
        },
      ]);
      setCommentText('');
    }
  };

  // Reply Functionality
  const handleReply = (index) => {
    setActiveReplyIndex(index);
    setCommentText('');
    commentInputRef.current.focus();
    setPhText('Reply to this comment...');
  };

  // Submit Functionality
  const handleSubmit = () => {
    if (commentText === '') {
      return;
    }

    if (activeReplyIndex !== null) {
      addReply(activeReplyIndex, commentText);
      setActiveReplyIndex(null);
    } else {
      addComment();
    }
    setCommentText('');
  };
  
  // Delete Functionality
  const handleDelete = (index) => {
    let updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  // Edit Update Functionality
  const handleUpdate = () => {
    if (editing.type === 'comment') {
      let updatedComments = [...comments];
      updatedComments[editing.index].content = commentText;
      setComments(updatedComments);
    } else {
      let updatedComments = [...comments];
      updatedComments[editing.index].replies[editing.index].content = commentText;
      setComments(updatedComments);
    }
    setEditing(null);
    setCommentText('');
  };
  
  // Edit Cancel Functionality
  const handleCancel = () => {
    setEditing(null);
    setCommentText('');
  };

  // Render each user posts and replies
  const renderItem = ({ item, index }) => (
    <Post
      item={item}
      index={index}
      handleReply={handleReply}
      comments={comments}
      setComments={setComments}
      currentUser={currentUser}
      handleDelete={handleDelete}
      editing = {editing}
      setEditing = {setEditing}
      setCommentText = {setCommentText}
      commentText = {commentText}
    />
  );
  return (
    <>
      <SafeAreaView style={styles.container} testID='app'>
        <KeyboardAvoidingView
          style={styles.subContainer}
          behavior='height'
          enabled
          contentContainerStyle={{ flexGrow: 1 }} 
        >
          {/* Post List */}
          <FlatList
            style={styles.commentsList}
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id.toString()}
          />
          {/* Comment Box */}
          <AddCommentBox
            commentText={commentText}
            setCommentText={setCommentText}
            handleSubmit={handleSubmit}
            placeholderText={phText}
            inputRef={commentInputRef}
            isEditing={editing !== null}
            handleUpdate={handleUpdate}
            handleCancel={handleCancel}
            user={currentUser}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};


const lgblue = 'hsl(239, 57%, 85%)';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: lgblue,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  commentsList: {
    flexGrow: 1,
    top : 25,
    marginBottom: 220,
  },
});

export default App;