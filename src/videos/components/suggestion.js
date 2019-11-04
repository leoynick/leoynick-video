import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

export default function Suggestion (props) {
  const { title, original_title, release_date, vote_average, poster_path, genres, genre_ids } = props
  const year = new Date(release_date).getFullYear()
  const genre = genres.find(({ id }) => id === genre_ids[0])
  const genreName = genre ? genre.name : ''
  const titleName = title || original_title

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={{ uri: `https://image.tmdb.org/t/p/w200/${poster_path}` }} />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{genreName}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{titleName}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>{vote_average} ⭐️</Text>
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
    paddingVertical: 5,
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
