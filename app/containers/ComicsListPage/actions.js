/*
 *
 * ComicsListPage actions
 *
 */

import {
  FETCH_COMICS_LIST,
  FETCH_COMICS_LIST_SUCCESS,
  FETCH_COMICS_LIST_FAILURE,
} from './constants'

export function fetchComicsList() {
  return {
    type: FETCH_COMICS_LIST,
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
