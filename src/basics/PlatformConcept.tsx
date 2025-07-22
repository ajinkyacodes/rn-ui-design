import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';

const PlatformConcept = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				This is {Platform.OS === 'android' ? 'Android' : 'iOS'} Phone
			</Text>
		</View>
	);
};

export default PlatformConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Platform.OS === 'android' ? 'aqua' : 'red',
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});
