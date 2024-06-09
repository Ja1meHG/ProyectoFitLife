import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed'

const data = [
    {name: 'Informacion', ruta: 'Informacion'}
]

export default function VirtualCoachScreen({navigation}:any) {
    return (
        <View style={styles.outerContainer}>
        {data.map((d, index)=>(
            <View style={styles.container} key={index}>
                <View style={styles.textContainer}>
                    <Text style={styles.saludo}>¡Hola!</Text>
                    <Text style={styles.intro}>Soy tu entrenador virtual.</Text>
                    <Text style={styles.description}>Antes de comenzar, tengo algunas </Text>
                    <Text style={styles.description}>preguntas para diseñar un plan</Text>
                    <Text style={styles.description}>personalizado para ti.</Text>
                </View>
                <Image source={require('../assets/img/Animation.gif')} style={styles.image} />
                <View style={styles.buttonContainer}>
                    <Button title="Continuar" onPress={() => navigation.navigate(d.ruta)} buttonStyle={styles.button} containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 400,
                        marginVertical: 10,
                    }}/>
                </View>
            </View>
        ))}
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button:{
        width: '100%',
        height: 50,
        backgroundColor: '#39598E',
        borderRadius: 15,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '65%',
        height: '80%',
        padding: 20,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    saludo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#465D91'
    },
    intro: {
        fontSize: 20,
        marginTop: 16,
        color: '#001944',
        marginBottom: 10
    },
    description: {
        fontSize: 20,
        marginTop: 0,
        color: '#001944',
    },
    image: {
        width: 300,
        height: 300,
        marginLeft: 16,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: '28%',
        top: '85%',
        transform: [{ translateX: -50 }],
    },
});
