import React from "react"
import styled from "@emotion/styled"

import { H1, maxWidthContainer, H2 } from "../../../styles/theme"
import {
  colors,
  animationDurations,
  FONTSIZE,
  SPACING,
} from "../../../styles/variables"
import { HintLink } from "../../../styles/shared"
import { PrimaryButton } from "../../Button"

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
          I designed and built this website from scratch as a way to show how I
          work and what I can do.
          <br></br>
          If you want to know more, send me a message or check out my resume.
        </CenteredCopyText>
        <CenteredButtons>
          <PrimaryButton type="button">GET IN TOUCH</PrimaryButton>
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
  padding: ${SPACING[6]} ${SPACING[4]};
  ${FONTSIZE[3]};
  line-height:150%;
  color: #4e566f;
  background: #e8eefa;
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
  margin-bottom: ${SPACING[6]};
`

const DarkHintLink = styled(HintLink)`
  color: #666a8a;
  margin-top: 24px;

  text-align: center;
  ${FONTSIZE[2]};
`

const Quote = styled.section`
  background: #f6f6fd;

`

const MaxWidthContainer = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
  padding: 0 ${SPACING[4]};
  padding-top: ${SPACING[9]};
  overflow:hidden;
`

const CenteredQuote = styled(H1)`
  ${FONTSIZE[5]};
  font-style: italic;
  font-weight: 400;
  color: ${colors.text.dark};
  margin-bottom: ${SPACING[8]};
  margin-top: ${SPACING[3]};
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
    bottom: 120px;
    left: -20px;
  }
  &::after {
    top: 90px;
    right: -20px;
    transform: scale(-1, -1);
  }
`
const CenteredCopyText = styled.p`
  ${FONTSIZE[3]}
  text-align: left;
  margin: 0 auto;
  max-width: 700px;
  color: ${colors.text.dark};
  font-weight: 400;
  line-height: 1.6em;
  letter-spacing: 0.06em;
  margin-bottom: ${SPACING[6]};
  z-index: 1;
`
