import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexConcepts = () => {
	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 2,
					backgroundColor: 'tomato',
				}}
			/>
			<View
				style={{
					flex: 1,
					backgroundColor: 'blue',
				}}
			/>
			<View
				style={{
					flex: 1,
					backgroundColor: 'gold',
				}}
			/>
		</View>
	);
};

export default FlexConcepts;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});
