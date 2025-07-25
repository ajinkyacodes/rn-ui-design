import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const GoldScreen = () => {
	const totalLikes = useSelector((state) => state.totalLikes);
	const userName = useSelector((state) => state.userName);	

	const navigation = useNavigation();

	const { name, params } = useRoute();

	console.log(name, params);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Gold Screen</Text>
			<Button
				title='Go to Purple Screen'
				onPress={() => navigation.navigate('PurpleScreen')}
			/>
			<Text>Hello, {params?.name}</Text>
			<Text>Total Likes: {totalLikes}</Text>
			<Text>User Name: {userName}</Text>
		</View>
	);
};

export default GoldScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gold',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
	},
});
