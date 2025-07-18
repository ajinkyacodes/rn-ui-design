import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	StatusBar,
} from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const GetStartedScreen = () => {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-content' />
			<ImageBackground
				source={require('../assets/clothing.jpg')}
				style={styles.backgroundImage}
			>
				<View style={styles.overlay} />
				<View style={styles.contentArea}>
					<Text
						style={{
							fontSize: s(44),
							fontWeight: 'semibold',
							color: '#fff',
							textAlign: 'center',
							marginBottom: vs(14),
						}}
					>
						You want Authentic, here you go!
					</Text>
					<Text
						style={{ fontSize: s(14), color: '#fff', marginBottom: vs(44) }}
					>
						Find it here, buy it now!
					</Text>
					<TouchableOpacity style={styles.button}>
						<Text
							style={{ fontSize: s(23), fontWeight: 'semibold', color: '#fff' }}
						>
							Get Started
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};

export default GetStartedScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0,0,0,0.40)',
	},
	contentArea: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: vs(0),
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: s(280),
		paddingVertical: vs(13),
		backgroundColor: '#F83758',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: s(4),
		marginBottom: vs(50),
	},
});
