import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import {
  colors,
  borderRadius,
  animationDurations,
  WEIGHTS,
  FONTSIZE,
  SPACING,
} from "../styles/variables"

const buttonShared = props => css`
  border: none;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: ${WEIGHTS.MEDIUM};
  background: ${props.background || colors.accent.main};
  ${FONTSIZE[2]};
  border-radius: ${borderRadius};
  width: auto;
  padding: ${SPACING[3]};
  cursor: pointer;
  transition: ${animationDurations.normal} ease;
  min-width: 100px;
  &:not(:disabled) {
    &:hover {
      background: ${colors.accent.dark};
    }
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
export const PrimaryButton = styled.button`
  ${buttonShared};
`

export const HintButton = styled(PrimaryButton)`
  text-transform: uppercase;
  background: none;
  &:hover {
    background: #decbf70d;
  }
`

export const LinkButton = styled(Link)`
  ${buttonShared};
  ${FONTSIZE[4]};
  text-decoration: none;
  background-color: ${colors.button.dark};
  color: ${colors.accent.dark};
  font-weight: ${WEIGHTS.SEMI_BOLD};
  text-transform: none;
  padding: ${SPACING[4]} ${SPACING[5]};
  &:not(:disabled) {
    &:hover {
      background: #31356C;
    }
  }
`

export const SecondaryLinkButton = styled(LinkButton)`
  background: none;
  text-decoration: none;
  &:hover {
    background: #decbf70d !important;
  }
`
export default { PrimaryButton, HintButton }
