import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import LoginInput from '../components/LoginInput';
import SocialCircle from '../components/SocialCircle';
import GoogleLogo from '../assets/GoogleLogo';
import AppleLogo from '../assets/AppleLogo';
import FacebookLogo from '../assets/FacebookLogo';

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcomeText}>Welcome Back!</Text>
			<LoginInput />
			<TouchableOpacity>
				<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.loginButton}>
				<Text style={styles.loginText}>Login</Text>
			</TouchableOpacity>
			<View style={styles.socialContainer}>
				<Text style={{ color: 'grey', fontSize: s(12) }}>
					- OR Continue with -
				</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: vs(20),
						marginBottom: vs(28),
					}}
				>
					<SocialCircle icon={<GoogleLogo />} />
					<View style={{ marginHorizontal: s(10) }}>
						<SocialCircle icon={<AppleLogo />} />
					</View>
					<SocialCircle icon={<FacebookLogo />} />
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={{ color: 'grey', fontSize: s(14), marginRight: s(5) }}>
						Create An Account
					</Text>
					<TouchableOpacity>
						<Text
							style={{
								color: '#F83758',
								fontSize: s(14),
								textDecorationLine: 'underline',
							}}
						>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</View>
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
		textAlign: 'right',
	},
	loginButton: {
		marginTop: vs(40),
		backgroundColor: '#F83758',
		paddingVertical: vs(10),
		borderRadius: s(4),
	},
	loginText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: s(20),
		fontWeight: 'semibold',
	},
	socialContainer: {
		marginTop: vs(75),
		justifyContent: 'center',
		alignItems: 'center',
	},
});
