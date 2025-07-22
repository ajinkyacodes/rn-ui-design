import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MarginPaddingConcept = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.view1}>
				<Text style={styles.text}>Hello</Text>
				<Text style={styles.text}>Text 2</Text>
			</View>
			<View style={styles.view2}>
                <View style={styles.childView}></View>
            </View>
            <View style={styles.view3}></View>
		</SafeAreaView>
	);
};

export default MarginPaddingConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	view1: {
		height: 200,
		width: 200,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 50,
	},
	view2: {
		height: 150,
		width: 150,
		backgroundColor: 'aqua',
        // marginTop: 50,
        // marginLeft: 100,
        // marginVertical: 40,
        margin: 30,
        paddingTop:30,
        // paddingLeft: 60,
        padding: 40
	},
    childView: {
        height: 50,
		width: 50,
		backgroundColor: 'purple',
    },
    view3: {
        height: 150,
		width: 150,
		backgroundColor: 'green',
    }
});
