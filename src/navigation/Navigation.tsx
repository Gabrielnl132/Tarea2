import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../Screens/WelcomeScreen';
import { CalculatorScreen } from '../Screens/CalculatorScreen';



//Lista de Screens que son parte de nuestra navegación
export type RootStackParamList={
Screen1: undefined,
Screen2: undefined,
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle:{
                elevation:0,
            },
            cardStyle:{
                backgroundColor:'#2df1fc'
            }
            
        }}>
      <Stack.Screen name="WelcomeScreen" options={{title: 'Home'}} component={WelcomeScreen} />     
      <Stack.Screen name="Screen1" options={{title: 'Screen 1'}} component={CalculatorScreen} />


    </Stack.Navigator>
  );
}