import React from 'react'
import {
  TouchableHighlight,
  // TouchableOpacity,
  // TouchableWithoutFeedback,
  StyleSheet,
  Text
} from 'react-native'

export default function PlayPause ({ paused, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      hitSlop={hitSlop}
      underlayColor='transparent'
    >
      {
        paused
          ? <Text>▶️</Text>
          : <Text>⏸</Text>
      }
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 5,
    paddingHorizontal: 10
  }
})

const hitSlop = {
  bottom: 5,
  left: 5,
  right: 5,
  top: 5
}
