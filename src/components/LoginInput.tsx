import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { s, vs } from 'react-native-size-matters';

const LoginInput = () => {
	const [usernameInput, setUsernameInput] = useState('');
	const [passwordInput, setPasswordInput] = useState('');
	const [showPassword, setShowPassword] = useState(false); // 👈 Add state to toggle visibility

	return (
		<View>
			<View style={styles.inputContainer}>
				<FontAwesome
					style={styles.inputIcon}
					name='user'
					size={24}
					color='black'
				/>
				<TextInput
					style={styles.inputText}
					value={usernameInput}
					onChangeText={setUsernameInput}
					placeholder='Username or Email'
					keyboardType='email-address'
				/>
			</View>
			<View style={styles.inputContainer}>
				<FontAwesome5
					style={styles.inputIcon}
					name='unlock-alt'
					size={24}
					color='black'
				/>
				<TextInput
					style={styles.inputText}
					value={passwordInput}
					onChangeText={setPasswordInput}
					placeholder='Password'
					secureTextEntry={!showPassword} // 👈 Toggle visibility
				/>
				<TouchableOpacity
					style={styles.eyeIcon}
					onPress={() => setShowPassword((prev) => !prev)} // 👈 Toggle logic
				>
					<Ionicons
						name={showPassword ? 'eye-off-outline' : 'eye-outline'} // 👁‍🗨 Icon changes
						size={24}
						color='black'
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default LoginInput;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: vs(25),
	},
	inputIcon: {
		position: 'absolute',
		zIndex: 1,
		paddingStart: s(12),
		color: '#626262',
	},
	inputText: {
		backgroundColor: '#F3F3F3',
		width: '100%',
		borderWidth: s(1),
		borderColor: '#A8A8A9',
		borderRadius: s(10),
		paddingHorizontal: s(35),
		paddingTop: vs(10),
		paddingBottom: vs(10),
	},
	eyeIcon: {
		position: 'absolute',
		zIndex: 1,
		right: s(5),
		paddingEnd: s(12),
		color: '#626262',
	},
});
