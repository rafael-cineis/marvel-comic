/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { call, put } from 'redux-saga/effects'

import { COMIC_DETAILS_API } from 'containers/App/urls'
import request from 'utils/request'
import sagaHelper from 'redux-saga-testing'

import * as actions from '../actions'
import comicDetailsPageSaga, { fetchComicDetails } from '../saga'

describe('comicDetailsPageSaga Saga', () => {
  describe('fetchComicsList', () => {
    describe('success scenario without API call', () => {
      const it = sagaHelper(fetchComicDetails({ id: 1 }))

      // Skip select call
      it('should select comic details from state', () => ({ title: 'Title' }))

      it('should put successful action with selected state', (result) => {
        expect(result).toEqual(put(actions.fetchComicDetailsSuccess({ title: 'Title' })))
      })

      it('should end', (result) => {
        expect(result).toEqual(undefined)
      })
    })

    describe('success scenario with API call', () => {
      const url = COMIC_DETAILS_API.replace(':id', 1)
      const it = sagaHelper(fetchComicDetails({ id: 1 }))

      // Skip select call
      it('should select comic details from state', () => ({}))

      it('should call api', (result) => {
        expect(result).toEqual(call(request, url, { method: 'GET' }))
        return { data: { results: [{ title: 'Title' }] } }
      })

      it('should put successful action with selected state', (result) => {
        expect(result).toEqual(put(actions.fetchComicDetailsSuccess({ title: 'Title' })))
      })

      it('should end', (result) => {
        expect(result).toEqual(undefined)
      })
    })

    describe('failure scenario', () => {
      const it = sagaHelper(fetchComicDetails({ id: 1 }))
      const url = COMIC_DETAILS_API.replace(':id', 1)
      const error = new Error()

      // Skip select call
      it('should select comic details from state', () => ({}))

      it('should call api', (result) => {
        expect(result).toEqual(call(request, url, { method: 'GET' }))
        return error
      })

      it('should put failure action', (result) => {
        expect(result).toEqual(put(actions.fetchComicDetailsFailure(error)))
      })

      it('should end', (result) => {
        expect(result).toEqual(undefined)
      })
    })
  })

  describe('comicDetailsPageSaga', () => {
    const it = sagaHelper(comicDetailsPageSaga())

    it('should watch for actions', (result) => {
      expect(result).toBeTruthy()
    })
  })
})
