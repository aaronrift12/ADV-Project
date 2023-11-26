import { View, TextInput, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../config/firebase.config";
import { useState } from "react";

export default function LoginScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onPressLogin = (e) => {
        // createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     const user = userCredential.user;
        //     alert('Successfully registered');
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorCode, errorMessage);
        //     // ..
        // });
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert(errorMessage);
        });
    }

    return (
        <ImageBackground source={require('../assets/adv2.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        onChangeText={(val) => setEmail(val)}
                        value={email}
                        placeholder="Enter your email address"
                        keyboardType="email-address"
                        style={styles.input}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        onChangeText={(val) => setPassword(val)}
                        value={password}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity 
                    onPress={onPressLogin}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 80,
        justifyContent: 'flex-end',
    },
    formContainer: {
        marginBottom: 10,
    },
    label: {
        marginBottom: 10,
        fontSize: 16,
    },
    input: {
        width: '100%',
        height: 60, // Increased height
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10, // Lowered margin
        paddingHorizontal: 10,
        borderRadius: 5, // Add border radius
        marginLeft: 0, // Added horizontal spacing
        marginRight: 30, // Added horizontal spacing
    },
    button: {
        backgroundColor: 'skyblue',
        paddingVertical: 15, // Increased padding vertical
        paddingHorizontal: 70, // Increased padding horizontal
        marginBottom: 10, // Lowered margin
        borderRadius: 5, // Add border radius
        marginLeft: 0.5, // Added horizontal spacing
        marginRight: 1, // Added horizontal spacing
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});