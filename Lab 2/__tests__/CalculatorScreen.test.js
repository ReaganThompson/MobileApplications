import { render, fireEvent } from '@testing-library/react-native';
import CalculatorScreen from '../screens/CalculatorScreen';

describe('CalculatorScreen', () => {
  // test rendering
  it('should render the calculator screen', () => {
    const { getByTestId } = render(<CalculatorScreen />);
    const calculatorScreen = getByTestId('calculator-screen');
    expect(calculatorScreen).toBeDefined();
  });

  // test number input
  it('should add numbers when pressed', () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('1'));
    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('3'));

    expect(calculatorInput.props.value).toBe('123');
  });

  // test addition
  it('should add two numbers when pressed', () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('3'));
    fireEvent.press(getByText('='));

    expect(calculatorInput.props.value).toBe('5');
  });

  // test subtraction
  it('should subtract two numbers when pressed', () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('5'));
    fireEvent.press(getByText('-'));
    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('='));

    expect(calculatorInput.props.value).toBe('3');
  });

  // test multiplication
  it('should multiply two numbers when pressed', () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('3'));
    fireEvent.press(getByText('*'));
    fireEvent.press(getByText('4'));
    fireEvent.press(getByText('='));

    expect(calculatorInput.props.value).toBe('12');
  });

  // test division
  it('should divide two numbers when pressed', () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('8'));
    fireEvent.press(getByText('/'));
    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('='));

    expect(calculatorInput.props.value).toBe('4');
  });

  // test complex calculation
  it('should perform a complex calculation', () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('8'));
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('8'));
    fireEvent.press(getByText('/'));
    fireEvent.press(getByText('2'));
    fireEvent.press(getByText('='));

    expect(calculatorInput.props.value).toBe('12');
  });

  // test a user error case: neighboring operators
  it('should catch some user errors', () => {
    const { getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('8'));
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('*'));
    fireEvent.press(getByText('8'));
    fireEvent.press(getByText('='));

    expect(calculatorInput.props.value).toBe('64');
  });

  // test division by 0
  it('should catch an impossible calculation', () => {
    const {getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('9'));
    fireEvent.press(getByText('/'));
    fireEvent.press(getByText('0'));
    fireEvent.press(getByText('='));

    expect(calculatorInput.props.value).toBe('Infinity');
  });

  // test math with leading zeros
  it('should catch an impossible calculation', () => {
    const {getByText, getByTestId } = render(<CalculatorScreen />);
    const calculatorInput = getByTestId('calculator-input');

    fireEvent.press(getByText('3'));
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('0'));
    fireEvent.press(getByText('0'));
    fireEvent.press(getByText('5'));
    fireEvent.press(getByText('='));

    expect(calculatorInput.props.value).toBe('8.0000');
  });
});
