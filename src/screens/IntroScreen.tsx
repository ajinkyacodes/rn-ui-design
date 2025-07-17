import { StyleSheet, View } from 'react-native';
import React from 'react';
import FoodLogo from '../assets/FoodLogo';
import SunImage from '../assets/SunImage';

const IntroScreen = () => {
	return (
		<View style={styles.container}>
            <FoodLogo />
            <SunImage style={styles.sunImage} />
		</View>
	);
};

export default IntroScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    sunImage: {
        position: "absolute",
        bottom: 0,
        right: 0
    }
});
