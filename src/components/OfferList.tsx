import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OfferCard from './OfferCard';

const OfferList = () => {
	return (
		<View>
			<OfferCard offerText='20% OFF DURING THE WEEKEND' buttonText='Get Now' />
		</View>
	);
};

export default OfferList;

const styles = StyleSheet.create({});
