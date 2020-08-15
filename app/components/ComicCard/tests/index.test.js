/**
 *
 * Tests for ComicCard
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import ComicCard from '../index'

describe('<ComicCard />', () => {
  const props = {
    thumbnail: {},
    creators: {
      items: [],
    },
  }

  const shallowRender = (localProps = props) => shallow(<ComicCard {...localProps} />)

  it('should render the component correctly', () => {
    expect(shallowRender()).toBeTruthy()
  })

  it('should render the component with creators', () => {
    const localProps = {
      ...props,
      creators: {
        items: [
          { name: 'Creator 1' },
          { name: 'Creator 2' },
        ],
      },
    }
    const renderedComponent = shallowRender(localProps)

    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.text().includes('Creator 1, Creator 2')).toBe(true)
  })
})
