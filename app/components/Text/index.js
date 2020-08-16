/* istanbul ignore file */
/**
 *
 * Text
 *
 */

import styled, { css } from 'styled-components'

export const WhiteText = css`
  color: #fff;
`

export const BoldText = css`
  font-weight: bold;
`

export const SemiBoldText = css`
  font-weight: 600;
`

export const BigText = css`
  font-size: 18px;
`

export const MediumText = css`
  font-size: 14px;
`

export const SmallText = css`
  font-size: 12px;
`

export const UppercaseText = css`
  text-transform: uppercase;
`

export const UnavailableText = css`
  color: #8e8e8e;
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
  ${props => props.unavailableInfo && UnavailableText}
`

export default Text
