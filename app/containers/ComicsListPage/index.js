/**
 *
 * ComicsListPage
 *
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { FormattedMessage } from 'react-intl'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Button from 'components/Button'
import ComicCard from 'components/ComicCard'
import Loader from 'components/Loader'
import SearchInputButton from 'components/SearchInputButton'

import {
  makeSelectComicsListResult,
  makeSelectComicsListIsLoading,
  makeSelectComicsListPaginationOptions,
} from './selectors'
import { fetchComicsList } from './actions'
import reducer from './reducer'
import saga from './saga'
import { ComicsList, Wrapper } from './styles'
import messages from './messages'

export function ComicsListPage(props) {
  useInjectReducer({ key: 'comicsListPage', reducer })
  useInjectSaga({ key: 'comicsListPage', saga })

  const [searchValue, setSearchValue] = useState()
  const { options } = props

  /* istanbul ignore next */
  useEffect(() => {
    if (!props.comicsList.length) {
      props.fetchComicsList()
    }
  }, [])

  /* istanbul ignore next */
  const handleLoadMoreClick = () => {
    props.fetchComicsList(searchValue)
  }

  const renderLoadMoreButton = () => props.isLoading ? <Loader mini /> : (
    <Button
      id="loadMore"
      onClick={handleLoadMoreClick}
      disabled={options.count + options.offset >= options.total}
    >
      <FormattedMessage {...messages.loadMore} />
    </Button>
  )

  /* istanbul ignore next */
  const handleSearchInputOnClick = (value) => {
    setSearchValue(value)
    props.fetchComicsList(value)
  }

  const renderComicsList = () => (
    <Wrapper className="alignCenter">
      <SearchInputButton
        label={messages.searchByCharacterName}
        onClick={handleSearchInputOnClick}
        initialValue={searchValue}
      />
      <ComicsList>
        {props.comicsList.map(comic => (
          <ComicCard
            key={comic.id}
            {...comic}
          />
        ))}
      </ComicsList>
      {renderLoadMoreButton()}
    </Wrapper>
  )

  return props.isLoading && !props.comicsList.length ? <Loader /> : renderComicsList()
}

ComicsListPage.propTypes = {
  fetchComicsList: PropTypes.func.isRequired,
  comicsList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  options: PropTypes.object.isRequired,
}

/* istanbul ignore next */
const mapStateToProps = createStructuredSelector({
  comicsList: makeSelectComicsListResult,
  isLoading: makeSelectComicsListIsLoading,
  options: makeSelectComicsListPaginationOptions,
})

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    fetchComicsList: (searchCriteria) => {
      dispatch(fetchComicsList(searchCriteria))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(ComicsListPage)
