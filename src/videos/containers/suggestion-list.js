import React from 'react'
import { FlatList } from 'react-native'

import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'

const renderEmpty = () => <Empty text='No hay ningun elemento' />
const itemSeparator = () => <Separator />
const keyExtractor = item => item.id.toString()

export const SuggestionList = ({ list, genres }) => {
  const renderSuggestion = ({ item }) => <Suggestion {...item} genres={genres} />
  return (
    <Layout title='Sugerencias para ti'>
      <FlatList
        data={list}
        genres={genres}
        ItemSeparatorComponent={itemSeparator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={renderSuggestion}
      />
    </Layout>
  )
}

export default SuggestionList
