import React from 'react'
import { StyleSheet } from 'react-native'
import Video from 'react-native-video'

import Layout from '../components/layout'

export default function () {
  return (
    <Layout
      video={
        <Video
          source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
          style={styles.video}
        />
      }
    />
  )
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
})
