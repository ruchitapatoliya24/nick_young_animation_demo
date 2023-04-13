import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PinchGesture from '../components/PinchGesture'

const PinchAnimation = () => {
  return (
    <View style={{flex: 1}}>
      <PinchGesture />
    </View>
  )
}

const styles = StyleSheet.create({})

export default PinchAnimation;
