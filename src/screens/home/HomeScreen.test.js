/**
 * @format
 */

import 'react-native'
import React from 'react'
import { HomeScreen } from './HomeScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const subject = renderer.create(<HomeScreen />).toJSON()
  expect(subject).toMatchSnapshot()
})
