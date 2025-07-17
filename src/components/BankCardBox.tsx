import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { BankCardIcon } from '../assets/Icons';
import LottieView from 'lottie-react-native';

const BankCardBox = () => {
	return (
		<View style={styles.container}>
			<BankCardIcon />
			{/* <LottieView
				autoPlay
				// ref={animation}
				style={{
					width: s(150),
					height: s(150),
				}}
				// Find more Lottie files at https://lottiefiles.com/featured
				source={require('../assets/BankCardAnimation.json')}
			/> */}
			<Text
				style={{
					color: '#32343E',
					fontSize: s(16),
					fontWeight: 'bold',
					marginTop: vs(17),
				}}
			>
				No master card added
			</Text>
			<Text
				style={{
					fontSize: s(15),
					color: '#2D2D2D',
					marginTop: vs(6),
					textAlign: 'center',
				}}
			>
				You can add a mastercard and save it for later
			</Text>
		</View>
	);
};

export default BankCardBox;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F7F8F9',
		borderRadius: s(10),
		marginTop: vs(25),
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: vs(35),
		paddingHorizontal: vs(30),
	},
});
