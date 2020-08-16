/**
 *
 * Tests for Header
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import Header from '../index'

describe('<Header />', () => {
  it('should render the component correctly with an img', () => {
    const renderedComponent = shallow(<Header />)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('img').length).toEqual(1)
  })
})
