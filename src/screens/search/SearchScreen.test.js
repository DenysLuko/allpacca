/**
 * @format
 */

import 'react-native'
import React from 'react'
import { SearchScreen } from './SearchScreen'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const subject = renderer.create(<SearchScreen />).toJSON()
  expect(subject).toMatchSnapshot()
})
