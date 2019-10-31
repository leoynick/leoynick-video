/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react'

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import Api from './src/utils/api'

export default () => {
  const [list, setList] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    Api.getSuggestion(475557)
      .then(movies =>
        setList(movies)
      )
    Api.getGenres()
      .then(genres => setGenres(genres))
  }, [])

  return (
    <>
      <Home>
        <Header />
        <SuggestionList
          list={list}
          genres={genres}
        />
      </Home>
    </>
  )
}
