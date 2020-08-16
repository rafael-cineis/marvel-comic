/**
 *
 * Loader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LoaderGif from 'images/loader.gif'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    width: ${props => props.mini ? '52px' : 'auto'}
  }
`

function Loader({ mini }) {
  return (
    <Wrapper mini={mini}>
      <img src={LoaderGif} alt="Loader" />
    </Wrapper>
  )
}

Loader.propTypes = {
  mini: PropTypes.bool,
}

export default Loader
