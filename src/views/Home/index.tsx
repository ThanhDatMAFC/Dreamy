import { View, Text, FlatList, TextInput } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{flexGrow: 1}}>
      <FlatList 
      data={Array(10)}
      keyExtractor={(item, i) => i.toString()}
      renderItem={({item}) => <View style={{height: 50, marginVertical: 50, borderColor: 'red', borderWidth: 1}}><TextInput style={{width: '100%'}} value='1' textContentType='emailAddress'/></View>}/>
    </View>
  )
}