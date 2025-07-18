import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import LoginInput from '../components/LoginInput';

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Welcome Back!</Text>
            <LoginInput />
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
});
