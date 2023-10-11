import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Posts from '../screens/Posts';
import Usuarios from '../screens/Usuarios';

export default function Router() {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="TelaA">
                <Tab.Screen name="Usuarios" component={Usuarios} />
                <Tab.Screen name="Posts" component={Posts} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}