import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const PurpleScreen = () => {
	const totalLikes = useSelector((state: RootState) => state.dataReducer.totalLikes);
	const userName = useSelector((state: RootState) => state.dataReducer.userName);
	const userRole = useSelector((state: RootState) => state.settingsReducer.userRole);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Purple Screen</Text>
			<Text>Total Likes: {totalLikes}</Text>
			<Text>User Name: {userName}</Text>
			<Text>Role: {userRole}</Text>
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
