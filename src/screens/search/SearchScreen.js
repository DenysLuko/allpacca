import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import {
  styles
} from '../../styles'

export class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  render() {
    return (
      <View style={styles.containerComponent}>
        <Text style={styles.headingComponent}>Search</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('HomeScreen')}
        />
        <Button
          title="Go to Home 2"
          onPress={() => this.props.navigation.push('HomeScreen')}
        />
      </View>
    )
  }
}
