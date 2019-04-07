import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import {
  styles
} from '../../styles'

export class MessagesScreen extends Component {
  static navigationOptions = {
    title: 'Messages',
  }

  render() {
    return (
      <View style={styles.containerComponent}>
        <Text style={styles.welcomeComponent}>Messages</Text>
      </View>
    )
  }
}
