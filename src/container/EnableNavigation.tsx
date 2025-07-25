import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from '../navigation/MainStackNavigator';
import MyTabs from '../navigation/BottomTabs';

const EnableNavigation = () => {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
};

export default EnableNavigation;

const styles = StyleSheet.create({});
