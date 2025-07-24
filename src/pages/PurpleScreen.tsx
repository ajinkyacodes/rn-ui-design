import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PurpleScreen = () => {
	const navigation = useNavigation();
    
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Purple Screen</Text>
			<Button
				title='Go to Tomato Screen'
				onPress={() => navigation.navigate('TomatoScreen')}
			/>
		</View>
	);
};

export default PurpleScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'purple',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
	},
});
