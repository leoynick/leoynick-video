import React, { useState } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import Video from 'react-native-video'

import Layout from '../components/layout'

const uri = 'https://ia601907.us.archive.org/17/items/BigBuckBunny_199/big_buck_bunny_240p_2mb.mp4'

export default function () {
  const [loading, setLoading] = useState(true)
  const onBuffer = ({ isBuffering }) => setLoading(isBuffering)

  return (
    <Layout
      video={
        <Video
          source={{ uri: uri }}
          style={styles.video}
          resizeMode='contain'
          onBuffer={onBuffer}
        />
      }
      loading={loading}
      loader={
        <ActivityIndicator />
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
