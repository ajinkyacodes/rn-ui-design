import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexConcepts = () => {
	return (
		<View style={styles.container}>
			<View
				style={{
					width: 100,
					height: 200,
					backgroundColor: 'tomato',
				}}
			/>
			<View
				style={{
					width: 100,
					height: 100,
					backgroundColor: 'blue',
				}}
			/>
			<View
				style={{
					width: 100,
					height: 100,
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
		flexDirection: 'row', // the main access is the horizontal access
		justifyContent: 'space-evenly', // for horizontal
		alignItems: 'baseline', // for vertical
	},
});
