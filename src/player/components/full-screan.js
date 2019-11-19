import React from 'react'
import {
  TouchableHighlight,
  // TouchableOpacity,
  // TouchableWithoutFeedback,
  StyleSheet,
  Text
} from 'react-native'

export default function Progressbar ({ onPress }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor='white'
    >
      <Text>⿴</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 25,
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 5,
    paddingHorizontal: 10
  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
})
