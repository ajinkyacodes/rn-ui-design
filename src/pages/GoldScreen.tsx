import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GoldScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Gold Screen</Text>
		</View>
	);
};

export default GoldScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gold',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
	},
});
