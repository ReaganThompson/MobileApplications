import { ScrollView, StyleSheet } from 'react-native';
import { View, Text } from '../../components/themed';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import LightDarkSlider from '../../LightDarkSlider';


const Display = () => {
  const { theme, setTheme } = useCustomTheme();

  return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
        <Text style={styles.heading}>Display Settings</Text>
        <View style={styles.line} />
        <View style={styles.singleSetting}> 
          <Text style={styles.text}>
            Theme
          </Text>
          <LightDarkSlider style={styles.slider}/>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
  line: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  singleSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
});

export default Display;