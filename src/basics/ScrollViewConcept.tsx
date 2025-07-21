import { StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

const ScrollViewConcept = () => {
	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}
			// horizontal
			// showsHorizontalScrollIndicator={false}
			contentContainerStyle={{
				backgroundColor: 'yellow',
			}}
		>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
			<Image
				source={{ uri: 'https://picsum.photos/150/150' }}
				style={{ width: 200, height: 200 }}
			/>
		</ScrollView>
	);
};

export default ScrollViewConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: '#fff',
	},
});
