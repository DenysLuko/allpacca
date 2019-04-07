import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { getUserAction } from '../../actions'
import { Button } from '../../components/Button'

import {
  styles
} from '../../styles'

const homeScreenStyles = StyleSheet.create({
  containerComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    height: 250,
    top: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heading: styles.text.headingText
})

export class _HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    const {
      user: {
        name
      }
    } = this.props
    console.log(this.props)

    const greeting = name ? `Hello ${name}!` : 'Hello there!'

    return (
      <View style={homeScreenStyles.containerComponent}>
        <Text style={homeScreenStyles.heading}>{greeting}</Text>
        <View style={homeScreenStyles.buttonsContainer}>
          <Button
            type={'homeButton'}
            title="Search"
            onPress={() => this.props.navigation.navigate('SearchScreen')}
          />
          <Button
            type={'homeButton'}
            title="New Journey"
            onPress={() => this.props.navigation.navigate('ProfileScreen')}
          />
          <Button
            type={'homeButton'}
            title="New Delivery"
            onPress={() => this.props.navigation.navigate('MessagesScreen')}
          />
          <Button
            type={'homeButton'}
            title="Get User"
            onPress={() => this.props.getUser()}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUserAction())
})

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(_HomeScreen)
