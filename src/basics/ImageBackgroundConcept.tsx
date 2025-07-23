import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

const ImageBackgroundConcept = () => {
	return (
		<ImageBackground
			style={styles.container}
			source={require('../assets/clothing.jpg')}
		>
			<View
				style={{
					backgroundColor: '#fff',
					height: 200,
					width: 200,
					borderRadius: 15,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={{ fontSize: 24 }}>Hello World!</Text>
			</View>
		</ImageBackground>
	);
};

export default ImageBackgroundConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
