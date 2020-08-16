/**
 *
 * SearchInputButton
 *
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Text from 'components/Text'

import { StyledButton, StyledInput } from './styles'

function SearchInputButton(props) {
  const [searchValue, setSearchValue] = useState(props.initialValue)

  /* istanbul ignore next */
  const handleOnChange = ({ target: { value } }) => {
    setSearchValue(value)
  }

  const handleClick = () => {
    props.onClick(searchValue)
  }

  return (
    <div>
      <Text small semiBold>
        <FormattedMessage {...props.label} />
      </Text>
      <StyledInput
        type="text"
        value={searchValue}
        onChange={handleOnChange}
      />
      <StyledButton
        type="button"
        onClick={handleClick}
        disabled={!searchValue}
      >
        <FontAwesomeIcon icon="search" />
      </StyledButton>
    </div>
  )
}

SearchInputButton.defaultProps = {
  initialValue: '',
}

SearchInputButton.propTypes = {
  label: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
}

export default SearchInputButton
