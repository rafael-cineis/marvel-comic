/**
 *
 * Tests for ComicDetailsPage
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import { MarvelLink } from '../styles'
import { ComicDetails } from '../ComicDetails'

describe('<ComicDetails />', () => {
  const props = {
    intl: {
      formatDate: () => {},
    },
    comic: {
      title: 'Title',
      description: 'Description',
      thumbnail: {
        path: 'path',
        extension: 'jpg',
      },
      creators: {
        items: [{
          name: 'Creator 1',
        }, {
          name: 'Creator 2',
        }],
      },
      dates: [{
        type: 'onsaleDate',
        date: '2017-01-29T00:00:00-0500',
      }],
      characters: {
        items: [{
          name: 'Character 1',
        }],
      },
      urls: [{
        type: 'details',
        url: 'https://marvel.com/details-path',
      }],
    },
  }

  const shallowRender = (localProps = props) => shallow(<ComicDetails {...localProps} />)

  it('should render comic details correctly if comic is not empty', () => {
    const renderedComponent = shallowRender()
    expect(renderedComponent.text().includes('Title')).toBe(true)
    expect(renderedComponent.text().includes('Creator 1, Creator 2')).toBe(true)
    expect(renderedComponent.find('TextWithLabel').length).toEqual(2) // For characters and published date
    // First TextWithLabel refers to publishedDate
    expect(renderedComponent.find('TextWithLabel').at(0).props().text).not.toEqual('')
    expect(renderedComponent.find(MarvelLink).at(0).props().href).toEqual('https://marvel.com/details-path')
  })

  it('should return null if comic prop is empty', () => {
    const renderedComponent = shallowRender({ ...props, comic: {} })
    expect(renderedComponent.type()).toBeFalsy()
  })

  it('should render the marvel link with the first url if no url of type details was found', () => {
    const localProps = {
      ...props,
      comic: {
        ...props.comic,
        urls: [{
          type: 'otherOne',
          url: 'another-url',
        }],
      },
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent.find(MarvelLink).at(0).props().href).toEqual('another-url')
  })

  it('should render the marvel link with the default marvel url if none is available in the comic details', () => {
    const localProps = {
      ...props,
      comic: {
        ...props.comic,
        urls: [],
      },
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent.find(MarvelLink).at(0).props().href).toEqual('http://marvel.com')
  })

  it('should render the component correctly with missing information', () => {
    const localProps = {
      ...props,
      comic: {
        ...props.comic,
        description: '',
        dates: [{
          type: 'anotherType',
          date: '2017-01-29T00:00:00-0500',
        }],
      },
    }
    const renderedComponent = shallowRender(localProps)
    expect(renderedComponent).toBeTruthy()
    // One for MarvelLink and another for missing description
    expect(renderedComponent.find('FormattedMessage').length).toEqual(2)
    // First TextWithLabel refers to publishedDate
    expect(renderedComponent.find('TextWithLabel').at(0).props().text).toEqual('')
  })
})
