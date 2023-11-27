import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation()

  return (
    <View style={{flex: 1}}>
      <Text>Login</Text>
      <Button title='Go Home' onPress={() => 
      navigation.navigate('Main')}/>
 <Button title='Open Register' onPress={() => 
      navigation.navigate('Register')}/>
       <Button title='Show Information' onPress={() => 
      navigation.navigate('Info')}/>
      <Button title='Open Setting' onPress={() => navigation.navigate('Outside')}/>
    </View>
  )
}

const styles = StyleSheet.create({})