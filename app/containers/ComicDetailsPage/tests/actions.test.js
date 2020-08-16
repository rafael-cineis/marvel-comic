import {
  fetchComicDetails,
  fetchComicDetailsSuccess,
  fetchComicDetailsFailure,
} from '../actions'
import {
  FETCH_COMIC_DETAILS,
  FETCH_COMIC_DETAILS_SUCCESS,
  FETCH_COMIC_DETAILS_FAILURE,
} from '../constants'

describe('ComicDetailsPage actions', () => {
  it('should return an action with type FETCH_COMIC_DETAILS', () => {
    const expected = {
      type: FETCH_COMIC_DETAILS,
      id: 1,
    }
    expect(fetchComicDetails(1)).toEqual(expected)
  })

  it('should return an action with type FETCH_COMIC_DETAILS_SUCCESS', () => {
    const expected = {
      type: FETCH_COMIC_DETAILS_SUCCESS,
      response: 'response',
    }
    expect(fetchComicDetailsSuccess('response')).toEqual(expected)
  })

  it('should return an action with type FETCH_COMIC_DETAILS_FAILURE', () => {
    const expected = {
      type: FETCH_COMIC_DETAILS_FAILURE,
      error: 'error',
    }
    expect(fetchComicDetailsFailure('error')).toEqual(expected)
  })
})
