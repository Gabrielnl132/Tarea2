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
            uri: 'data:image/jpeg;base64,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'
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
    width:100,
    height:100,

  }
});

