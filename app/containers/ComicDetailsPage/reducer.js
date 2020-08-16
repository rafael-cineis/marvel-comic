/*
 *
 * ComicDetailsPage reducer
 *
 */
import produce from 'immer'
import {
  FETCH_COMIC_DETAILS,
  FETCH_COMIC_DETAILS_SUCCESS,
  FETCH_COMIC_DETAILS_FAILURE,
} from './constants'

export const initialState = {
  comicDetails: {
    result: {},
    isLoading: false,
    error: null,
  },
}

/* eslint-disable default-case, no-param-reassign */
const comicDetailsPageReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case FETCH_COMIC_DETAILS: {
      draft.comicDetails.isLoading = true
      draft.comicDetails.error = null
      break
    }
    case FETCH_COMIC_DETAILS_SUCCESS: {
      draft.comicDetails.isLoading = false
      draft.comicDetails.result = action.response
      break
    }
    case FETCH_COMIC_DETAILS_FAILURE: {
      draft.comicDetails.isLoading = false
      draft.comicDetails.error = action.error
      draft.comicDetails.result = {}
      break
    }
  }
})

export default comicDetailsPageReducer
