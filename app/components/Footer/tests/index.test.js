/**
 *
 * Tests for Footer
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../index'

describe('<Footer />', () => {
  it('Expect to not log errors in console', () => {
    expect(shallow(<Footer />)).toBeTruthy()
  })
})
