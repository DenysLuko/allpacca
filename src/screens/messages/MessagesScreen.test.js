/**
 * @format
 */

import 'react-native'
import React from 'react'
import { MessagesScreen } from './MessagesScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const subject = renderer.create(<MessagesScreen />).toJSON()
  expect(subject).toMatchSnapshot()
})
