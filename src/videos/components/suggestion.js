import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

export default function Suggestion (props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={require('../../../assets/logo.png')} />
        <View style={styles.genre}>
          <Text style={styles.genreText}>Acción</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>Avengers</Text>
        <Text style={styles.year}>2007</Text>
        <Text style={styles.rating}>5 estrellas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black'
  },
  genreText: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  left: {},
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    alignSelf: 'flex-start',
    backgroundColor: '#70b124',
    borderRadius: 5,
    color: 'white',
    fontSize: 11,
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 4
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold'
  }
})
