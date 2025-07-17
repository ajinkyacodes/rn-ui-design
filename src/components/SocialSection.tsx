import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import SendButton from './SendButton';
import { s, vs } from 'react-native-size-matters';

interface SocialSection {
	title: string;
	icon: React.ReactNode;
}
const SocialSection: FC<SocialSection> = ({ title, icon }) => {
	return (
		<View style={styles.container}>
            {/* Not using <SocialCircle /> to avoid prop drilling. Instead using only circle styling on <View> tag */}
			<View style={styles.circle}>{icon}</View>
			<Text style={styles.text}>{title}</Text>
			<SendButton />
		</View>
	);
};

export default SocialSection;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#E4E6E8',
		paddingVertical: vs(15),
	},
	text: {
		marginStart: s(14),
		flex: 1,
		color: '#8083A3',
		fontSize: s(12),
	},
	circle: {
		height: s(46),
		width: s(46),
		borderRadius: s(40),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: s(1),
		borderColor: '#E4E6E8',
	},
});
