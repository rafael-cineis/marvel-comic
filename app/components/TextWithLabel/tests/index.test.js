/**
 *
 * Tests for TextWithLabel
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import TextWithLabel from '../index'

describe('<TextWithLabel />', () => {
  const props = {
    label: {
      id: 'id',
      defaultMessage: 'defaultMessage',
    },
    text: 'Information to display',
  }

  const shallowRender = (localProps = props) => shallow(<TextWithLabel {...localProps} />)

  it('should render the component with text', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('FormattedMessage').length).toEqual(1)
    expect(renderedComponent.text().includes('Information to display')).toBe(true)
  })

  it('should render the two FormattedMessage when there is no text available to display', () => {
    const renderedComponent = shallowRender({
      ...props,
      text: undefined,
    })
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('FormattedMessage').length).toEqual(2)
  })
})
