/**
 *
 * Tests for Loader
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import Loader from '../index'

describe('<Loader />', () => {
  it('should render the component correctly', () => {
    expect(shallow(<Loader />)).toBeTruthy()
  })
})
