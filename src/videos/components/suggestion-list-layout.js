import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

function SuggestionListLayout (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  }
})

export default SuggestionListLayout
