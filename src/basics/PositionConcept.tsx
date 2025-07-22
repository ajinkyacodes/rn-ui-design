import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PositionConcept = () => {
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
					backgroundColor: 'green',
                    left: 20,
                    top: 100,
                    position: 'relative'
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

export default PositionConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
});
