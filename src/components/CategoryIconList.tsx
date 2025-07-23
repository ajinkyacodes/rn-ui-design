import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CategoryBox from './CategoryBox';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { s, vs } from 'react-native-size-matters';

const categoryData = [
    { label: 'Watch', icon: <MaterialCommunityIcons name='watch-variant' size={40} /> },
    { label: 'Colths', icon: <FontAwesome5 name="tshirt" size={40} /> },
    { label: 'Shopping', icon: <FontAwesome5 name="shopping-bag" size={40} /> },
    { label: 'Shoes', icon: <MaterialCommunityIcons name="shoe-sneaker" size={40} /> },
    { label: 'Sunglass', icon: <MaterialCommunityIcons name='sunglasses' size={40} /> },
];

const CategoryIconList = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

	return (
		<View>
			<FlatList style={styles.container}
                data={categoryData}
				keyExtractor={(item) => item.label}
				renderItem={({ item }) => (
					<CategoryBox
						icon={item.icon}
						onPress={() => setSelectedCategory(item.label)}
						isSelected={selectedCategory === item.label}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					gap: s(16),
					paddingHorizontal: s(23),
					paddingTop: vs(15),
				}}
            
            />				
		</View>
	);
};

export default CategoryIconList;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
});
