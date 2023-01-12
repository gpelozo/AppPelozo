import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardText from './Card.text'
import { Style } from './Card.styles'

const Card = () => {
  return (
    <View>
      <Text style={styles.container}>{CardText.profile}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})