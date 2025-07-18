import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { s } from 'react-native-size-matters';

interface GreyCircleIconProps {
	icon: React.ReactNode;
}

const GreyCircleIcon: FC<GreyCircleIconProps> = ({ icon }) => {
	return <TouchableOpacity style={styles.container}>{icon}</TouchableOpacity>;
};

export default GreyCircleIcon;

const styles = StyleSheet.create({
	container: {
		width: s(40),
		height: s(40),
		backgroundColor: '#D9D9D9',
		borderRadius: s(40),
		justifyContent: 'center',
		alignItems: 'center',
	},
});
