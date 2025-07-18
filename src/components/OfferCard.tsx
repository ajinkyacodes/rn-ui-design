import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';

interface OfferCardProps {
	offerText: string;
	buttonText: string;
}

const OfferCard: FC<OfferCardProps> = ({ offerText, buttonText }) => {
	return (
		<View>
			<Text>{offerText}</Text>
			<TouchableOpacity>
				<Text>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default OfferCard;

const styles = StyleSheet.create({});
