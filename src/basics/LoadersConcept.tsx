import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

const LoadersConcept = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={'large'} color={'green'} />
		</View>
	);
};

export default LoadersConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
