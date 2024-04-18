import { Text, Pressable, StyleSheet } from 'react-native';

const StyledButton = ({type, text, handler}) => {
  return (
    <Pressable 
      style={
              type==='num' ? styles.button : 
              type==='del' ? styles.delbutton : 
              type==='rst' ? styles.rstbutton : styles.equalbutton
            } onPress={() => handler(text)}>
      <Text style={type==='num' ? styles.buttonText : styles.buttonTextSystem}>{text}</Text>
    </Pressable>
  );
};

/***************
 * STYLE SHEET *
 ***************/

// Variables
const whitebackground = 'hsl(0, 100%, 100%)';
const dbluebackground = 'hsl(225, 21%, 49%)';
const dbluebackgroundshadow = ' hsl(224, 28%, 35%)';
const redbackground = 'hsl(6, 63%, 50%)';
const dredbackgroundshadow = 'hsl(6, 70%, 34%)';
const greyorange = 'hsl(28, 16%, 65%)';
const maintextcolor = 'hsl(221, 14%, 31%)';
const secondarytextcolor = 'hsl(0, 0%, 100%)';
const mainFont = 'League';

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: whitebackground,
    backgroundColor: whitebackground,
    fontFamily: mainFont, 
    //Shadow
    borderBottomWidth: 5,
    borderBottomColor: greyorange,
  },
  delbutton: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: dbluebackground,
    //Shadow
    borderBottomWidth: 5,
    borderBottomColor: dbluebackgroundshadow,
  },
  rstbutton: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: dbluebackgroundshadow,
    backgroundColor: dbluebackground,
    //Shadow
    borderBottomWidth: 5,
    borderBottomColor: dbluebackgroundshadow,
  },
  equalbutton: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: redbackground,
    backgroundColor: redbackground,
    //Shadow
    borderBottomWidth: 5,
    borderBottomColor: dredbackgroundshadow,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: maintextcolor,
  },
  buttonTextSystem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: secondarytextcolor,
  },
});

export default StyledButton;