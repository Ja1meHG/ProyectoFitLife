import ISesion from '../../components/ISesion';
import  Registro from '../../components/Registro'
import Saludo from '../../components/Saludo';
import Informacion from '../../components/Informacion'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
    <Stack.Navigator initialRouteName="Bienvenido">
        <Stack.Screen name='ISesion' component={ISesion} options={{ headerShown: false }} />
        <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }}/>
        <Stack.Screen name='Saludo' component={Saludo} options={{ headerShown: false }}/>
        <Stack.Screen name='Informacion' component={Informacion} options={{ headerShown: false }}/>
    </Stack.Navigator>
    );
}
