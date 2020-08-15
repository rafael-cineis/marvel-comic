/*
 *
 * ComicsListPage reducer
 *
 */
import produce from 'immer'
import {
  FETCH_COMICS_LIST,
  FETCH_COMICS_LIST_SUCCESS,
  FETCH_COMICS_LIST_FAILURE,
} from './constants'

export const initialState = {
  comicsList: {
    result: [],
    error: null,
    isLoading: false,
  },
}

/* eslint-disable default-case, no-param-reassign */
const comicsListPageReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case FETCH_COMICS_LIST: {
      draft.comicsList.isLoading = true
      break
    }
    case FETCH_COMICS_LIST_SUCCESS: {
      draft.comicsList.isLoading = false
      draft.comicsList.result = action.response.data.results
      draft.comicsList.error = null
      break
    }
    case FETCH_COMICS_LIST_FAILURE: {
      draft.comicsList.isLoading = false
      draft.comicsList.error = action.error
      break
    }
  }
})

export default comicsListPageReducer
