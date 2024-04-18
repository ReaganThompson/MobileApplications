//App.test.js
import React from 'react';
import { render, fireEvent, within } from '@testing-library/react-native';

import App from '../App';
import AddCommentBox from '../components/AddCommentBox';
import DeleteModal from '../components/DeleteModal';
import MsgRating from '../components/MsgRating';
import DeleteButton from '../components/buttons/DeleteButton';
import EditButton from '../components/buttons/EditButton';
import ReplyButton from '../components/buttons/ReplyButton';

// test if the app renders correctly without crashing
describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});

// testing the input text box
describe('AddCommentBox', () => {
  // does it render?
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<AddCommentBox placeholderText="Write a comment..." />);
    expect(getByPlaceholderText('Write a comment...')).toBeTruthy();
  });

  // can you interact and change the text
  it('text updtaed to "New comment"', () => {
    const setCommentText = jest.fn();
    const { getByPlaceholderText } = render(
      <AddCommentBox placeholderText="Write a comment..." setCommentText={setCommentText} />
    );
    fireEvent.changeText(getByPlaceholderText('Write a comment...'), 'New comment');
    expect(setCommentText).toHaveBeenCalledWith('New comment');
  });

  // can you submit a new comment
  it('can add a comment', () => {
    const addCommentMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <AddCommentBox placeholderText="Write a comment..." handleSubmit={addCommentMock} />
    );
    fireEvent.changeText(getByPlaceholderText('Write a comment...'), 'New comment');
    fireEvent.press(getByText('SEND')); 
    expect(addCommentMock).toHaveBeenCalled();
  });
});

// test if the delete modal can render without crashing
describe('DeleteModal', () => {
  it('renders correctly', () => {
    const { getByText } = render(<DeleteModal isVisible={true} />);
    expect(getByText('Delete Comment')).toBeTruthy();
  });
});

// test if the voting button can render without crashing
describe('MsgRating', () => {
  it('renders correctly', () => {
    const { getByText } = render(<MsgRating rating={5} />);
    expect(getByText('5')).toBeTruthy();
  });

  // test case to check if the rating increases when the plus button is pressed
  it('increases rating when plus button is pressed', () => {
    const setRatingMock = jest.fn();
    const { getByTestId } = render(<MsgRating rating={5} setRating={setRatingMock} />);
    const plusButton = getByTestId('plus-button');
    fireEvent.press(plusButton);
    expect(setRatingMock).toHaveBeenCalledWith(6);
  });

  // test case to check if the rating decreases when the minus button is pressed
  it('decreases rating when minus button is pressed', () => {
    const setRatingMock = jest.fn();
    const { getByTestId } = render(<MsgRating rating={5} setRating={setRatingMock} />);
    const minusButton = getByTestId('minus-button');
    fireEvent.press(minusButton);
    expect(setRatingMock).toHaveBeenCalledWith(4);
  });
});

// testing the delete button functionality
describe('DeleteButton', () => {
  // does it render and can you interact with it?
  it('renders correctly and responds to press', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<DeleteButton onPress={onPressMock} />);
    const button = getByText('Delete');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});

// testing the edit button functionality
describe('EditButton', () => {
  // does it render and can you interact with it?
  it('renders correctly and responds to press', () => {
    const handlerMock = jest.fn();
    const { getByText } = render(<EditButton handler={handlerMock} />);
    const button = getByText('Edit');
    fireEvent.press(button);
    expect(handlerMock).toHaveBeenCalled();
  });
});

// testing the reply button functionality
describe('ReplyButton', () => {
  // does it render and can you interact with it?
  it('renders correctly and responds to press', () => {
    const handlerMock = jest.fn();
    const { getByText } = render(<ReplyButton handler={handlerMock} />);
    const button = getByText('Reply');
    fireEvent.press(button);
    expect(handlerMock).toHaveBeenCalled();
  });
});
