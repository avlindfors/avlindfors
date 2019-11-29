/* @jsx jsx */
import React from "react"
// eslint-disable-next-line
import { Global, jsx } from "@emotion/core"

import globalStyles from "../../styles/globalStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, hideNewsLetter }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <>{children}</>
      <Footer hideNewsLetter={hideNewsLetter} />
    </>
  )
}

export default Layout
