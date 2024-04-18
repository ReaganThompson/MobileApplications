import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../../components/themed';
import axios from 'axios';
import Logo from '../../components/useLogo';
import SearchIcon from '../../components/SearchIcon';
import useCustomTheme from '../../hooks/useCustomTheme';
import GetDefinitions from '../../components/GetDefinitions';
import { Audio } from 'expo-av';
import PlayIcon from '../../components/PlayIcon';

const HomeScreen = () => {
  const [word, setWord] = useState('');
  const [text, setText] = useState('');
  const [placeholder, setPlaceholder] = useState('Enter a word');
  const [definitions, setDefinitions] = useState([]);
  const [pronunciation, setPronunciation] = useState('');
  const [sound, setSound] = useState(null);
  const [source, setSource] = useState('');
  const [update, setUpdate] = useState(false);
  const { colors } = useCustomTheme();
  const handleSearch = async () => {
    try {
      //Query
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      //Definitions
      const definitions = response.data[0].meanings;
      setDefinitions(definitions);
      //Phonetic Spelling
      const pronunciation = response.data[0].phonetics[0].text;
      setPronunciation(pronunciation);
      //Citation
      const source = response.data[0].sourceUrls[0];
      setSource(source);
      //Word
      setText(word);
      //Audio
      const sound = response.data[0].phonetics[0].audio;
      setSound(sound);
      setUpdate(true);
      setPlaceholder('Enter a word');
    } catch (error) {
      console.error(error);
      setUpdate(false);
      setWord('');
      setPlaceholder('Word not found');
    }
  };  
  //console.log(definitions);

  const playSound = async () => {
    // Save the audio
    const { sound : soundObject } = await Audio.Sound.createAsync(
      { uri: sound },
      { shouldPlay: true }
    );
    // Play the audio
    soundObject.setOnPlaybackStatusUpdate(async (playbackStatus) => {
      if (playbackStatus.didJustFinish) {
        await soundObject.unloadAsync();
      }
    });
  };
  return (
    <View style={{ ...styles.container, backgroundColor: colors.backgroundSecondary
    }}>
      <View style={styles.pageStack}>
        <View style={styles.pageHeader}>
          <Logo style={styles.logo} />
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={{...styles.input, backgroundColor: colors.background, color: colors.textMidContrast}}
            placeholder={placeholder}
            placeholderTextColor={colors.textHighContrast}
            value={word}
            onChangeText={text => setWord(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch} testID='searchInputButton'>
            <SearchIcon style={styles.search} />
          </TouchableOpacity>
        </View>
        <View style={{... styles.topOfWordDesc}}>
          {update ? (
            <>
            <View style={{... styles.header}}>
              <Text style={{... styles.bigWord, color: colors.textMidContrast}}>{text}</Text>
              {sound ? (
                <PlayIcon onPress={playSound}/>
              ) : null}
            </View>
            <Text style={{... styles.pronunciation, color: colors.textMidContrast}}>{pronunciation}</Text>
            </>
          ) : null}
        </View>
      {/* Description of the word*/}
      {update ? (
          <View style={styles.wordDesc}>
            <GetDefinitions item={definitions} />
            <View style={styles.divider}/>
            {source ? (
              <Text style={{... styles.source, color: colors.textMidContrast}}>Source: {source}</Text>
            ) : null}
          </View>
      ) : null}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  pageStack: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 25,
  },
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 50,
  },
  searchBar: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
    justifyContent: 'flex-start', 
  },
  input: {
    width: '95%',
    padding: 10,
    top: 15,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    fontSize: 18,
  },
  search: {
    width: 20,
    height: 20,
    // place search icon inside of the search bar
    position: 'absolute',
    right: 20,
    top: 5,
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  topOfWordDesc: {
    width: '90%',
    flexDirection: 'row',
    // alignItems: 'left',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: 20,
  },
  bigWord: {
    fontSize: 40,
    marginTop: 20,
    textAlign: 'left',
  }, 
  pronunciation: {
    fontSize: 20,
    marginTop: 15,
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  wordDesc: {
    flex: 1,
    width: '90%',
    padding: 20,
    borderRadius: 5,
    marginTop: 15,
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  header:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
