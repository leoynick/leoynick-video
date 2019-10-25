import React from 'react'
import { FlatList } from 'react-native'

import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'

const renderEmpty = () => <Empty text='No hay ningun elemento' />
const itemSeparator = () => <Separator />
const renderSuggestion = ({ item }) => <Suggestion {...item} />

export const SuggestionList = () => {
  const list = [
    {
      title: 'Yannick',
      key: 1
    },
    {
      title: 'Laura',
      key: 2
    }
  ]
  return (
    <Layout title='Sugerencias para ti'>
      <FlatList
        data={list}
        ListEmptyComponent={renderEmpty}
        ItemSeparatorComponent={itemSeparator}
        renderItem={renderSuggestion}
      />
    </Layout>
  )
}

export default SuggestionList
