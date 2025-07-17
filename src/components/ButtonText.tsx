import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';

interface ButtonTextProps {
	text: string;
}

const ButtonText: FC<ButtonTextProps> = ({ text }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Text style={{ color: '#fff', fontSize: s(14), fontWeight: 'bold' }}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default ButtonText;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FF7622',
		paddingVertical: vs(23),
		alignItems: 'center',
		borderRadius: s(12),
	},
});
