import React, { Component } from 'react'
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { styles } from '../styles'

const buttonStyles = StyleSheet.create({
  homeButton: {
    height: 70,
    width: '70%',
    maxWidth: 300,
    borderColor: styles.colors.blue.light,
    borderWidth: 1,
    borderRadius: 50
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContent: {
    ...styles.text.headingText,
    color: styles.colors.grey.dark
  }
})

export const Button = ({
  title,
  onPress,
  type
}) => (
  <TouchableHighlight
    onPress={onPress}
    style={buttonStyles[type]}
    underlayColor={styles.colors.blue.lightest}
  >
    <View style={buttonStyles.textContainer}>
      <Text style={buttonStyles.textContent}>{ title }</Text>
    </View>
  </TouchableHighlight>
)
