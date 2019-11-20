import React, { useState, useRef } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import Video from 'react-native-video'

import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progress-bar'
import TimeLeft from '../components/time-left'
import FullScrean from '../components/full-screan'

const uri = 'https://noesishosting.com/drive/videos/minecraft-indi.mp4'

const secondsToTime = (milliseconds) => {
  const divisorForMinutes = milliseconds % (60 * 60)
  const minutes = Math.floor(divisorForMinutes / 60)
  const divisorForSeconds = divisorForMinutes % 60
  const seconds = Math.ceil(divisorForSeconds)
  return minutes + ':' + seconds
}

export default function () {
  const [loading, setLoading] = useState(true)
  const [paused, setPaused] = useState(false)
  const [videoData, setVideoData] = useState({ currentTime: 0, timeLeft: 0 })
  const element = useRef(null)

  const onBuffer = ({ isBuffering }) => setLoading(isBuffering)
  const playPause = () => {
    setPaused(!paused)
  }
  const onProgress = ({ currentTime, playableDuration }) => setVideoData({ currentTime: currentTime / playableDuration, timeLeft: playableDuration - currentTime })

  return (
    <Layout
      video={
        <Video
          ref={element}
          source={{ uri: uri }}
          style={styles.video}
          onBuffer={onBuffer}
          paused={paused}
          onProgress={onProgress}
        />
      }
      loading={loading}
      loader={<ActivityIndicator />}
      controls={
        <ControlLayout>
          <PlayPause paused={paused} onPress={playPause} />
          <ProgressBar progress={videoData.currentTime} />
          <TimeLeft timeLeft={secondsToTime(videoData.timeLeft)} />
          <FullScrean onPress={() => element.current.presentFullscreenPlayer()} />
        </ControlLayout>
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
