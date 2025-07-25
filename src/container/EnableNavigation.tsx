import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from '../navigation/MainStackNavigator';
import MyTabs from '../navigation/BottomTabs';
import { Provider } from 'react-redux';
import store from '../store/store';

const EnableNavigation = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<MyTabs />
			</NavigationContainer>
		</Provider>
	);
};

export default EnableNavigation;

const styles = StyleSheet.create({});
