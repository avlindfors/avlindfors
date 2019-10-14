/* @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
// eslint-disable-next-line
import { Global, jsx } from "@emotion/core"

import globalStyles from "../../styles/globalStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}

export default Layout
