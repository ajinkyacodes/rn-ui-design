import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';

const ContactUsScreen = () => {
	return (
		<View style={{ marginTop: 50 }}>
			<UserAvatar />
		</View>
	);
};

export default ContactUsScreen;

const styles = StyleSheet.create({});
