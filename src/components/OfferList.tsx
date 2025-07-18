import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OfferCard from './OfferCard';
import { s, vs } from 'react-native-size-matters';

const OfferList = () => {
	return (
		<View style={styles.container}>
			<OfferCard offerText='20% OFF DURING THE WEEKEND' buttonText='Get Now' />
			<OfferCard offerText='20% OFF DURING THE WEEKEND' buttonText='Get Now' />
		</View>
	);
};

export default OfferList;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
        marginTop: vs(10),
		paddingHorizontal: s(23),
	},
});
