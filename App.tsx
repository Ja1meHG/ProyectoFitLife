import React from 'react';
import ISesion from './components/ISesion'
import Registro from './components/Registro';
import Saludo from './components/Saludo';
import Informacion from './components/Informacion'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ISesion' component={ISesion} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Saludo' component={Saludo} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Informacion' component={Informacion} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
