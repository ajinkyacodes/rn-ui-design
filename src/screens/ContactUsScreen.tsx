import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserAvatar from '../components/UserAvatar';
import BackButton from '../components/BackButton';
import { s, vs } from 'react-native-size-matters';
import SocialSection from '../components/SocialSection';
import {
	FontAwesome,
	Feather,
	AntDesign,
	FontAwesome5,
} from '@expo/vector-icons';

const ContactUsScreen = () => {
	return (
		<View style={{ marginTop: vs(50), paddingHorizontal: s(17) }}>
			<View style={styles.header}>
				<BackButton />
				<UserAvatar />
			</View>
			<Text style={styles.screenTitle}>Contact Us</Text>
			<View style={styles.socialContainer}>
				<Text style={styles.socialTitle}>Social Media Platforms</Text>
				<SocialSection
					icon={<FontAwesome name='whatsapp' size={s(24)} color='#178AD9' />}
					title='WhatsApp'
				/>
				<SocialSection
					icon={<Feather name='x' size={s(24)} color='#178AD9' />}
					title='X'
				/>
				<SocialSection
					icon={<AntDesign name='instagram' size={s(24)} color='#178AD9' />}
					title='Instagram'
				/>
				<SocialSection
					icon={
						<FontAwesome name='snapchat-ghost' size={s(24)} color='#178AD9' />
					}
					title='Snapchat'
				/>
				<SocialSection
					icon={<FontAwesome5 name='tiktok' size={s(24)} color='#178AD9' />}
					title='TikTok'
				/>
			</View>
		</View>
	);
};

export default ContactUsScreen;

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	socialContainer: {
		backgroundColor: '#F5F5FA',
		borderRadius: s(14),
		paddingHorizontal: s(18),
		paddingVertical: vs(15),
		marginTop: vs(22),
	},
	socialTitle: {
		fontSize: s(16),
		fontWeight: 'semibold',
	},
	screenTitle: {
		fontSize: s(30),
		fontWeight: 'semibold',
		marginTop: vs(20),
		marginStart: s(19),
	},
});
