import React from "react"
import { CookiesProvider } from "react-cookie"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from "../components/Home/Hero"
import Skills from "../components/Home/Skills"
import Message from "../components/Home/Message"

const IndexPage = () => (
  <CookiesProvider>
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Skills />
      <Message />
    </Layout>
  </CookiesProvider>
)

export default IndexPage
