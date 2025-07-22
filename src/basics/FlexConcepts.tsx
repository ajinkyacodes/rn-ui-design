import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexConcepts = () => {
	return (
		<View style={styles.container}>
			<View
				style={{
					width: 90,
					height: 90,
					backgroundColor: 'tomato',
				}}
			/>
			<View
				style={{
					width: 90,
					height: 90,
					backgroundColor: 'grey',
				}}
			/>
			<View
				style={{
					width: 90,
					height: 90,
					backgroundColor: 'green',
				}}
			/>
			<View
				style={{
					width: 90,
					height: 90,
					backgroundColor: 'blue',
				}}
			/>
			<View
				style={{
					width: 90,
					height: 90,
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
		flexWrap: 'wrap',
		backgroundColor: 'white',
		flexDirection: 'row', // the main access is the horizontal access
		// justifyContent: 'space-evenly', // for horizontal
		alignItems: 'center', // for vertical
		alignContent: 'center',
	},
});
