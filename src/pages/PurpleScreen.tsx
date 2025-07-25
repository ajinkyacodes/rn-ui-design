import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const PurpleScreen = () => {	
	const totalLikes = useSelector((state) => state.totalLikes);	
	const userName = useSelector((state) => state.userName);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Purple Screen</Text>			
			<Text>Total Likes: {totalLikes}</Text>
			<Text>User Name: {userName}</Text>
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
