import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function MyButton() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Button title='Click' onPress={() => {} }/>
    </View>
  )
}

const styles = StyleSheet.create({})