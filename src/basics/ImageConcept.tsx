import { StyleSheet, View, Image } from 'react-native';
import React from 'react';

const ImageConcept = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/meditation.jpg')}
				style={styles.image1}
			/>

			<Image
				source={{ uri: 'https://picsum.photos/200/200' }}
				style={styles.image2}
			/>

			<Image
				source={{ uri: 'https://picsum.photos/200/300' }}
				style={styles.image3}
				blurRadius={5}
			/>
		</View>
	);
};

export default ImageConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 40,
	},
	image1: {
		width: 200,
		height: 200,
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
