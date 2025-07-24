import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TomatoScreen from '../pages/TomatoScreen';
import PurpleScreen from '../pages/PurpleScreen';
import GoldScreen from '../pages/GoldScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			screenOptions={{
                headerShown: false,
				tabBarActiveTintColor: '#2b1ccb',
				tabBarInactiveTintColor: '#A7CCF6',
				tabBarStyle: {
					backgroundColor: '#fff',
				},
				tabBarLabelStyle: {
					fontSize: 15,
					fontWeight: 'bold',
				},
			}}
		>
			<Tab.Screen
				options={{
					title: 'Tomato',
					tabBarIcon: ({ color, focused, size }) => {
						return <AntDesign name='home' size={24} color={color} />;
					},
				}}
				name='TomatoScreen'
				component={TomatoScreen}
			/>			
			<Tab.Screen
				options={{
					title: 'Gold',
					tabBarIcon: ({ color, focused, size }) => {
						return <AntDesign name='profile' size={24} color={color} />;
					},
				}}
				name='GoldScreen'
				component={GoldScreen}
			/>
            <Tab.Screen
				options={{
					title: 'Purple',
					tabBarIcon: ({ color, focused, size }) => {
						return <Feather name='settings' size={24} color={color} />;
					},
				}}
				name='PurpleScreen'
				component={PurpleScreen}
			/>
		</Tab.Navigator>
	);
}

export default MyTabs;
