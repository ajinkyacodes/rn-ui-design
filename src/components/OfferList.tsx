import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import OfferCard from './OfferCard';
import { s, vs } from 'react-native-size-matters';

const OfferTexts = [
	{ id: 1, offerText: '20% OFF DURING THE WEEKEND', buttonText: 'Get Now' },
	{ id: 2, offerText: '15% OFF DURING THE WEEKDAYS', buttonText: 'Get Now' },
	{ id: 3, offerText: '25% OFF DURING THE SUMMER', buttonText: 'Get Now' },
	{ id: 4, offerText: '30% OFF DURING THE MONSOON', buttonText: 'Get Now' },
];

const OfferList = () => {
	const [selectedOffer, setSelectedOffer] = useState(1);

	return (
		<View style={styles.container}>
			<FlatList
				data={OfferTexts}
				// keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<OfferCard
						id={item.id}
						offerText={item.offerText}
						buttonText={item.buttonText}
						onPress={() => setSelectedOffer(item.id)}
						isSelected={selectedOffer === item.id}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					gap: s(16),
					paddingHorizontal: s(23),
				}}
			/>
		</View>
	);
};

export default OfferList;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: vs(10),
	},
});
