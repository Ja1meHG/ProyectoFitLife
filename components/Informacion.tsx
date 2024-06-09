import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from '@rneui/themed'

export default function RegistrationScreen() {
    const [genero, setGenero] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Empecemos!</Text>
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/img/Info.gif')} style={styles.image} />
                </View>
                <View style={styles.formContainer}>
                    <TextInput style={styles.input} placeholder="Ingresa tu nombre" />
                    <TextInput style={styles.input} placeholder="Ingresa tus apellidos" />
                    <TextInput style={styles.input} placeholder="Ingresa tu fecha de nacimiento" />
                    <Picker
                        selectedValue={genero}
                        style={styles.picker}
                        onValueChange={(itemValue) => setGenero(itemValue)}
                    >
                        <Picker.Item label="Selecciona tu género" value="" />
                        <Picker.Item label="Masculino" value="male" />
                        <Picker.Item label="Femenino" value="female" />
                        <Picker.Item label="Otro" value="other" />
                    </Picker>
                    <View style={styles.boton}>
                        <Button title="Continuar" buttonStyle={styles.Button} onPress={() => {}} containerStyle={{
                            marginHorizontal: 50,
                            height: 50,
                            width: 300,
                            marginVertical: 10,
                        }}/>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#465D91'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: '15%'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        right: '20%'
    },
    image: {
        width: 300,
        height: 300,
    },
    formContainer: {
        flex: 1,
        padding: 20,
    },
    input: {
        width: '160%',
        height: 40,
        backgroundColor: '#F5F5F5',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
        color: '#858585',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
    },
    picker: {
        width: '160%',
        height: 50,
        marginBottom: 16,
        color: '#858585',
        backgroundColor: '#F5F5F5',
        fontSize: 15,
        borderRadius: 4,
        maxHeight: 40,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
    },
    boton:{
        position: 'absolute',
        left: '25%',
        top: '95%',
        transform: [{ translateX: -50 }],
    },
    Button:{
        width: '100%',
        height: 50,
        backgroundColor: '#39598E',
        borderRadius: 15,
    }
});
