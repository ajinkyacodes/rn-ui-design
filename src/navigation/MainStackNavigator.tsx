import { createStackNavigator } from '@react-navigation/stack';
import TomatoScreen from '../pages/TomatoScreen';
import GoldScreen from '../pages/GoldScreen';
import PurpleScreen from '../pages/PurpleScreen';

const Stack = createStackNavigator();

function MainStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='TomatoScreen' component={TomatoScreen} />
			<Stack.Screen name='GoldScreen' component={GoldScreen} />
			<Stack.Screen name='PurpleScreen' component={PurpleScreen} />
		</Stack.Navigator>
	);
}

export default MainStackNavigator;
