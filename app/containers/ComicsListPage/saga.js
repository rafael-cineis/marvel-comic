import {
  all,
  takeLatest,
  call,
  put,
  select,
  take,
} from 'redux-saga/effects'

import { COMICS_LIST_API, CHARACTERS_LIST_API } from 'containers/App/urls'
import request from 'utils/request'

import * as actions from './actions'
import {
  FETCH_COMICS_LIST,
  FETCH_CHARACTERS_FOR_SEARCH,
  FETCH_CHARACTERS_FOR_SEARCH_FINISHED,
} from './constants'
import {
  makeSelectComicsListPaginationOptions,
  makeSelectCharactersListResults,
  makeSelectCharactersListCriteria,
} from './selectors'

export function* fetchCharactersBasedOnSearch(action) {
  const { criteria } = action

  try {
    const response = yield call(request, CHARACTERS_LIST_API, {
      method: 'GET',
      params: {
        nameStartsWith: criteria,
        // Search criteria can have only 10 ids at time
        limit: 10,
      },
    })

    const charactersId = response ? response.data.results.map(character => character.id) : []

    yield put(actions.fetchCharactersForSearchFinished(charactersId))
  } catch (_) {
    yield put(actions.fetchCharactersForSearchFinished([]))
  }
}

export function* fetchComicsList(action) {
  const { searchCriteria } = action
  const { offset, count } = yield select(makeSelectComicsListPaginationOptions)

  let newOffset = offset + count
  let charactersSearch
  if (searchCriteria) {
    const savedCriteria = yield select(makeSelectCharactersListCriteria)

    // Only fetch new characters if the criteria changed
    if (searchCriteria !== savedCriteria) {
      // Reset the offset as we are searching for a comic
      newOffset = 0

      yield put(actions.fetchCharactersForSearch(searchCriteria))
      // Wait for the action above to finish
      yield take(FETCH_CHARACTERS_FOR_SEARCH_FINISHED)
    }

    const charactersList = yield select(makeSelectCharactersListResults)
    charactersSearch = charactersList.join(', ')
  }

  try {
    const response = yield call(request, COMICS_LIST_API, {
      method: 'GET',
      params: {
        limit: 10,
        offset: newOffset,
        characters: charactersSearch,
      },
    })

    yield put(actions.fetchComicsListSuccess(response))
  } catch (error) {
    yield put(actions.fetchComicsListFailure(error))
  }
}

export default function* comicsListPageSaga() {
  yield all([
    takeLatest(FETCH_COMICS_LIST, fetchComicsList),
    takeLatest(FETCH_CHARACTERS_FOR_SEARCH, fetchCharactersBasedOnSearch),
  ])
}
