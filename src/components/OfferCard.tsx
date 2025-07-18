import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';

interface OfferCardProps {
	offerText: string;
	buttonText: string;
}

const OfferCard: FC<OfferCardProps> = ({ offerText, buttonText }) => {
	return (
		<View style={styles.container}>
			<Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: s(16) }}>
				{offerText}
			</Text>
			<TouchableOpacity
				style={{
					backgroundColor: '#50D63B',
					padding: s(5),
					marginTop: vs(14),
					width: s(80),
					borderRadius: s(15),
					alignItems: 'center',
				}}
			>
				<Text style={{ fontSize: s(12), fontWeight: 'bold', color: '#fff' }}>
					{buttonText}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default OfferCard;

const styles = StyleSheet.create({
	container: {
		maxWidth: s(250),
		backgroundColor: '#1383F1',
		borderRadius: s(15),
		paddingHorizontal: s(20),
		paddingTop: vs(24),
		paddingBottom: vs(18),
		marginRight: s(15),
	},
});
