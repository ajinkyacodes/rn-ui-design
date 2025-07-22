import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { scale, verticalScale, s, vs } from 'react-native-size-matters';

const ResponsiveUIConcept = () => {
	// 3. Libraries for responsive UI
	// Install -----> react-native-size-matters library

	return (
		<View style={styles.container}>
			{/* Responsive UI */}
			<View
				style={{
					width: s(300),
					height: vs(300),
					backgroundColor: 'tomato',
				}}
			/>
		</View>
	);
};

export default ResponsiveUIConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});
