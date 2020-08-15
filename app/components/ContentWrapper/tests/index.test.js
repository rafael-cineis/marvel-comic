/**
 *
 * Tests for ContentWrapper
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import ContentWrapper from '../index'

describe('<ContentWrapper />', () => {
  it('should render correctly', () => {
    const renderedComponent = shallow(<ContentWrapper />)
    expect(renderedComponent).toBeTruthy()
  })
})
