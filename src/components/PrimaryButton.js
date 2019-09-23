import styled from "@emotion/styled"
import { colors, borderRadius, animationDurations } from "../styles/variables"

export default styled.button`
  outline: none;
  border: none;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1em;
  font-weight: 600;
  background: ${colors.accent.main};
  font-size: 18px;

  border-radius: ${borderRadius};
  height: 60px;
  width:auto;
  padding: 0 24px;
  cursor: pointer;
  transition: ${animationDurations.normal} ease;
  &:hover {
    background: ${colors.accent.dark};
  }
`
