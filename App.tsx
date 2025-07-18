import { StyleSheet } from 'react-native';
import GetStartedScreen from './src/screens/GetStartedScreen';

export default function App() {
	return <GetStartedScreen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
