/**
 * @format
 */

import 'react-native'
import React from 'react'
import { ProfileScreen } from './ProfileScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const subject = renderer.create(<ProfileScreen />).toJSON()
  expect(subject).toMatchSnapshot()
})
