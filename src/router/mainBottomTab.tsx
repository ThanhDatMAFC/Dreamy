import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../views/Home';
import Account from '../views/Account';

const Tab = createBottomTabNavigator();

export default function MainBottomTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}