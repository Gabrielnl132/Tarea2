import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export const CalculatorScreen = () => {
  const [dividend, setDividend] = useState('');
  const [divisor, setDivisor] = useState('');
  const [result, setResult] = useState('');

  const handleDivide = () => {
    if (divisor === '0') {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else if (dividend === '0' && divisor === '0') {
      setResult('INDETERMINACIÓN');
    } else {
      setResult(`${parseFloat(dividend) / parseFloat(divisor)}`);
    }
  };

  return (
    <View style={styles.container}>
        <Image style={styles.img}
        source={{
            uri: 'https://pbs.twimg.com/media/FEIPy6nXoAUbEcU.jpg'
        }}/>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDividend(text)}
        value={dividend}
        placeholder="Número 1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setDivisor(text)}
        value={divisor}
        placeholder="Número 2"
        keyboardType="numeric"
      />
      <Button title="Dividir" onPress={handleDivide} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginVertical: 10,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  img:{
    width:300,
    height:300,

  }
});

