/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react'

import Api from './src/utils/api'

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'

export default () => {
  const [suggestion, setSuggestion] = useState([])
  const [listMovies, setListMovies] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    Api.getGenres()
      .then(genres => setGenres(genres))
    Api.getSuggestion(475557)
      .then(suggestion => {
        setSuggestion(suggestion.slice(0, 5))
      })
    Api.getListMovies()
      .then(movies => {
        setListMovies(movies)
      })
  }, [])

  return (
    <>
      <Home>
        <Header />
        <Player />
        <CategoryList
          list={listMovies}
          genres={genres}
        />
        <SuggestionList
          list={suggestion}
          genres={genres}
        />
      </Home>
    </>
  )
}
