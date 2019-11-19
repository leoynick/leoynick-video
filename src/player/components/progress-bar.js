import React from 'react'
import {
  StyleSheet,
  ProgressViewIOS,
  View
} from 'react-native'

export default function Progressbar ({ progress }) {
  return (
    <View style={styles.container}>
      <ProgressViewIOS progress={progress} progressTintColor='green' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    marginRight: 10,
    marginVertical: 15,
    flex: 1
  }
})
