/**
 * @format
 */

import 'react-native'
import React from 'react'
import { Button } from './Button'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders homeButton correctly', () => {
  const subject = renderer.create(<Button type={'homeButton'} title={'Button Title'}/>).toJSON()
  expect(subject).toMatchSnapshot()
})
