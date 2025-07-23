import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { s, vs } from 'react-native-size-matters';

interface CategoryBoxProps {
	isSelected?: boolean;
	icon: ReactNode;
	onPress?: () => void;
}

const CategoryBox: FC<CategoryBoxProps> = ({
	isSelected = false,
	icon,
	onPress,
}) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.box, isSelected && styles.selectedBoxStyle]}>
				<Text
					style={[styles.iconStyle, isSelected && styles.selectedIconStyle]}
				>
					{icon}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CategoryBox;

const styles = StyleSheet.create({
	box: {
		width: s(60),
		height: vs(60),
		backgroundColor: '#D8D3D3',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: s(7),
        borderWidth: s(2),
        borderColor: '#bbbbbb'
	},
	selectedBoxStyle: {
		backgroundColor: '#F17547',
        borderColor: '#F17547'
	},
	iconStyle: {
		color: '#6e6e6e',
	},
	selectedIconStyle: {
		color: '#fff',
	},
});
