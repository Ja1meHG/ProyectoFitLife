import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const data = [
    {name: 'ISesion', ruta: 'ISesion'},
];

export default function Registro({navigation}:any) {
    navigation = useNavigation();

    return (
        <View style={styles.container}>
            {data.map((d, index)=>(
            <>
                <View style={styles.container1}>
                    <Text style={styles.titleRight}>¡Bienvenido!</Text>
                    <Text style={styles.subtitle}>Inicia sesión con tu cuenta</Text>
                        <Button title='Iniciar sesión' buttonStyle={styles.registerButton} onPress={() => navigation.navigate(d.ruta)} containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 200,
                        marginVertical: 10,
                    }}/>
                </View>
                <View style={styles.container2} key={index}>
                    <Text style={styles.titleLeft}>Crea una cuenta</Text>
                    <View style={styles.socialIcons}>
                        <Icon name="facebook-square" size={30} color={'blue'} />
                        <Icon name="google" size={30} color={''} />
                        <Icon name="twitter-square" size={30} style={{ color: "#74C0FC", }} />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '400', marginBottom: 5, color: '#575757' }}>O usa tu email para el registro</Text>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'#575757'} />
                    <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor={'#575757'} />
                    <Button title='Registrarse' buttonStyle={styles.signInButton} containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 200,
                        marginVertical: 10,
                    }}/>
                </View>
                </>
            ))}
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
        backgroundColor: '#3C3C74',
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
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
    titleLeft: {
        fontSize: 30,
        fontWeight: '600',
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
        width: '40%',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
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
    registerButton: {
        borderColor: 'white',
        borderRadius: 15,
        paddingVertical: 10,
        backgroundColor: 'transparent',
        borderWidth: 1,
    },
});
