/* @jsx jsx */
import React, { useEffect } from "react"
import styled from "@emotion/styled"
// eslint-disable-next-line
import { Global, jsx } from "@emotion/core"
import axios from "axios"

import globalStyles from "../../styles/globalStyles"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  useEffect(() => {
    axios
      .get("/api/likes")
      .then(({ data }) => data)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  });

  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

const Content = styled.main``
const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

export default Layout
