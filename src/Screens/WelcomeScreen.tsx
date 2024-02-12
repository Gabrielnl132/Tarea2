import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';


export const WelcomeScreen = ({ navigation}) => {
  return (
    <View >
      <Text>Bienvenido</Text>
      <Image 
        source={{
          uri: 'https://i.pinimg.com/originals/b5/2a/19/b52a199a2ad77ba3c83b73db91851223.jpg',
        }}
        style={{ width: 200, height: 200 , alignItems: 'center', alignSelf:'center', marginBottom: 50, marginTop: 50,}}
      />

      <Button title='Iniciar Calculadora' onPress={() => navigation.NavigationContainer('Calculator')} />

    </View>
  );
};


