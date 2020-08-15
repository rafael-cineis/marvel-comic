/* istanbul ignore file */
/**
 *
 * Text
 *
 */

import styled, { css } from 'styled-components'

const WhiteText = css`
  color: #fff;
`

const BoldText = css`
  font-weight: bold;
`

const SemiBoldText = css`
  font-weight: 600;
`

const BigText = css`
  font-size: 18px;
`

const MediumText = css`
  font-size: 14px;
`

const SmallText = css`
  font-size: 12px;
`

const UppercaseText = css`
  text-transform: uppercase;
`

const Text = styled.p`
  margin: 0;

  font-size: 1em;
  color: #000000;

  ${props => props.white && WhiteText}
  ${props => props.bold && BoldText}
  ${props => props.semiBold && SemiBoldText}
  ${props => props.big && BigText}
  ${props => props.medium && MediumText}
  ${props => props.small && SmallText}
  ${props => props.uppercase && UppercaseText}
`

export default Text
