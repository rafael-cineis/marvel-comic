/**
 *
 * Tests for StyledLink
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import StyledLink from '../index'

describe('<StyledLink />', () => {
  const props = {
    to: '/path',
  }

  const shallowRender = (localProps = props) => shallow(<StyledLink {...localProps}>Children</StyledLink>)

  it('should render the component correctly', () => {
    expect(shallowRender()).toBeTruthy()
  })
})
