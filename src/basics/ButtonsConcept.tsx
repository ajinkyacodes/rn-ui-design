import {
	StyleSheet,
	View,
	Button,
	Alert,
	Image,
	TouchableOpacity,
	Pressable,
} from 'react-native';
import React from 'react';

const ButtonsConcept = () => {
	const onButtonPress = () => Alert.alert('Button Pressed!');

	const onImagePress = () => Alert.alert('Image Pressed!');

	const onImageTouch = () => Alert.alert('Image Touched!');

	return (
		<View style={styles.container}>
			<Button title='Press Me' onPress={onButtonPress} />

			<Pressable onPress={onImagePress}>
				<Image
					source={{ uri: 'https://picsum.photos/200/200' }}
					style={styles.image2}
				/>
			</Pressable>

			<TouchableOpacity onPress={onImageTouch}>
				<Image
					source={{ uri: 'https://picsum.photos/200/300' }}
					style={styles.image3}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default ButtonsConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 40,
	},
	image2: {
		width: 200,
		height: 200,
		borderRadius: 100,
	},
	image3: {
		width: 200,
		height: 300,
	},
});
