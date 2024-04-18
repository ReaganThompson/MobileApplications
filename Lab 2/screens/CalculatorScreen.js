import { useState } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import StyledButton from '../components/StyledButton';
// import Decimal from 'decimal.js';

const CalculatorScreen = () => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState('');
  const [hasDecimal, setHasDecimal] = useState(false); 
  const [currentLength, setCurrentLength] = useState(0);

  // triggered when a number is pressed
  const handleNumberPress = (number) => {
    if (display === '0') {
      setDisplay(number);
      setMemory(memory + number);
      setCurrentLength(currentLength + 1);
    } else {
      setDisplay(display + number);
      setMemory(memory + number);
      setCurrentLength(currentLength + 1);
    }
  };

  // triggered when an operator is pressed
  const handleOperatorPress = (operator) => {
    // new number; reset HasDecimal
    if(hasDecimal){
      setHasDecimal(false); 
    }
    if(["+", "-", "*", "/"].includes(display.slice(-1))){
      const newDisplay = display.substring(0, display.length - 1);
      const newMemory  = memory.substring(0, memory.length - 1);
      setDisplay(newDisplay + operator);
      setMemory(newMemory + operator);
    }else{ 
      //Set multiplication to asterisk
      if(operator === 'x'){
        setMemory(memory + "*");
        setDisplay(memory + "*");
      }else{
        setMemory(memory + operator);
        setDisplay(memory + operator);
      }
    }
  }

  // triggered when the equal sign is pressed
  const handleEqualPress = () => {
    //Set variable length for infinite decimal returns
    //const res = new Decimal(eval(memory));
    const res = eval(memory).toFixed(currentLength);
    
    setDisplay(res + '');
    setMemory(res + '');
    setHasDecimal((res + '').includes('.')); 
  };

  // triggered when the clear button is pressed
  const handleClearPress = () => {
    setDisplay('0');
    setMemory('');
    setHasDecimal(false);
    setCurrentLength(0);
  };

  // triggered when the delete button is pressed
  const handleDeletePress = () => {
    const newDisplay = display.substring(0, display.length - 1);
    const newMemory  = memory.substring(0, memory.length - 1);

    setHasDecimal(newDisplay.includes('.'));
    setDisplay(newDisplay);
    setMemory(newMemory);
  };

  // triggered when the decimal button is pressed
  const handleDecimalPress = () => {
    if(!hasDecimal){
      setHasDecimal(true);
      setMemory(memory + '.');
      setDisplay(display + '.');
    }
  }

  return (
    <View style={styles.container} testID='calculator-screen'>
      <Text style={styles.title}>calc</Text>
      <TextInput style={styles.result} value={display} editable={false} testID='calculator-input' />
      <View style={styles.numpad}>
        <View style={styles.row}>
          <StyledButton type='num' text='7' handler={handleNumberPress} />
          <StyledButton type='num' text='8' handler={handleNumberPress} />
          <StyledButton type='num' text='9' handler={handleNumberPress} />
          <StyledButton type='del' text='DEL' handler={handleDeletePress} />
        </View>
        <View style={styles.row}>
          <StyledButton type='num' text='4' handler={handleNumberPress} />
          <StyledButton type='num' text='5' handler={handleNumberPress} />
          <StyledButton type='num' text='6' handler={handleNumberPress} />
          <StyledButton type='num' text='+' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton type='num' text='1' handler={handleNumberPress} />
          <StyledButton type='num' text='2' handler={handleNumberPress} />
          <StyledButton type='num' text='3' handler={handleNumberPress} />
          <StyledButton type='num' text='-' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton type='num' text='.' handler={handleDecimalPress} />
          <StyledButton type='num' text='0' handler={handleNumberPress} />
          <StyledButton type='num' text='/' handler={handleOperatorPress} />
          <StyledButton type='num' text='x' handler={handleOperatorPress} />
        </View>
        <View style={styles.row}>
          <StyledButton type='rst' text='RESET' handler={handleClearPress} />
          <StyledButton type='equal' text='=' handler={handleEqualPress} />
        </View>
      </View>
    </View>
  );
};

/***************
 * STYLE SHEET *
 ***************/

// Variables
const mainFont = 'League';
const vdblueMain = 'hsl(222, 26%, 31%)';
const vdblueKeypad = 'hsl(223, 31%, 20%)';

//Declarations
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: vdblueMain,
  },
  title: {
    width: '85%',
    color: '#fff',
    fontSize: 25,
    paddingBottom: 20,
    fontWeight: '500',
    fontFamily: mainFont,
  },
  result: {
    width: '85%',
    height: 80,
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 10,
    backgroundColor: vdblueKeypad,
    borderRadius: 5,
    padding: 10,
    color: 'hsl(0, 0%, 100%)',
  },
  numpad:{
    backgroundColor: vdblueKeypad,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
});

export default CalculatorScreen;