import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextInputConcept = () => {
	const [text, setText] = useState('');

	console.log('user Typed: ' + text);

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textInput}
				placeholder='Enter your name'
				keyboardType='default' // url, numeric
				// secureTextEntry={true}
				// multiline = {true}
				// editable

				// Control the text
				value={text}
				onChangeText={setText}
			/>
			<Text>My name is {text}</Text>
		</View>
	);
};

export default TextInputConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		height: 40,
		width: '80%',
		borderRadius: 4,
		borderWidth: 1,
		borderColor: 'grey',
		paddingHorizontal: 15,
	},
});
