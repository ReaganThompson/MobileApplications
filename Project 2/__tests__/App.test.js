import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native';
import axios from 'axios';
import App from '../App';
import RootNavigation from '../src/navigation/RootNavigation';
import HomeScreen from '../src/screens/HomeScreen';
import { Audio } from 'expo-av';

// Mocks
jest.mock('axios');
// RootNavigation component
jest.mock('../src/navigation/RootNavigation');
// HomeScreen - Audio
jest.mock('expo-av', () => {
  const originalModule = jest.requireActual('expo-av');
  const mockCreateAsync = jest.fn().mockResolvedValue({});

  return {
    __esModule: true,
    ...originalModule,
    Audio: {
      ...originalModule.Audio,
      Sound: {
        ...originalModule.Audio.Sound,
        createAsync: mockCreateAsync,
      },
    },
  };
});
afterEach(cleanup);


describe('App', () => {
  // Does the app render?
  test('renders the app', async () => {
    render(<App />);
  }); 
  // 1-2 weeks pre - cover rendering when loading APP since this will return null

  // Does HomeScreen render on start?
  test('navigates to HomeScreen on start', async () => {

    // Get 'Enter a word' text to see if HomeScreen is rendered
    RootNavigation.mockReturnValue(<HomeScreen placeholderText="Enter a word" />);

    const { getByPlaceholderText } = render(<HomeScreen />);
    expect(getByPlaceholderText('Enter a word')).toBeTruthy();
  });
});


describe('Search functionality', () => {
  // Can you interact with the search input?
  test('can search for words using the input field & receive the word back', async () => {
    const { getByPlaceholderText, getByTestId } = render(<HomeScreen />);
    
    const input = getByPlaceholderText('Enter a word');
    fireEvent.changeText(input, 'apple');
    
    const button = getByTestId('searchInputButton');
    fireEvent.press(button);
  
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith('https://api.dictionaryapi.dev/api/v2/entries/en/apple');
    });
  });
  
  // Can the text input display an error message?
  test('see a form validation message when trying to submit a blank form', async () => {
    const { getByPlaceholderText, getByTestId } = render(<HomeScreen />);

    const input = getByPlaceholderText('Enter a word');
    fireEvent.changeText(input, '');

    const button = getByTestId('searchInputButton');
    fireEvent.press(button);

    await waitFor(() => {
      expect(getByPlaceholderText('Word not found')).toBeTruthy();
    });
  });
});

describe('Audio functionality', () => {
  // Mock the sound call (Can't access permissions for speaker)
  test('can create sound asynchronously', async () => {
    const audioUri = 'https://api.dictionaryapi.dev/media/pronunciations/en/apple-uk.mp3';

    await Audio.Sound.createAsync({uri: audioUri});

    expect(Audio.Sound.createAsync).toHaveBeenCalledTimes(1);
    expect(Audio.Sound.createAsync).toHaveBeenCalledWith({uri: audioUri});
  });
});