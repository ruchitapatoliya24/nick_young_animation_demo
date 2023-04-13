import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DragGesture from '../components/DragGesture'

const DragAnimation = ({ route }: any) => {
    const {isChangePosition} = route?.params;
  return (
    <View style={{flex: 1}}>
      <DragGesture isChangePosition={isChangePosition} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default DragAnimation;
