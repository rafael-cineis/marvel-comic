/**
 *
 * Tests for ComicsListPage
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import { ComicsListPage } from '../index'

describe('<ComicsListPage />', () => {
  const props = {
    comicsList: [],
    isLoading: false,
    fetchComicsList: () => {},
  }

  const shallowRender = (localProps = props) => shallow(<ComicsListPage {...localProps} />)

  it('should render the component correctly', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent).toBeTruthy()
  })

  it('should render Loader if isLoading is true', () => {
    const localProps = {
      ...props,
      isLoading: true,
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('Loader').length).toEqual(1)
  })

  it('should render ComicCard based on comicsList', () => {
    const localProps = {
      ...props,
      comicsList: [
        { title: 'Title 1', thumbnail: {} },
        { title: 'Title 2', thumbnail: {} },
      ],
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    expect(renderedComponent.find('ComicCard').length).toEqual(2)
  })
})
