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
const LinkComponent = ({ bold, medium, ...rest }) => <Link {...rest} /> // eslint-disable-line react/prop-types

const StyledLink = styled(LinkComponent)`
  text-decoration: none;
  color: #000;
  ${props => props.bold && BoldText}
  ${props => props.medium && MediumText}

  &:hover {
    color: #eb2328;
  }
`

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  medium: PropTypes.bool,
}

export default StyledLink
