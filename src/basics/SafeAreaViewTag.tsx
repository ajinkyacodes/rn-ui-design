import {
	StyleSheet,
	Text,
	SafeAreaView,
	Platform,
	StatusBar,
} from 'react-native';
import React from 'react';

const SafeAreaViewTag = () => {
	return (
		<SafeAreaView style={styles.AndroidSafeArea}>
			<Text>SafeAreaView</Text>
		</SafeAreaView>
	);
};

export default SafeAreaViewTag;

const styles = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
