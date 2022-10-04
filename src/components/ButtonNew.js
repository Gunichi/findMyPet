import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { Entypo } from '@expo/vector-icons'

const ButtonNew = ({size, color, focused}) => {
  return (
    <LinearGradient style={styles.container} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={['#AF6CF1', '#5A189A']}>
      <Entypo name="plus" color='#FFF' size={size} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  }
})

export default ButtonNew