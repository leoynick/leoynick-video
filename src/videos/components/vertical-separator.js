import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function VerticalSeparator (props) {
  return (
    <View style={[styles.container, {
      borderTopColor: (props.color) ? props.color : 'grey'
    }]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1
  }
})
