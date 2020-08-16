/**
 *
 * Tests for Button
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import Button from '../index'

describe('<Button />', () => {
  const props = {
    id: 'button',
    onClick: jest.fn(),
  }

  const shallowRender = (localProps = props) => shallow(<Button {...localProps}>Children</Button>)

  it('should render the component', () => {
    expect(shallowRender()).toBeTruthy()
  })
})
