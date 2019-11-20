import React from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

export default function Progressbar ({ timeLeft }) {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.time}>{timeLeft}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 5,
    paddingHorizontal: 10
  },
  time: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
})
