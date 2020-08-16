import * as actions from '../actions'
import {
  FETCH_COMICS_LIST,
  FETCH_COMICS_LIST_SUCCESS,
  FETCH_COMICS_LIST_FAILURE,
  FETCH_CHARACTERS_FOR_SEARCH,
  FETCH_CHARACTERS_FOR_SEARCH_FINISHED,
} from '../constants'

describe('ComicsListPage actions', () => {
  it('should return an action of type FETCH_COMICS_LIST', () => {
    const expected = {
      type: FETCH_COMICS_LIST,
    }
    expect(actions.fetchComicsList()).toEqual(expected)
  })

  it('should return an action of type FETCH_COMICS_LIST_SUCCESS', () => {
    const expected = {
      type: FETCH_COMICS_LIST_SUCCESS,
      response: 'response',
    }
    expect(actions.fetchComicsListSuccess('response')).toEqual(expected)
  })

  it('should return an action of type FETCH_COMICS_LIST_FAILURE', () => {
    const expected = {
      type: FETCH_COMICS_LIST_FAILURE,
      error: 'error',
    }
    expect(actions.fetchComicsListFailure('error')).toEqual(expected)
  })

  it('should return an action of type FETCH_CHARACTERS_FOR_SEARCH', () => {
    const expected = {
      type: FETCH_CHARACTERS_FOR_SEARCH,
      criteria: 'name',
    }
    expect(actions.fetchCharactersForSearch('name')).toEqual(expected)
  })

  it('should return an action of type FETCH_CHARACTERS_FOR_SEARCH_FINISHED', () => {
    const expected = {
      type: FETCH_CHARACTERS_FOR_SEARCH_FINISHED,
      results: ['name'],
    }
    expect(actions.fetchCharactersForSearchFinished(['name'])).toEqual(expected)
  })
})
