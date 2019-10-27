import React from "react"
import styled from "@emotion/styled"

import { H1, maxWidthContainer } from "../../../styles/theme"
import {
  colors,
  FONTSIZE,
  SPACING,
  BREAKPOINTS,
} from "../../../styles/variables"
import { HintLink } from "../../../styles/shared"
import { PrimaryButton, LinkButton } from "../../Button"

import quoteImage from "../../../assets/images/quote.svg"

export default () => {
  return (
    <Quote>
      <MaxWidthContainer>
        <CenteredQuote>
          I'm always looking for opportunities to learn and grow as an engineer
          and as a person.
        </CenteredQuote>
        <CenteredButtons>
          <LinkButton type="button" to="#message-section">GET IN TOUCH</LinkButton>
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
  line-height: 150%;
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
  margin-bottom: ${SPACING[7]};
`

const DarkHintLink = styled(HintLink)`
  color: #666a8a;
  margin-top: 24px;

  text-align: center;
  ${FONTSIZE[2]};
`

const Quote = styled.section`
  background: #F6F6FD;
`

const MaxWidthContainer = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
  padding: 0 ${SPACING[4]};
  padding-top: ${SPACING[8]};
  overflow: hidden;
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    padding-top: ${SPACING[9]};
  }
`

const CenteredQuote = styled(H1)`
  ${FONTSIZE[5]};
  font-style: italic;
  font-weight: 400;
  color: ${colors.text.dark};
  margin-bottom: calc(${SPACING[7]} + ${SPACING[4]});
  margin-top: ${SPACING[3]};
  position: relative;
  text-align: center;
  z-index: 0;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: ${SPACING[7]};
    ${FONTSIZE[7]};
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${SPACING[8]};
  }
  &::after,
  &::before {
    position: absolute;
    content: "";
    height: 75px;
    width: 75px;
    background: url(${quoteImage});
    background-size: cover;
    z-index: -1;
    @media screen and (min-width: ${BREAKPOINTS.XS}) {
      height: 120px;
      width: 120px;
    }
  }
  &::before {
    bottom: -75px;
    right: -10px;
    transform: scale(-1, -1);
    @media screen and (min-width: ${BREAKPOINTS.XS}) {
      bottom: -120px;
    }
  }
  &::after {
    top: -75px;
    left: -10px;
    @media screen and (min-width: ${BREAKPOINTS.XS}) {
      top: -120px;
    }
  }
`
