/* @jsx jsx */
import React from "react"
// eslint-disable-next-line
import { Global, jsx } from "@emotion/core"

import globalStyles from "../../styles/globalStyles"
import Header from "./header"
import Footer from "./footer"
import styled from "@emotion/styled"
import { BREAKPOINTS, colors } from "../../styles/variables"

const Layout = ({ children, hideNewsLetter }) => {
  return (
    <Container>
      <Global styles={globalStyles} />
      <Header />
      <>{children}</>
      <Footer hideNewsLetter={hideNewsLetter} />
    </Container>
  )
}

const Container = styled.div`
  background: ${colors.main.background.dark};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    background: linear-gradient(to bottom right, ${colors.main.background.dark}, 75%, #3f4b4b);
  }
`
export default Layout
