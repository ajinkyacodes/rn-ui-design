import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { s } from 'react-native-size-matters';
import { SendIcon } from '../assets/Icons';

interface SocialCircleProps {
	icon: React.ReactNode;
}

const SocialCircle: FC<SocialCircleProps> = ({ icon }) => {
	return <TouchableOpacity style={styles.circle}>{icon}</TouchableOpacity>;
};

export default SocialCircle;

const styles = StyleSheet.create({
	circle: {
		height: s(54),
		width: s(54),
		borderRadius: s(40),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FCF3F6',
		borderWidth: s(1),
		borderColor: '#F83758',
	},
});
