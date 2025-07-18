import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import LoginInput from '../components/LoginInput';

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Welcome Back!</Text>
            <LoginInput />
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>            
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: vs(40),
		paddingHorizontal: s(30),
	},
	welcomeText: {
		fontSize: s(42),
		fontWeight: 'bold',
		color: '#000',
	},
    forgotPasswordText: {
        color: '#F83758',
        fontSize: s(15),
        marginTop: vs(9),
        textAlign: 'right'
    },
    loginButton: {
        marginTop: vs(40),
        backgroundColor: '#F83758',
        paddingVertical: vs(10),
        borderRadius: s(4)
    },
    loginText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: s(20),
        fontWeight: 'semibold'
    }
});
