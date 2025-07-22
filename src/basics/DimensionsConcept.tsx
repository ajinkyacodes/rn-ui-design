import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DimensionsConcept = () => {

    // 1. Percentage

    // 2. Dimension
    console.log(Dimensions.get('screen'));
    const PHONE_HEIGHT = Dimensions.get('screen').height;
    const PHONE_WIDTH = Dimensions.get('screen').width;

    // 3. Libraries for responsive

    return (
		<View style={styles.container}>
            {/* Percentage */}
			{/* <View
				style={{
					width: "50%",
					height: "100%",
					backgroundColor: 'tomato',
				}}
			/> */}

            {/* Dimensions */}
            <View
				style={{
					width: PHONE_WIDTH / 2,
					height: PHONE_HEIGHT / 2 ,
					backgroundColor: 'tomato',
				}}
			/>            
		</View>
	);
};

export default DimensionsConcept;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});
