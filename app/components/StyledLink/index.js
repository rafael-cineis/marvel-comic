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

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
  ${props => props.bold && BoldText}
  ${props => props.medium && MediumText}

  &:hover {
    color: #eb2328;
  }
`

function StyledLink(props) {
  return (
    <LinkStyled
      to={props.to}
      bold={props.bold}
      medium={props.medium}
    >
      {props.children}
    </LinkStyled>
  )
}

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
}

export default StyledLink
