import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import GreyCircleIcon from '../components/GreyCircleIcon';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { DrawerIcon, HandIcon } from '../assets/Icons';
import OfferList from '../components/OfferList';

const ShoppingPageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<GreyCircleIcon icon={<DrawerIcon />} />
				<GreyCircleIcon
					icon={<SimpleLineIcons name='magnifier' size={24} color='black' />}
				/>
			</View>
			<View
				style={{
					marginTop: vs(25),
					marginBottom: vs(10),
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Text
					style={{ paddingEnd: s(5), fontSize: s(20), fontWeight: 'semibold' }}
				>
					Hello Fola
				</Text>
				<HandIcon />
			</View>
			<Text style={{ marginBottom: vs(10) }}>Let’s start shopping!</Text>
            <OfferList />
		</View>
	);
};

export default ShoppingPageScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: s(23),
		marginTop: vs(40),
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
