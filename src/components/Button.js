import styled from "@emotion/styled"
import {
  colors,
  borderRadius,
  animationDurations,
  WEIGHTS,
  FONTSIZE,
  SPACING,
} from "../styles/variables"

export const PrimaryButton = styled.button`
  outline: none;
  border: none;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1em;
  font-weight: ${WEIGHTS.MEDIUM};
  background: ${({ background }) => background || colors.accent.main};
  ${FONTSIZE[2]};
  border-radius: ${borderRadius};
  width: auto;
  padding: ${SPACING[3]};
  cursor: pointer;
  transition: ${animationDurations.normal} ease;
  &:hover {
    background: ${colors.accent.dark};
  }
`

export const HintButton = styled(PrimaryButton)`
  text-transform: uppercase;
  background: none;
  &:hover {
    background: #decbf70d;
  }
`

export default { PrimaryButton, HintButton }
