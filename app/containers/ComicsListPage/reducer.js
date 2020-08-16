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
  FETCH_CHARACTERS_FOR_SEARCH,
  FETCH_CHARACTERS_FOR_SEARCH_FINISHED,
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
  charactersList: {
    criteria: undefined,
    results: [],
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
    case FETCH_CHARACTERS_FOR_SEARCH: {
      draft.charactersList.criteria = action.criteria
      draft.comicsList.result = []
      break
    }
    case FETCH_CHARACTERS_FOR_SEARCH_FINISHED: {
      draft.charactersList.results = action.results
      break
    }
  }
})

export default comicsListPageReducer
