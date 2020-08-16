/*
 *
 * ComicsListPage actions
 *
 */

import {
  FETCH_COMICS_LIST,
  FETCH_COMICS_LIST_SUCCESS,
  FETCH_COMICS_LIST_FAILURE,
  FETCH_CHARACTERS_FOR_SEARCH,
  FETCH_CHARACTERS_FOR_SEARCH_FINISHED,
} from './constants'

export function fetchComicsList(searchCriteria) {
  return {
    type: FETCH_COMICS_LIST,
    searchCriteria,
  }
}

export function fetchComicsListSuccess(response) {
  return {
    type: FETCH_COMICS_LIST_SUCCESS,
    response,
  }
}

export function fetchComicsListFailure(error) {
  return {
    type: FETCH_COMICS_LIST_FAILURE,
    error,
  }
}

export function fetchCharactersForSearch(criteria) {
  return {
    type: FETCH_CHARACTERS_FOR_SEARCH,
    criteria,
  }
}

export function fetchCharactersForSearchFinished(results) {
  return {
    type: FETCH_CHARACTERS_FOR_SEARCH_FINISHED,
    results,
  }
}
