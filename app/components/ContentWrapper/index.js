/* istanbul ignore file */
/**
 *
 * ContentWrapper
 *
 */

import styled, { css } from 'styled-components'

const MainContent = css`
  max-width: 1240px;
  margin: 16px auto;
`

const ContentWrapper = styled.div`
  width: 100%;

  ${props => props.main && MainContent}
`

export default ContentWrapper
