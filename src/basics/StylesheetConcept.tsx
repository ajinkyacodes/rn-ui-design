import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const StylesheetConcept = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Title</Text>
			<Text style={styles.paragraph} numberOfLines={3}>
				Lorem ipsum dolor{' '}
				<Text
					style={styles.linkText}
					onPress={() => Alert.alert('Text Pressed!')}
				>
					Press Here{' '}
				</Text>
				sit amet consectetur adipisicing elit. Tempora officiis soluta vero sint
				blanditiis ab libero vitae tempore, dolor facere.
			</Text>
		</View>
	);
};

export default StylesheetConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 50,
		fontWeight: 'bold',
		color: '#8c241e',
	},
	paragraph: {
		fontSize: 24,
		paddingHorizontal: 20,
	},
	linkText: {
		color: 'red',
		textDecorationLine: 'underline',
	},
});
