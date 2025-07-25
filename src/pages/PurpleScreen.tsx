import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { changeUserRole } from '../store/actions/settingsActions';

const PurpleScreen = () => {
	const totalLikes = useSelector(
		(state: RootState) => state.dataReducer.totalLikes
	);
	const userName = useSelector(
		(state: RootState) => state.dataReducer.userName
	);
	const userRole = useSelector(
		(state: RootState) => state.settingsReducer.userRole
	);

	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Purple Screen</Text>
			<Text>Total Likes: {totalLikes}</Text>
			<Text>User Name: {userName}</Text>
			<Text>Role: {userRole}</Text>
			<Button
				title='Change Role'
				onPress={() => {
					const roleName = 'Admin';
					dispatch(changeUserRole(roleName));
					Alert.alert('Role changed to ' + roleName);
				}}
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
