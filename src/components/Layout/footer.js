import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"

import { maxWidthContainer } from "../../styles/theme"
import { colors, SPACING, FONTSIZE, BREAKPOINTS } from "../../styles/variables"

import NewsLetter from "../NewsLetter"

import LogoWithText from "../../assets/images/avl-logo-text.inline.svg"

import EmailIcon from "../../assets/icons/email.inline.svg"
import LocationIcon from "../../assets/icons/location.inline.svg"
import PhoneIcon from "../../assets/icons/phone.inline.svg"

import GithubIcon from "../../assets/icons/github.inline.svg"
import TwitterIcon from "../../assets/icons/twitter.inline.svg"
import LinkedinIcon from "../../assets/icons/linkedin.inline.svg"

const query = graphql`
  query FooterQuery {
    overviewJson {
      email
      phoneNumber
      location
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <Footer data={data} {...props} />}
  />
)

function Footer({ data: { overviewJson }, hideNewsLetter }) {
  const { email, phoneNumber, location } = overviewJson

  var [currentYear, setCurrentYear] = useState();
  useEffect(() => {
    if (currentYear === undefined) {
      setCurrentYear(new Date().getFullYear())
    }
  }, [])

  return (
    <>
      {!hideNewsLetter && <NewsLetter />}
      <Wrapper>
        <FooterSection>
          <LogoAndSocialContainer>
            <LogoSection>
              <LogoWithText />
            </LogoSection>
            <SocialSection>
              <SocialIcon>
                <a
                  href="https://www.linkedin.com/in/alexander-lindfors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                </a>
              </SocialIcon>
              <SocialIcon>
                <a
                  href="https://www.github.com/avlindfors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </a>
              </SocialIcon>
              <SocialIcon>
                <a
                  href="https://www.twitter.com/avlindfors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </SocialIcon>
            </SocialSection>
          </LogoAndSocialContainer>
          <LinkSection>
            <ContactSection>
              <Address>
                <SectionTitle>Contact</SectionTitle>
                <ContactList>
                  <ContactItem>
                    <IconWrapper>
                      <EmailIcon />
                    </IconWrapper>
                    <ContactBody>
                      <Mail
                        href={`mailto:${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {email}
                      </Mail>
                    </ContactBody>
                  </ContactItem>
                  <ContactItem>
                    <IconWrapper>
                      <PhoneIcon />
                    </IconWrapper>
                    <ContactBody>{phoneNumber}</ContactBody>
                  </ContactItem>
                  <ContactItem>
                    <IconWrapper>
                      <LocationIcon />
                    </IconWrapper>
                    <ContactBody>{location}</ContactBody>
                  </ContactItem>
                </ContactList>
              </Address>
            </ContactSection>
            <PagesSection>
              <nav>
                <SectionTitle>Pages</SectionTitle>
                <PagesList>
                  <PagesItem>
                    <LinkBody>
                      <NavLink to="/">Home</NavLink>
                    </LinkBody>
                  </PagesItem>

                  <PagesItem>
                    <LinkBody>
                      <NavLink to="/resume">Resume</NavLink>
                    </LinkBody>
                  </PagesItem>

                  <PagesItem>
                    <LinkBody>
                      <NavLink to="/blog">Blog</NavLink>
                    </LinkBody>
                  </PagesItem>
                </PagesList>
              </nav>
            </PagesSection>
          </LinkSection>
        </FooterSection>
        <FullWidthSocialFooter>
          <SocialFooterContent>
            <CopyrightNotice>
              <Copyright>Alexander Lindfors © {currentYear || "2021"}</Copyright>
              <ItalicDimText>Crafted lovingly with Gatsby JS</ItalicDimText>
            </CopyrightNotice>
          </SocialFooterContent>
        </FullWidthSocialFooter>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.footer`
  background: ${colors.main.footer.light};
`
const FooterSection = styled.section`
  ${maxWidthContainer};
  padding: ${SPACING[7]} ${SPACING[4]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    padding: ${SPACING[8]} ${SPACING[4]};
    flex-direction: row;
  }
`

const FullWidthSocialFooter = styled.footer`
  background: ${colors.main.footer.dark};
`

const LogoAndSocialContainer = styled.div`
  flex-basis: 50%;
`
const SocialFooterContent = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: ${SPACING[5]} ${SPACING[4]};
`
const LogoSection = styled.div`
  margin-bottom: ${SPACING[6]};
`

const LinkSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
  }
`

const BaseSection = styled.section`
  @media screen and (max-width: ${BREAKPOINTS.SM}) {
    &:not(:last-of-type) {
      margin-bottom: ${SPACING[5]};
    }
  }
`
const LinkItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: ${SPACING[5]};
  }
`
const LinkBody = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #d7daf4;
`
const LinkList = styled.ul`
  list-style-type: none;
`
const SectionTitle = styled.h5`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0.06em;
  margin-bottom: 18px;
`

const EqualWidthIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  margin-right: 18px;
`
const IconWrapper = ({ children, ...props }) => {
  return <EqualWidthIcon {...props}>{children}</EqualWidthIcon>
}

const ContactSection = styled(BaseSection)``
const ContactList = styled(LinkList)``
const ContactItem = styled(LinkItem)`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ContactBody = styled(LinkBody)``

const PagesSection = styled(BaseSection)`
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-right: ${SPACING[3]};
    padding-left: ${SPACING[2]};
  }
`
const PagesList = styled(LinkList)``
const PagesItem = styled(LinkItem)``

const NavLink = styled(Link)`
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const SocialFooterText = styled.p`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.06em;
  color: #d7daf4;
`
const Copyright = styled(SocialFooterText)`
  ${FONTSIZE[3]};
  font-weight: 300;
  margin-bottom: ${SPACING[3]};
`

const ItalicDimText = styled(SocialFooterText)`
  font-style: italic;
  ${FONTSIZE[2]};
  font-weight: 300;
  opacity: 0.9;
`

const Address = styled.address`
  font-style: normal;
`

const Mail = styled.a`
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const CopyrightNotice = styled.div``
const SocialSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${SPACING[5]};
`

const SocialIcon = styled.div`
  cursor: pointer;
  svg {
    height: 38px;
    width: 38px;
    fill: #f0f1fa;
  }
  &:not(:last-of-type) {
    margin-right: 32px;
  }
`
