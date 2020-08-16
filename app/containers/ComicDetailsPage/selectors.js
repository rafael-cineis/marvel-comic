import { createSelector } from 'reselect'
import { initialState } from './reducer'

export const selectComicDetailsPageDomain = state => state.comicDetailsPage || initialState

export const selectComicDetailsState = createSelector(
  selectComicDetailsPageDomain,
  substate => substate.comicDetails
)

export const makeSelectComicDetailsResult = createSelector(
  selectComicDetailsState,
  comicDetails => comicDetails.result
)

export const makeSelectComicDetailsIsLoading = createSelector(
  selectComicDetailsState,
  comicDetails => comicDetails.isLoading
)
