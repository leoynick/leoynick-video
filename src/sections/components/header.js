import React from 'react'
import { View, Image, StyleSheet, SafeAreaView } from 'react-native'

function Header () {
  return (
    <View>
      <SafeAreaView>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 26,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
})

export default Header
