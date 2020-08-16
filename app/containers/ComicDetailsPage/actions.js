/*
 *
 * ComicDetailsPage actions
 *
 */

import {
  FETCH_COMIC_DETAILS,
  FETCH_COMIC_DETAILS_SUCCESS,
  FETCH_COMIC_DETAILS_FAILURE,
} from './constants'

export function fetchComicDetails(id) {
  return {
    type: FETCH_COMIC_DETAILS,
    id,
  }
}

export function fetchComicDetailsSuccess(response) {
  return {
    type: FETCH_COMIC_DETAILS_SUCCESS,
    response,
  }
}
export function fetchComicDetailsFailure(error) {
  return {
    type: FETCH_COMIC_DETAILS_FAILURE,
    error,
  }
}
