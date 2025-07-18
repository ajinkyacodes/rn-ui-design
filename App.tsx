import { StyleSheet } from 'react-native';
import ShoppingPageScreen from './src/screens/ShoppingPageScreen';

export default function App() {
	return <ShoppingPageScreen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
