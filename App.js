import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button, View,Alert,Text} from 'react-native';


export default function App() {
  const [result, setResult] = useState('tähän tulee tulos');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const addTogether = () => {
    const num1 = parseInt(number1) || 0; 
    const num2 = parseInt(number2) || 0;  
    const lisays = num1 + num2;
    setResult(lisays.toString());
  };

  const minusTogether = () => {
    const num1 = parseInt(number1) || 0;  
    const num2 = parseInt(number2) || 0; 
    const erotus = num1 - num2;
    setResult(erotus.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Result: {result}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber1(text)}
        value={number1}
        placeholder="Anna numero"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber2(text)}
        value={number2}
        placeholder="Anna Toinen numero"
        keyboardType="numeric"
      />
      <View>
        <View style={styles.fixToText}>
          <Button
            title="+"
            onPress={addTogether}
          />
          <Button
            title="-"
            onPress={minusTogether}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
  button: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    textAlign: "left",
  },
  title: {
    textAlign: 'center',
    marginVertical: 0,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
});