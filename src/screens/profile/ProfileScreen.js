import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import {
  styles
} from '../../styles'

export class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  }

  render() {
    return (
      <View style={styles.containerComponent}>
        <Text style={styles.welcomeComponent}>Profile</Text>
        <Button
          title="Go to Search"
          onPress={() => this.props.navigation.navigate('SearchScreen')}
        />
      </View>
    )
  }
}
