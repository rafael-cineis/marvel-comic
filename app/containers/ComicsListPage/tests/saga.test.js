/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { call, put } from 'redux-saga/effects'

import { COMICS_LIST_API } from 'containers/App/urls'
import request from 'utils/request'

import * as actions from '../actions'
import { fetchComicsList } from '../saga'


describe('comicsListPageSaga Saga', () => {
  describe('fetchComicsList', () => {
    describe('success scenario', () => {
      const generator = fetchComicsList()
      it('should call api', () => {
        expect(generator.next().value).toEqual(call(request, COMICS_LIST_API, {
          method: 'GET',
          params: {
            limit: 10,
          },
        }))
      })

      it('should put successful action', () => {
        const response = { response: 'response' }
        expect(generator.next(response).value).toEqual(put(actions.fetchComicsListSuccess(response)))
      })

      it('should end', () => {
        expect(generator.next().done).toBeTruthy()
      })
    })

    describe('failure scenario', () => {
      const generator = fetchComicsList()
      it('should call api', () => {
        expect(generator.next().value).toEqual(call(request, COMICS_LIST_API, {
          method: 'GET',
          params: {
            limit: 10,
          },
        }))
      })
      it('should put failure action', () => {
        const error = new Error()
        expect(generator.throw(error).value).toEqual(put(actions.fetchComicsListFailure(error)))
      })

      it('should end', () => {
        expect(generator.next().done).toBeTruthy()
      })
    })
  })
})
