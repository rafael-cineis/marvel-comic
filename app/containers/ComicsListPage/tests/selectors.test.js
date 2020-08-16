import {
  selectComicsListPageDomain,
  makeSelectComicsListResult,
  makeSelectComicsListIsLoading,
  makeSelectComicDetailsFromList,
  makeSelectComicsListPaginationOptions,
  makeSelectCharactersListCriteria,
  makeSelectCharactersListResults,
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
      paginationOptions: {
        total: 100,
        offset: 0,
        count: 10,
      },
    },
    charactersList: {
      criteria: 'criteria',
      results: ['name'],
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

  it('should select the paginationOptions from the comicsList', () => {
    expect(makeSelectComicsListPaginationOptions(mockedState)).toEqual({
      total: 100,
      offset: 0,
      count: 10,
    })
  })

  it('should select the criteria from the charactersList', () => {
    expect(makeSelectCharactersListCriteria(mockedState)).toEqual('criteria')
  })

  it('should select the results from the charactersList', () => {
    expect(makeSelectCharactersListResults(mockedState)).toEqual(['name'])
  })
})
