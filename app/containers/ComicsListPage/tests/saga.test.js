/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { call, put } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'

import { CHARACTERS_LIST_API, COMICS_LIST_API } from 'containers/App/urls'
import request from 'utils/request'

import * as actions from '../actions'
import comicsListPageSaga, { fetchComicsList, fetchCharactersBasedOnSearch } from '../saga'

describe('comicsListPageSaga Saga', () => {
  describe('fetchComicsList', () => {
    describe('success scenario without searchCriteria', () => {
      const it = sagaHelper(fetchComicsList({}))
      const response = { response: 'response' }

      // Skip select call
      it('should select the options', () => ({ offset: 10, count: 10 }))

      it('should call api', (result) => {
        expect(result).toEqual(call(request, COMICS_LIST_API, {
          method: 'GET',
          params: {
            limit: 10,
            offset: 20,
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

    describe('success scenario with different searchCriteria', () => {
      const it = sagaHelper(fetchComicsList({ searchCriteria: 'Black' }))
      const response = { response: 'response' }

      // Skip select call
      it('should select the options', () => ({ offset: 10, count: 10 }))

      // Skip select call
      it('should select the searchCriteria from the state', () => (undefined))

      it('should put fetchCharactersForSearch action', (result) => {
        expect(result).toEqual(put(actions.fetchCharactersForSearch('Black')))
      })

      // Skip take
      it('wait for the fetchCharactersForSearch action to finish', () => {})

      it('should select the characters list from the state', () => ['Black Panther', 'Black Bird'])

      it('should call api', (result) => {
        expect(result).toEqual(call(request, COMICS_LIST_API, {
          method: 'GET',
          params: {
            limit: 10,
            offset: 0,
            characters: 'Black Panther, Black Bird',
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

    describe('success scenario with searchCriteria equals to the one in the state', () => {
      const it = sagaHelper(fetchComicsList({ searchCriteria: 'Black' }))
      const response = { response: 'response' }

      // Skip select call
      it('should select the options', () => ({ offset: 10, count: 10 }))

      // Skip select call
      it('should select the searchCriteria from the state', () => 'Black')

      it('should select the characters list from the state', () => ['Black Panther', 'Black Bird'])

      it('should call api', (result) => {
        expect(result).toEqual(call(request, COMICS_LIST_API, {
          method: 'GET',
          params: {
            limit: 10,
            offset: 20,
            characters: 'Black Panther, Black Bird',
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
      const it = sagaHelper(fetchComicsList({}))
      const error = new Error()

      // Skip select call
      it('should select the options', () => ({ offset: 10, count: 10 }))

      it('should call api', (result) => {
        expect(result).toEqual(call(request, COMICS_LIST_API, {
          method: 'GET',
          params: {
            limit: 10,
            offset: 20,
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

  describe('fetchCharactersBasedOnSearch', () => {
    describe('success scenario', () => {
      const it = sagaHelper(fetchCharactersBasedOnSearch({ criteria: 'criteria' }))
      const response = { data: { results: [{ id: 1 }, { id: 2 }] } }

      it('should call the api', (result) => {
        expect(result).toEqual(call(request, CHARACTERS_LIST_API, {
          method: 'GET',
          params: {
            nameStartsWith: 'criteria',
            limit: 10,
          },
        }))

        return response
      })

      it('should put finished action with an array of ids', (result) => {
        expect(result).toEqual(put(actions.fetchCharactersForSearchFinished([1, 2])))
      })
    })

    describe('failure scenario', () => {
      const it = sagaHelper(fetchCharactersBasedOnSearch({ criteria: 'criteria' }))
      const error = new Error()

      it('should call the api', (result) => {
        expect(result).toEqual(call(request, CHARACTERS_LIST_API, {
          method: 'GET',
          params: {
            nameStartsWith: 'criteria',
            limit: 10,
          },
        }))

        return error
      })

      it('should put finished action with an empty array', (result) => {
        expect(result).toEqual(put(actions.fetchCharactersForSearchFinished([])))
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
