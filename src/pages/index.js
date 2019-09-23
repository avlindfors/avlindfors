import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from "../components/Home/Hero"
import Skills from "../components/Home/Skills"
import Message from "../components/Home/Message"
import { colors } from "../styles/variables"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Skills />
    <SkewedTop>
      <Message />
    </SkewedTop>
  </Layout>
)

const SkewedTop = ({ children }) => <Wrapper>{children}</Wrapper>
const Wrapper = styled.section`
  position: relative;
  z-index: 0;
  &::after {
    position: absolute;
    z-index: 1;
    content: "";
    display: block;
    left: 0;
    right: 0;
    top: 0;
    height: 150px;
    background: ${colors.main.background.light};

    clip-path: polygon(0 0, 100% 0, 0 100%);
  }
`
export default IndexPage
