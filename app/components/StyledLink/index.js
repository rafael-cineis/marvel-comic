/**
 *
 * StyledLink
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { BoldText, MediumText } from 'components/Text'

/* istanbul ignore next */
const LinkComponent = ({
  bold, medium, black, noDecoration, ...rest // eslint-disable-line react/prop-types
}) => <Link {...rest} />

const StyledLink = styled(LinkComponent)`
  color: ${props => props.black && '#000'};

  ${props => props.bold && BoldText}
  ${props => props.medium && MediumText}

  &:hover {
    text-decoration: ${props => props.noDecoration ? 'none' : 'underline'};
  }
`

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
}

export default StyledLink
