import React from "react"
import styled from "@emotion/styled"
import { maxWidthContainer } from "../../styles/theme"
import { colors } from "../../styles/variables"

export default () => (
  <Wrapper>
    <Footer>
      <p>Alexander Lindfors © 2019</p>
      <a href="https://www.avlindfors.com">avlindfors</a>
    </Footer>
    <FullWidthSocialFooter>
      <SocialFooterContent>Alexander Lindfors</SocialFooterContent>
    </FullWidthSocialFooter>
  </Wrapper>
)

const Wrapper = styled.footer`
  background: ${colors.main.footer.light};
`
const Footer = styled.div`
  ${maxWidthContainer};
  height:402px;
`

const FullWidthSocialFooter = styled.footer`
  background: ${colors.main.footer.dark};
`

const SocialFooterContent = styled.div`
  ${maxWidthContainer};
  height:122px;
`
