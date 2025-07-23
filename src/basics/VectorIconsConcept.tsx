import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const VectorIconsConcept = () => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={styles.container}>
			<Button title='Show Modal' onPress={() => setModalVisible(true)} />
			<Modal visible={modalVisible} animationType='slide'>
				<Text style={{ fontSize: 50, marginTop: 50 }}>Modal is opened</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <AntDesign name="closecircleo" size={50} color="red" />
                </TouchableOpacity>
			</Modal>
		</View>
	);
};

export default VectorIconsConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gold',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
