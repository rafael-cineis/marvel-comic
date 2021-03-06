/**
 *
 * Header
 *
 */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import MarvelLogo from 'images/marvelLogo.png'

const HeaderWrapper = styled.div`
  padding: 12px;
  background-color: #151515;
  color: #999;
  text-align: center;
  font-size: 12px;
  font-weight: bold;

  img {
    width: 100px;
  }
`

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={MarvelLogo} alt="Mavel" />
      </Link>
    </HeaderWrapper>
  )
}

Header.propTypes = {}

export default Header
