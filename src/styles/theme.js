/* @jsx jsx */
import styled from "@emotion/styled"
// eslint-disable-next-line
import { css, jsx } from "@emotion/core"

const headerShared = css`
  font-family: "Poppins", sans-serif;
`
export const H1 = styled.h1`
  ${headerShared};
  font-size:50px;
  letter-spacing:0.06em;
  font-weight:500;
`
export const H2 = styled.h2`
  ${headerShared};
`
export const H3 = styled.h3`
  ${headerShared};
`
export const H4 = styled.h4`
  ${headerShared};
`
export const H5 = styled.h5`
  ${headerShared};
`
export const H6 = styled.h6`
  ${headerShared};
`
