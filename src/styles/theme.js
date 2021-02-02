/* @jsx jsx */
import styled from "@emotion/styled"
// eslint-disable-next-line
import { css } from "@emotion/core"
import { BREAKPOINTS, colors, FONTSIZE } from "./variables"

export const headerShared = css`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.06em;
`
export const H1 = styled.h1`
  ${headerShared};
  font-weight: 500;
  font-size: 50px;
`
export const H2 = styled.h2`
  ${headerShared};
  font-weight: 500;
  font-size: 42px;
  ${({ color }) => color && `color:${color}`};
`
export const H3 = styled.h3`
  ${headerShared};
  font-weight: 500;
  font-size: 34px;
`
export const H4 = styled.h4`
  ${headerShared};
  font-weight: 500;
  font-size: 26px;
`
export const H5 = styled.h5`
  font-weight: 400;
  font-size: 22px;
  ${headerShared};
`
export const H6 = styled.h6`
  font-weight: 400;
  font-size: 18px;
  ${headerShared};
`
export const maxWidthContainer = css`
  max-width: 1100px;
  margin: 0 auto;
`

export const BodyText = styled.p`
  color: ${colors.text.dark};
  ${FONTSIZE[4]};
  line-height: 1.6em;
  letter-spacing: 0.06em;
  text-align: left;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    text-align: center;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction && direction};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
`
