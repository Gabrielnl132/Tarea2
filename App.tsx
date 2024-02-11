import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CalculatorScreen } from './src/Screens/CalculatorScreen';
import { WelcomeScreen } from './src/Screens/WelcomeScreen';

 const App = () => {
  return (
    
    <NavigationContainer>
      <CalculatorScreen/>
    </NavigationContainer>
  )
}

export default App;
