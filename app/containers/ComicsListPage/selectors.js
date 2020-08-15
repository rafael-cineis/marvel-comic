import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectComicsListPageDomain = state => state.comicsListPage || initialState

export const selectComicsListState = createSelector(
  selectComicsListPageDomain,
  substate => substate.comicsList
)

export const makeSelectComicsListResult = createSelector(
  selectComicsListState,
  comicsList => comicsList.result
)

export const makeSelectComicsListIsLoading = createSelector(
  selectComicsListState,
  comicsList => comicsList.isLoading
)
