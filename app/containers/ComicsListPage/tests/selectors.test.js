import {
  selectComicsListPageDomain,
  makeSelectComicsListResult,
  makeSelectComicsListIsLoading,
} from '../selectors'
import { initialState } from '../reducer'

describe('ComicsListPage selectors', () => {
  const comicsListPage = {
    comicsList: {
      result: [1, 2],
      isLoading: true,
      error: null,
    },
  }
  const mockedState = { comicsListPage }

  it('should return reducer initialState if no state was provided', () => {
    expect(selectComicsListPageDomain({})).toEqual(initialState)
  })

  it('should select comics list result state', () => {
    expect(makeSelectComicsListResult(mockedState)).toEqual([1, 2])
  })

  it('should select comics list isLoading state', () => {
    expect(makeSelectComicsListIsLoading(mockedState)).toEqual(true)
  })
})
