/**
 *
 * Tests for ComicDetailsPage
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import { ComicDetailsPage } from '../index'

describe('<ComicDetailsPage />', () => {
  const props = {
    match: {
      params: {
        id: 1,
      },
    },
    fetchComicDetails: () => {},
    comicDetails: {},
  }

  const shallowRender = (localProps = props) => shallow(<ComicDetailsPage {...localProps} />)

  it('should render the component correctly with the ComicDetails', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent.find('ComicDetails')).toBeTruthy()
  })

  it('should render the Loader if isLoading prop is true', () => {
    const localProps = {
      ...props,
      isLoading: true,
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent.find('Loader').length).toEqual(1)
  })
})
