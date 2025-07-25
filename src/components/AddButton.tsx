import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Feather from '@expo/vector-icons/Feather';

const AddButton = () => {
	return (
		<TouchableOpacity
			style={{
				borderColor: '#F0F5FA',
				borderWidth: s(2),
				backgroundColor: '#fff',
				borderRadius: s(10),
				paddingVertical: vs(15),
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'row',
				marginTop: vs(15),
			}}
		>
			<Feather name='plus' size={24} color='#FF7622' />
			<Text style={{ color: '#FF7622', fontSize: s(14), fontWeight: 'bold', paddingLeft: s(5) }}>
				ADD NEW
			</Text>
		</TouchableOpacity>
	);
};

export default AddButton;

const styles = StyleSheet.create({});
