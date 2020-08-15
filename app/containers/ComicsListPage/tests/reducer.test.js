// import produce from 'immer'
import comicsListPageReducer, { initialState } from '../reducer'
import * as actions from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('comicsListPageReducer', () => {
  let state
  beforeEach(() => {
    state = {
      comicsList: {
        result: [],
        error: null,
        isLoading: false,
      },
    }
  })

  it('should returns the initial state', () => {
    expect(comicsListPageReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle the fetchComicsList action correctly', () => {
    const expectedResult = {
      comicsList: {
        ...state.comicsList,
        isLoading: true,
      },
    }
    expect(comicsListPageReducer(state, actions.fetchComicsList())).toEqual(expectedResult)
  })

  it('should handle the fetchComicsListSuccess action correctly', () => {
    const expectedResult = {
      comicsList: {
        result: [1, 2],
        isLoading: false,
        error: null,
      },
    }
    expect(comicsListPageReducer(state, actions.fetchComicsListSuccess({
      data: {
        results: [1, 2],
      },
    }))).toEqual(expectedResult)
  })

  it('should handle the fetchComicsListFailure action correctly', () => {
    const expectedResult = {
      comicsList: {
        ...state.comicsList,
        isLoading: false,
        error: 'error',
      },
    }
    expect(comicsListPageReducer(state, actions.fetchComicsListFailure('error'))).toEqual(expectedResult)
  })
})
