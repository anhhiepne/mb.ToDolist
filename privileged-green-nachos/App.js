import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBMI(bmi.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        placeholder="Height (cm)"
        keyboardType="numeric"
      />

      <Button title="Calculate BMI" onPress={calculateBMI} />

      {bmi && <Text style={styles.result}>Your BMI is {bmi}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: '#cccccc',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    color: '#4CAF50'
  },
});
