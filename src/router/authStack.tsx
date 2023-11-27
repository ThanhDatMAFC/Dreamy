import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name='Login' component={Login} options={{headerTitleStyle:{color: 'green'}}}/>
    <Stack.Screen name="Register" component={Register} options={{headerLargeTitle: true, headerLargeTitleShadowVisible: true}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})