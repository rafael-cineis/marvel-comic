import {
  selectComicDetailsPageDomain,
  makeSelectComicDetailsResult,
  makeSelectComicDetailsIsLoading,
} from '../selectors'
import { initialState } from '../reducer'

describe('ComicDetailsPage selectors', () => {
  const comicDetailsPage = {
    comicDetails: {
      result: {
        title: 'Comic Title',
      },
      isLoading: true,
      error: null,
    },
  }
  const mockedState = { comicDetailsPage }

  it('should return reducer initialState if no state was provided', () => {
    expect(selectComicDetailsPageDomain({})).toEqual(initialState)
  })

  it('should select comic details result state', () => {
    expect(makeSelectComicDetailsResult(mockedState)).toEqual({ title: 'Comic Title' })
  })

  it('should select comic details isLoading state', () => {
    expect(makeSelectComicDetailsIsLoading(mockedState)).toEqual(true)
  })
})
