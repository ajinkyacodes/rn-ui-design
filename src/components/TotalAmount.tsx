import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const TotalAmount = () => {
	return (
		<View style={styles.container}>
			<Text style={{ color: '#A0A5BA', fontSize: s(14) }}>TOTAL:</Text>
			<Text style={{ color: '#181C2E', fontSize: s(30), marginStart: s(14) }}>
				$96
			</Text>
		</View>
	);
};

export default TotalAmount;

const styles = StyleSheet.create({
	container: {
		marginTop: vs(40),
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: vs(28),
	},
});
