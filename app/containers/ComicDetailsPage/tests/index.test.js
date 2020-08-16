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

  it('should render the component correctly', () => {
    expect(shallowRender()).toBeTruthy()
  })
})
