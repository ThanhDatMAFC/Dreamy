import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import MainBottomTabs from './mainBottomTab';
import AuthStack from './authStack';
import OutsideStack from './outsideStack';
import Info from '../views/Info';
const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Auth' screenOptions={{headerShown: false}}>
       <Stack.Screen name='Auth' component={AuthStack}/>
       <Stack.Screen name="Main" component={MainBottomTabs}/>
       <Stack.Screen name="Outside" component={OutsideStack}/>

       <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Info" component={Info} options={{headerShown:false}}/>
        </Stack.Group>
       </Stack.Navigator>
    </NavigationContainer>
  )
}