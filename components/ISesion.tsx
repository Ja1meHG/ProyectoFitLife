import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const data = [
    {name: 'Registro', ruta: 'Registro'},
    {name: 'Saludo', ruta: 'Saludo'},
];

export default function HomeScreen({navigation}:any) {
    navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <>
                <View style={styles.container2}>
                    <Text style={styles.titleLeft}>Iniciar sesión</Text>
                    <View style={styles.socialIcons}>
                        <Icon name="facebook-square" size={30} color={'blue'} />
                        <Icon name="google" size={30} color={''} />
                        <Icon name="twitter-square" size={30} style={{ color: "#74C0FC", }} />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 5 }}>O usa tu email</Text>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#575757'} />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor={'#575757'} />
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <Button title='Iniciar sesión'onPress={()=> navigation.navigate('Saludo')}  buttonStyle={styles.signInButton} containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 200,
                        marginVertical: 10,
                    }}/>
                </View>
                <View style={styles.container1}>
                    <Text style={styles.titleRight}>¡Hola!</Text>
                    <Text style={styles.subtitle}>Crea una cuenta</Text>
                    <View style={styles.buttonWrapper} >
                        <Button title='Registrarse' buttonStyle={styles.registerButton} onPress={() => navigation.navigate('Registro')} containerStyle={{
                            marginHorizontal: 50,
                            height: 50,
                            width: 200,
                            marginVertical: 10,
                            }}
                            />
                    </View>
                </View>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 60,
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59598E',
        width: '40%',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '40%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
    },
    titleLeft: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    titleRight: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '300',
        color: 'white',
        marginBottom: 20,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#D9D9D9'
    },
    forgotPassword: {
        color: '#4285F4',
        marginBottom: 20,
    },
    signInButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#39598E',
        borderRadius: 15,
    },
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    registerButton: {
        borderColor: 'white',
        borderRadius: 15,
        width: '100%',
        paddingVertical: 10,
        backgroundColor: 'transparent',
        borderWidth: 1,
    },
});
