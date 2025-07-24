import { createStackNavigator } from '@react-navigation/stack';
import TomatoScreen from '../pages/TomatoScreen';
import GoldScreen from '../pages/GoldScreen';
import PurpleScreen from '../pages/PurpleScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='TomatoScreen'
		>
			<Stack.Screen name='GoldScreen' component={GoldScreen} />
			<Stack.Screen name='TomatoScreen' component={TomatoScreen} />
			<Stack.Screen
				options={{
					headerShown: true,
					title: 'Purple',
				}}
				name='PurpleScreen'
				component={PurpleScreen}
			/>
		</Stack.Navigator>
	);
}

export default MainStackNavigator;
