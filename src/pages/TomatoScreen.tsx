import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { increaseTotalLikes } from '../store/actions/dataActions';

const TomatoScreen = () => {
	const totalLikes = useSelector((state) => state.totalLikes);
	const dispatch = useDispatch();

	const userName = useSelector((state) => state.userName);

	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Tomato Screen</Text>
			<Button
				title='Go to Gold Screen'
				onPress={() => navigation.navigate('GoldScreen')}
			/>
			<Text
				onPress={() => navigation.navigate('GoldScreen', { name: 'Ajinkya' })}
			>
				Name: Ajinkya
			</Text>
			<Text
				onPress={() => navigation.navigate('GoldScreen', { name: 'Codes' })}
			>
				Name: Codes
			</Text>
			<Text>Total Likes: {totalLikes}</Text>
			<Text>User Name: {userName}</Text>
			<Button title='Like' onPress={() => dispatch(increaseTotalLikes())} />
		</View>
	);
};

export default TomatoScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'tomato',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
	},
});
