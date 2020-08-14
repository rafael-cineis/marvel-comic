/**
 *
 * Footer
 *
 */

import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import messages from './messages'

const FooterWrapper = styled.footer`
  padding: 8px;
  background-color: #151515;
  color: #999;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`

function Footer() {
  return (
    <FooterWrapper>
      <FormattedMessage {...messages.dataProvidedByMarvelCopyright} />
    </FooterWrapper>
  )
}

export default Footer
