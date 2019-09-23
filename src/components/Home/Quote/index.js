import React from "react"
import styled from "@emotion/styled"

import { H1, maxWidthContainer, H2 } from "../../../styles/theme"
import { colors, animationDurations } from "../../../styles/variables"
import { HintLink } from "../../../styles/shared"
import PrimaryButton from "../../PrimaryButton"

import HeartIcon from "../../../assets/icons/heart.inline.svg"
import HeartOutlineIcon from "../../../assets/icons/heart-outline.inline.svg"

import FrontendImage from "../../../assets/images/undraw-frontend.inline.svg"
import BackendImage from "../../../assets/images/undraw-backend.inline.svg"
import DesignImage from "../../../assets/images/undraw-design.inline.svg"

import quoteImage from "../../../assets/images/quote.svg"
import blobImage from "../../../assets/images/blob-triangular.svg"

export default () => {
  return (
    <Quote>
      <MaxWidthContainer>
        <CenteredQuote>
          I'm always looking for opportunities to learn and grow as an engineer
          and as a person.
        </CenteredQuote>
        <CenteredCopyText>
          I built this website from scratch as a way to show how I work and what
          I can do.
          <br></br>
          If you want to know more, send me a message or check out my resume.
        </CenteredCopyText>
        <CenteredButtons>
          <PrimaryButton type="button">Get in touch</PrimaryButton>
          <DarkHintLink to="/resume">See resume</DarkHintLink>
        </CenteredButtons>
      </MaxWidthContainer>
      <BonusContainer>
        <TipText>
          <Bold>FOR THE CURIOUS: </Bold> Check out the source code for this
          project on <a href="https://www.github.com/alindfor">GitHub</a>
        </TipText>
      </BonusContainer>
    </Quote>
  )
}

const Bold = styled.span`
  color: inherit;
  font-weight: 600;
`
const BonusContainer = styled.footer`
  background: #e8eefa;
  color: #4e566f;
  font-size: 18px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: inherit;
  }
`
const TipText = styled.p`
  color: inherit;
  opacity: 0.75;
  letter-spacing: 0.06em;
`
const CenteredButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 60px;
`

const DarkHintLink = styled(HintLink)`
  color: #666a8a;
  margin-top: 24px;
  text-align: center;
`

const Quote = styled.section`
  background: #f6f6fd;
  z-index: 1;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    height: 600px;
    width: 400px;
    background: url(${blobImage});
    background-size: auto;
    background-repeat: no-repeat;
    right: -20px;
    top: 150px;
  }
`

const MaxWidthContainer = styled.div`
  ${maxWidthContainer};
  padding-top: 110px;
  display: flex;
  flex-direction: column;
`

const CenteredQuote = styled(H1)`
  color: ${colors.text.dark};
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  max-width: 900px;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 80px;
  position: relative;
  &::after,
  &::before {
    position: absolute;
    content: "";
    height: 120px;
    width: 120px;
    background: url(${quoteImage});
    background-size: cover;
  }
  &::before {
    bottom: 40px;
    left: -135px;
  }
  &::after {
    top: 45px;
    right: -70px;
    transform: scale(-1, -1);
  }
`
const CenteredCopyText = styled.p`
  text-align: left;
  margin: 0 auto;
  max-width: 700px;
  color: ${colors.text.dark};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6em;
  letter-spacing: 0.06em;
  margin-bottom: 60px;

  z-index: 1;
`
