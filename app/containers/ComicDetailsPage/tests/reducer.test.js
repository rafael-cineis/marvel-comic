// import produce from 'immer'
import comicDetailsPageReducer from '../reducer'
import * as actions from '../actions'

/* eslint-disable default-case, no-param-reassign */
describe('comicDetailsPageReducer', () => {
  let state
  beforeEach(() => {
    state = {
      comicDetails: {
        result: {},
        error: null,
        isLoading: false,
      },
    }
  })

  it('returns the initial state', () => {
    const expectedResult = state
    expect(comicDetailsPageReducer(undefined, {})).toEqual(expectedResult)
  })

  it('should handle the fetchComicDetails action correctly', () => {
    const expectedResult = {
      comicDetails: {
        ...state.comicDetails,
        isLoading: true,
        error: null,
      },
    }
    expect(comicDetailsPageReducer(state, actions.fetchComicDetails())).toEqual(expectedResult)
  })

  it('should handle the fetchComicDetailsSuccess action correctly', () => {
    const expectedResult = {
      comicDetails: {
        result: { id: 1, title: 'Comic Title' },
        isLoading: false,
        error: null,
      },
    }
    expect(comicDetailsPageReducer(state, actions.fetchComicDetailsSuccess({
      id: 1,
      title: 'Comic Title',
    }))).toEqual(expectedResult)
  })

  it('should handle the fetchComicDetailsFailure action correctly', () => {
    const expectedResult = {
      comicDetails: {
        ...state.comicDetails,
        isLoading: false,
        error: 'error',
      },
    }
    expect(comicDetailsPageReducer(state, actions.fetchComicDetailsFailure('error'))).toEqual(expectedResult)
  })
})
