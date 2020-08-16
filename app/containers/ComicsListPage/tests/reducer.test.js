import comicsListPageReducer, { initialState } from '../reducer'
import * as actions from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('comicsListPageReducer', () => {
  let state
  beforeEach(() => {
    state = {
      ...initialState,
    }
  })

  it('should returns the initial state', () => {
    expect(comicsListPageReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle the fetchComicsList action correctly', () => {
    const expectedResult = {
      ...state,
      comicsList: {
        ...state.comicsList,
        isLoading: true,
      },
    }
    expect(comicsListPageReducer(state, actions.fetchComicsList())).toEqual(expectedResult)
  })

  it('should handle the fetchComicsListSuccess action correctly', () => {
    const expectedResult = {
      ...state,
      comicsList: {
        result: [1, 2],
        isLoading: false,
        error: null,
        paginationOptions: {
          total: 100,
          offset: 0,
          count: 10,
        },
      },
    }
    expect(comicsListPageReducer(state, actions.fetchComicsListSuccess({
      data: {
        results: [1, 2],
        total: 100,
        offset: 0,
        count: 10,
      },
    }))).toEqual(expectedResult)
  })

  it('should handle the fetchComicsListFailure action correctly', () => {
    const expectedResult = {
      ...state,
      comicsList: {
        ...state.comicsList,
        isLoading: false,
        error: 'error',
      },
    }
    expect(comicsListPageReducer(state, actions.fetchComicsListFailure('error'))).toEqual(expectedResult)
  })

  it('should handle the fetchCharactersForSearch action correctly', () => {
    const expectedResult = {
      ...state,
      charactersList: {
        ...state.charactersList,
        criteria: 'name',
      },
    }
    expect(comicsListPageReducer(state, actions.fetchCharactersForSearch('name'))).toEqual(expectedResult)
  })

  it('should handle the fetchCharactersForSearchFinished action correctly', () => {
    const expectedResult = {
      ...state,
      charactersList: {
        ...state.charactersList,
        results: ['name'],
      },
    }
    expect(comicsListPageReducer(state, actions.fetchCharactersForSearchFinished(['name']))).toEqual(expectedResult)
  })
})
