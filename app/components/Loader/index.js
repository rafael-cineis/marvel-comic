/**
 *
 * Loader
 *
 */

import React from 'react'
import styled from 'styled-components'
import LoaderGif from 'images/loader.gif'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

function Loader() {
  return (
    <Wrapper>
      <img src={LoaderGif} alt="Loader" />
    </Wrapper>
  )
}

export default Loader
