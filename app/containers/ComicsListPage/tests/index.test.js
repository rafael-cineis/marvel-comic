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
    options: {
      count: 0,
      total: 0,
      offset: 0,
    },
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

  it('should render a loader with mini prop if isLoading is true and comicsList has content', () => {
    const localProps = {
      ...props,
      comicsList: [{ title: 'Title 1' }],
      isLoading: true,
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent.find('Loader').length).toEqual(1)
    expect(renderedComponent.find('Loader').at(0).props().mini).toEqual(true)
    expect(renderedComponent.find('Button').length).toEqual(0)
  })
})
