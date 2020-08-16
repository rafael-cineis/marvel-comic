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
    paginationOptions: {
      total: 0,
      offset: 0,
      count: 0,
    },
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
      const { response: { data } } = action

      draft.comicsList.isLoading = false
      draft.comicsList.result = state.comicsList.result.concat(data.results)
      draft.comicsList.error = null

      draft.comicsList.paginationOptions.total = data.total
      draft.comicsList.paginationOptions.offset = data.offset
      draft.comicsList.paginationOptions.count = data.count
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
