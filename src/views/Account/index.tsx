import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Account() {
  const navigation = useNavigation()

  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>Account</Text>
      <Button title='Open Login' onPress={() =>
      navigation.navigate('Login')}/>
    </View>
  )
}

const styles = StyleSheet.create({})