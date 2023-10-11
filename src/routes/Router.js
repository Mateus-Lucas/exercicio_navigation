import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Posts from '../screens/Posts';
import Usuarios from '../screens/Usuarios';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Router() {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Usarios"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name="Usuarios"
                    component={Usuarios}
                    options={{
                        tabBarLabel: 'Usuários',
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name='people-outline' color={color} size={size} />
                        }
                    }}
                />
                <Tab.Screen
                    name="Posts"
                    component={Posts}
                    options={{
                        tabBarLabel: 'Posts',
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name='newspaper-outline' color={color} size={size} />
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}