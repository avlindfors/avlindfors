import React from "react"
import { CookiesProvider } from "react-cookie"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from "../components/Home/Hero"
import Skills from "../components/Home/Skills"

const IndexPage = () => (
  <CookiesProvider>
    <Layout hideNewsLetter>
      <SEO title="Home" />
      <Hero />
      <Skills />
    </Layout>
  </CookiesProvider>
)

export default IndexPage
