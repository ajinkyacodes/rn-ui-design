import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StylishLogo from '../assets/StylishLogo'

const StylishLogoScreen = () => {
  return (
    <View style={styles.container}>
      <StylishLogo />
    </View>
  )
}

export default StylishLogoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})