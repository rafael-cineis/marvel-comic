import {
  all,
  takeLatest,
  call,
  put,
  select,
} from 'redux-saga/effects'

import { COMICS_LIST_API } from 'containers/App/urls'
import request from 'utils/request'

import * as actions from './actions'
import { FETCH_COMICS_LIST } from './constants'
import { makeSelectComicsListPaginationOptions } from './selectors'

export function* fetchComicsList() {
  const { offset, count } = yield select(makeSelectComicsListPaginationOptions)

  try {
    const response = yield call(request, COMICS_LIST_API, {
      method: 'GET',
      params: {
        limit: 10,
        offset: offset + count,
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
  ])
}
