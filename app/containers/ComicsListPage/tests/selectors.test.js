import {
  selectComicsListPageDomain,
  makeSelectComicsListResult,
  makeSelectComicsListIsLoading,
  makeSelectComicDetailsFromList,
} from '../selectors'
import { initialState } from '../reducer'

describe('ComicsListPage selectors', () => {
  const comicsListPage = {
    comicsList: {
      result: [{
        id: 1,
        title: 'Comic Title 1',
      }, {
        id: 2,
        title: 'Comic Title 2',
      }],
      isLoading: true,
      error: null,
    },
  }
  const mockedState = { comicsListPage }

  it('should return reducer initialState if no state was provided', () => {
    expect(selectComicsListPageDomain({})).toEqual(initialState)
  })

  it('should select comics list result state', () => {
    expect(makeSelectComicsListResult(mockedState)).toEqual([{
      id: 1,
      title: 'Comic Title 1',
    }, {
      id: 2,
      title: 'Comic Title 2',
    }])
  })

  it('should select comics list isLoading state', () => {
    expect(makeSelectComicsListIsLoading(mockedState)).toEqual(true)
  })

  it('should select the comic details from the list with the provided id', () => {
    expect(makeSelectComicDetailsFromList(1)(mockedState)).toEqual({
      id: 1,
      title: 'Comic Title 1',
    })
  })

  it('should return an empty object if there is no comic with the provided id', () => {
    expect(makeSelectComicDetailsFromList(3)(mockedState)).toEqual({})
  })
})
