import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const ModalConcept = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={styles.container}>
			<Button title='Show Modal' onPress={() => setModalVisible(true)} />
			<Modal visible={modalVisible} animationType='slide'>
				<Text style={{ fontSize: 50, marginTop: 50 }}>Modal is opened</Text>
				<Button title='Close Modal' onPress={() => setModalVisible(false)} />
			</Modal>
		</View>
	);
};

export default ModalConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
