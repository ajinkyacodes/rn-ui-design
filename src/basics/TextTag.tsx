import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TextTag = () => {
	return (
		<View style={styles.container}>
			<Text
				style={{
					textAlign: 'center',
					fontSize: 50,
					fontWeight: 'bold',
					color: '#8c241e',
				}}
			>
				Title
			</Text>
			<Text style={styles.paragraph} numberOfLines={3}>
				Lorem ipsum dolor{' '}
				<Text
					style={{ color: 'red', textDecorationLine: 'underline' }}
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

export default TextTag;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	paragraph: {
		fontSize: 24,
		paddingHorizontal: 20,
	},
});
