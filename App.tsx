import { StyleSheet } from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer>
			<MainStackNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
