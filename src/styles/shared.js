import styled from "@emotion/styled"

import { Link } from "gatsby"

export const HintLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-left: 36px;
  &:hover {
    text-decoration: underline;
  }
`
