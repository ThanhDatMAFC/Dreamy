import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Info from '../views/Info';
import Settings from '../views/Settings';

const Stack = createStackNavigator();

export default function OutsideStack() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator initialRouteName='Setting'>
       
        <Stack.Group>
            <Stack.Screen name="Setting" component={Settings}/>
        </Stack.Group>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})