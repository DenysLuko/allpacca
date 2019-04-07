/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation"

import Icon from 'react-native-vector-icons/dist/Feather'

import {
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  MessagesScreen,
} from './src/screens'

import {
  styles
} from './src/styles'

import {
  combinedReducers
} from './src/reducers'

const defaultNavigationOptions = {
  headerTintColor: styles.colors.grey.veryDark
}

const HomeStack = createStackNavigator({
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  MessagesScreen
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions
})

const ProfileStack = createStackNavigator({
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  MessagesScreen
}, {
  initialRouteName: 'ProfileScreen',
  defaultNavigationOptions
})

const SearchStack = createStackNavigator({
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  MessagesScreen
}, {
  initialRouteName: 'SearchScreen',
  defaultNavigationOptions
})

const MessagesStack = createStackNavigator({
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  MessagesScreen
}, {
  initialRouteName: 'MessagesScreen',
  defaultNavigationOptions
})

const Tabs = createBottomTabNavigator({
  Home: HomeStack,
  Search: SearchStack,
  Messages: MessagesStack,
  Profile: ProfileStack
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state

      let iconName

      if (routeName === 'Home') {
        iconName = 'home'
      } else if (routeName === 'Search') {
        iconName = 'search'
      } else if (routeName === 'Messages') {
        iconName = 'message-square'
      } else if (routeName === 'Profile') {
        iconName = 'user'
      }

      let iconSize
      let iconColor

      if (focused) {
        iconSize = 20
        iconColor = styles.colors.blue.main
      } else {
        iconSize = 18
        iconColor = styles.colors.grey.main
      }

      return <Icon name={iconName} size={iconSize} color={iconColor} />
    }
  }),
  tabBarOptions: {
    activeTintColor: styles.colors.blue.main,
    inactiveTintColor: styles.colors.grey.main
  }
})

const allpaccaStore = createStore(combinedReducers, { user: { name: 'Unknown' }})

const AppWithNavigation = createAppContainer(Tabs)

export default class App extends Component {
  render() {
    return (
      <Provider store={allpaccaStore}>
        <AppWithNavigation />
      </Provider>
    )
  }
}
