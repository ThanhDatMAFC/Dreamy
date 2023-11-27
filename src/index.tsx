import 'react-native-gesture-handler';
import React from 'react'
import Router from './router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Src = () => {
  return (
    <SafeAreaProvider>
      <Router/>
    </SafeAreaProvider>
  )
}

export default Src
