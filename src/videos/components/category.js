import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function (props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.genre}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'grey',
    opacity: 0.8,
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 10

  }
})
