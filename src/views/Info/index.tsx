import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StackActions, useNavigation } from '@react-navigation/native';

export default function Info() {
  const navigation = useNavigation()

  return (
      <View style={{flex: 1}}>
      <Button title='Go Back' onPress={() => navigation.goBack()}/>


        <FlatList 
        data={Array(10)}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => <View style={{height: 50, marginVertical: 50, borderColor: 'red', borderWidth: 1}}><TextInput style={{width: '100%'}} value='1' textContentType='emailAddress'/></View>}/>
      </View>
  )
}

const styles = StyleSheet.create({})