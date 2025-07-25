import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';

interface OfferCardProps {
	isSelected?: boolean;
	id: number;
	offerText: string;
	buttonText: string;
	onPress?: () => void;
}

const OfferCard: FC<OfferCardProps> = ({
	isSelected = false,
	id,
	offerText,
	buttonText,
	onPress,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.card, isSelected && styles.selectedCardStyle]}
		>
			<View style={{ display: 'none' }}>
				<Text>{id}</Text>
			</View>
			<Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: s(16) }}>
				{offerText}
			</Text>
			<View
				style={{
					backgroundColor: isSelected ? '#fff' : '#50D63B',
					padding: s(5),
					marginTop: vs(14),
					width: s(80),
					borderRadius: s(15),
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontSize: s(12),
						fontWeight: 'bold',
						color: isSelected ? '#F17547' : '#fff',
					}}
				>
					{buttonText}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default OfferCard;

const styles = StyleSheet.create({
	card: {
		maxWidth: s(250),
		backgroundColor: '#1383F1',
		borderRadius: s(15),
		paddingHorizontal: s(20),
		paddingTop: vs(24),
		paddingBottom: vs(18),
	},
	selectedCardStyle: {
		backgroundColor: '#F17547',
	},
});
