import styled from "@emotion/styled"

import { Link } from "gatsby"
import { SPACING } from "./variables"

export const HintLink = styled(Link, {
  shouldForwardProp: prop => prop !== "withMargin",
})`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  ${({ withMargin }) => withMargin && `margin-right: ${SPACING[6]}`};
  &:hover {
    text-decoration: underline;
  }
`
