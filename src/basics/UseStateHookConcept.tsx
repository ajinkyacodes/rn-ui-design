import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const UseStateHookConcept = () => {
	const [state, setState] = useState(10);

	const IncreaseValue = () => setState((prevState) => prevState + 1);

	const DecreaseValue = () => setState((prevState) => prevState - 1);

	return (
		<View style={styles.container}>
			<Button title='Increase' onPress={IncreaseValue} />
			<Text style={{ fontSize: 100 }}>{state}</Text>
			<Button title='Decrease' onPress={DecreaseValue} />
		</View>
	);
};

export default UseStateHookConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
