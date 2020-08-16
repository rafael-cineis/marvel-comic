import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects'
import isEmpty from 'lodash/isEmpty'

import { COMIC_DETAILS_API } from 'containers/App/urls'
import { makeSelectComicDetailsFromList } from 'containers/ComicsListPage/selectors'
import request from 'utils/request'

import * as actions from './actions'
import { FETCH_COMIC_DETAILS } from './constants'

export function* fetchComicDetails(action) {
  const { id } = action

  const comicDetailsInList = yield select(makeSelectComicDetailsFromList(id))

  try {
    let response = comicDetailsInList

    // Comic wasn't found in the previously loaded list, so fetch it individually
    if (isEmpty(response)) {
      const url = COMIC_DETAILS_API.replace(':id', id)

      const apiResponse = yield call(request, url, { method: 'GET' })
      response = apiResponse ? apiResponse.data.results[0] : {}
    }

    yield put(actions.fetchComicDetailsSuccess(response))
  } catch (error) {
    yield put(actions.fetchComicDetailsFailure(error))
  }
}

export default function* comicDetailsPageSaga() {
  yield all([
    takeLatest(FETCH_COMIC_DETAILS, fetchComicDetails),
  ])
}
