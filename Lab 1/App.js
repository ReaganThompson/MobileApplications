import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect , useState} from 'react'; 
import * as Font from 'expo-font';

export default function App() {
  // Loading Outline Font
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Outfit': require('./assets/fonts/Outfit-VariableFont_wght.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  if (!fontLoaded) {
    return null;
  }

  // Font Loaded
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./assets/image-qr-code.png')} style={styles.image}></Image>
        <Text style={styles.h1}>Improve your front-end skills by building projects</Text>
        <Text style={styles.p}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Text>
      </View>
    </View>
  );
}
/////////////////
/* STYLE SHEET */
/////////////////

// Variables
const mainFont = 'Outfit';
const whitecolor = 'hsl(0, 0%, 100%)';
const lgreycolor = 'hsl(212, 45%, 89%)';
const dbluecolor = 'hsl(218, 44%, 22%)';
const greybluecolor = 'hsl(220, 15%, 55%)';

// Declarations
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lgreycolor,
  },
  content: {
    backgroundColor: whitecolor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 40
  },
  h1: {
    fontWeight: 700,
    fontSize: 20,
    margin: 10,
    color: dbluecolor,
    textAlign: 'center',
    fontFamily: mainFont,
  },
  p: {
    margin: 10,
    fontSize: 15,
    color: greybluecolor,
    textAlign: 'center',
    fontFamily: mainFont,
  },
  image: {
    margin: 5,
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});