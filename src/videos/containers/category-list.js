import React from 'react'
import { FlatList } from 'react-native'

import Category from '../components/category'
import Empty from '../components/empty'
import Layout from '../components/category-list-layout'
import Separator from '../../sections/components/horizontal-separator'

const renderEmpty = () => <Empty text='No hay ningun elemento' />
const itemSeparator = () => <Separator />
const keyExtractor = item => item.id.toString()

export const CategoryList = ({ genres }) => {
  const renderCategory = ({ item }) => <Category {...item} />
  return (
    <Layout title='Categorías'>
      <FlatList
        horizontal
        data={genres}
        ItemSeparatorComponent={itemSeparator}
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderEmpty}
        renderItem={renderCategory}
      />
    </Layout>
  )
}

export default CategoryList
