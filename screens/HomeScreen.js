import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigation.navigate('Login');
            })
            .catch((error) => {
                // An error happened.
            });
    };

    return (
        <ImageBackground source={require('../assets/adv3.png')} style={styles.container}>
            <View style={styles.content}>
                <Text>{user?.email}</Text>
            </View>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={handleLogout} style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end', // Adjusted justifyContent to 'flex-end'
        alignItems: 'center',
        paddingBottom: 30, // Added paddingBottom to create spacing from the bottom
    },
    bottomButtonContainer: {
        paddingBottom: 150,
    },
    button: {
        backgroundColor: 'skyblue',
        paddingVertical: 15, // Increased padding vertical
        paddingHorizontal: 50, // Increased padding horizontal
        marginBottom: 10, // Lowered margin
        borderRadius: 5, // Add border radius
        marginLeft: 0.5, // Added horizontal spacing
        marginRight: 1, // Added horizontal spacing
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});