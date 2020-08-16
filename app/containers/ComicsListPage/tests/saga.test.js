/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'

import { COMICS_LIST_API } from 'containers/App/urls'
import request from 'utils/request'

import * as actions from '../actions'
import comicsListPageSaga, { fetchComicsList } from '../saga'

describe('comicsListPageSaga Saga', () => {
  describe('fetchComicsList', () => {
    describe('success scenario', () => {
      const it = sagaHelper(fetchComicsList())
      const response = { response: 'response' }

      it('should call api', (result) => {
        expect(result).toEqual(call(request, COMICS_LIST_API, {
          method: 'GET',
          params: {
            limit: 10,
          },
        }))
        return response
      })

      it('should put successful action', (result) => {
        expect(result).toEqual(put(actions.fetchComicsListSuccess(response)))
      })

      it('should end', (result) => {
        expect(result).toEqual(undefined)
      })
    })

    describe('failure scenario', () => {
      const it = sagaHelper(fetchComicsList())
      const error = new Error()

      it('should call api', (result) => {
        expect(result).toEqual(call(request, COMICS_LIST_API, {
          method: 'GET',
          params: {
            limit: 10,
          },
        }))

        return error
      })

      it('should put failure action', (result) => {
        expect(result).toEqual(put(actions.fetchComicsListFailure(error)))
      })

      it('should end', (result) => {
        expect(result).toEqual(undefined)
      })
    })
  })

  describe('comicsListPageSaga', () => {
    const it = sagaHelper(comicsListPageSaga())

    it('should watch for actions', (result) => {
      expect(result).toBeTruthy()
    })
  })
})
