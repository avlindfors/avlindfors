import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { maxWidthContainer } from "../../styles/theme"
import { colors, SPACING, FONTSIZE } from "../../styles/variables"

import NewsLetter from "../NewsLetter"

import LogoWithText from "../../assets/images/avl-logo-text.inline.svg"

import EmailIcon from "../../assets/icons/email.inline.svg"
import LocationIcon from "../../assets/icons/location.inline.svg"
import PhoneIcon from "../../assets/icons/phone.inline.svg"

import GithubIcon from "../../assets/icons/github.inline.svg"
import TwitterIcon from "../../assets/icons/twitter.inline.svg"
import LinkedinIcon from "../../assets/icons/linkedin.inline.svg"

export default () => (
  <>
    <NewsLetter />
    <Wrapper>
      <Footer>
        <LogoSection>
          <LogoWithText />
        </LogoSection>
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
                      href="mailto:alex@avlindfors.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      alex@avlindfors.com
                    </Mail>
                  </ContactBody>
                </ContactItem>
                <ContactItem>
                  <IconWrapper>
                    <PhoneIcon />
                  </IconWrapper>
                  <ContactBody>+8180 4989 6399</ContactBody>
                </ContactItem>
                <ContactItem>
                  <IconWrapper>
                    <LocationIcon />
                  </IconWrapper>
                  <ContactBody>Tokyo, Japan</ContactBody>
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
      </Footer>
      <FullWidthSocialFooter>
        <SocialFooterContent>
          <CopyrightNotice>
            <Copyright>Alexander Lindfors © 2019</Copyright>
            <ItalicDimText>
              Crafted lovingly with Gatsby, React and Node
            </ItalicDimText>
          </CopyrightNotice>
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
                href="https://www.github.com/alindfor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a>
            </SocialIcon>
            <SocialIcon>
              <a
                href="https://www.twitter.com/a_lindfors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </SocialIcon>
          </SocialSection>
        </SocialFooterContent>
      </FullWidthSocialFooter>
    </Wrapper>
  </>
)

const Wrapper = styled.footer`
  background: ${colors.main.footer.light};
`
const Footer = styled.section`
  ${maxWidthContainer};
  padding: ${SPACING[7]} ${SPACING[4]};
  padding-bottom:${SPACING[7]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FullWidthSocialFooter = styled.footer`
  background: ${colors.main.footer.dark};
`

const SocialFooterContent = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: ${SPACING[5]} ${SPACING[4]};
`
const LogoSection = styled.div`
  margin-bottom: ${SPACING[5]};
`

const LinkSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BaseSection = styled.section`
  &:not(:last-of-type) {
    margin-bottom: ${SPACING[5]};
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

const PagesSection = styled(BaseSection)``
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
  margin-bottom: ${SPACING[3]}
`
const ItalicDimText = styled(SocialFooterText)`
  font-style: italic;
  ${FONTSIZE[2]};
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: ${SPACING[5]}
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
