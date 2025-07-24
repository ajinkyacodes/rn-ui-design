import { StyleSheet } from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/BottomTabs';

export default function App() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
