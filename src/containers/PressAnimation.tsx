import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PressGesture from '../components/PressGesture'

const PressAnimation = () => {
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <PressGesture />
    </View>
  )
}

const styles = StyleSheet.create({})

export default PressAnimation;
