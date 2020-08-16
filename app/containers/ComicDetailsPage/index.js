/**
 *
 * ComicDetailsPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import {
  makeSelectComicDetailsResult,
  makeSelectComicDetailsIsLoading,
} from './selectors'
import { fetchComicDetails } from './actions'
import reducer from './reducer'
import saga from './saga'

export function ComicDetailsPage(props) {
  useInjectReducer({ key: 'comicDetailsPage', reducer })
  useInjectSaga({ key: 'comicDetailsPage', saga })

  const { comicDetails, match } = props

  useEffect(() => {
    const { params: { id } } = match

    props.fetchComicDetails(id)
  }, [])

  return (
    <div>
      {comicDetails.title}
    </div>
  )
}

ComicDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  fetchComicDetails: PropTypes.func.isRequired,
  comicDetails: PropTypes.object.isRequired,
}

/* istanbul ignore next */
const mapStateToProps = createStructuredSelector({
  comicDetails: makeSelectComicDetailsResult,
  isLoading: makeSelectComicDetailsIsLoading,
})

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    fetchComicDetails: (id) => {
      dispatch(fetchComicDetails(id))
    },
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect,
)(ComicDetailsPage)
