/**
 *
 * ComicsListPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import ComicCard from 'components/ComicCard'
import Loader from 'components/Loader'

import {
  makeSelectComicsListResult,
  makeSelectComicsListIsLoading,
} from './selectors'
import { fetchComicsList } from './actions'
import reducer from './reducer'
import saga from './saga'
import { ComicsList } from './styles'

export function ComicsListPage(props) {
  useInjectReducer({ key: 'comicsListPage', reducer })
  useInjectSaga({ key: 'comicsListPage', saga })

  /* istanbul ignore next */
  useEffect(() => {
    if (!props.comicsList.length) {
      props.fetchComicsList()
    }
  }, [])

  const renderComicsList = () => (
    <ComicsList>
      {props.comicsList.map(comic => (
        <ComicCard
          key={comic.id}
          {...comic}
        />
      ))}
    </ComicsList>
  )

  return props.isLoading ? <Loader /> : renderComicsList()
}

ComicsListPage.propTypes = {
  fetchComicsList: PropTypes.func.isRequired,
  comicsList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

/* istanbul ignore next */
const mapStateToProps = createStructuredSelector({
  comicsList: makeSelectComicsListResult,
  isLoading: makeSelectComicsListIsLoading,
})

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    fetchComicsList: () => {
      dispatch(fetchComicsList())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(ComicsListPage)
