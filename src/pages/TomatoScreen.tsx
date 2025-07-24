import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TomatoScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Gold Screen</Text>
		</View>
	);
};

export default TomatoScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'tomato',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
	},
});
