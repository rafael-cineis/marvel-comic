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
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Loader from 'components/Loader'
import Text from 'components/Text'

import {
  makeSelectComicDetailsResult,
  makeSelectComicDetailsIsLoading,
  makeSelectComicDetailsError,
} from './selectors'
import { fetchComicDetails } from './actions'
import reducer from './reducer'
import saga from './saga'
import ComicDetails from './ComicDetails'
import messages from './messages'

export function ComicDetailsPage(props) {
  useInjectReducer({ key: 'comicDetailsPage', reducer })
  useInjectSaga({ key: 'comicDetailsPage', saga })

  const {
    comicDetails,
    isLoading,
    match,
    error,
  } = props

  useEffect(() => {
    const { params: { id } } = match

    props.fetchComicDetails(id)
  }, [])

  if (!isLoading && error) {
    return (
      <>
        <Text big>
          <FormattedMessage {...messages.noComicFoundWithId} />
        </Text>
        <Link to="/">
          <FormattedMessage {...messages.returnToComicsList} />
        </Link>
      </>
    )
  }

  return isLoading ? <Loader /> : <ComicDetails comic={comicDetails} />
}

ComicDetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  fetchComicDetails: PropTypes.func.isRequired,
  comicDetails: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,
}

/* istanbul ignore next */
const mapStateToProps = createStructuredSelector({
  comicDetails: makeSelectComicDetailsResult,
  isLoading: makeSelectComicDetailsIsLoading,
  error: makeSelectComicDetailsError,
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
