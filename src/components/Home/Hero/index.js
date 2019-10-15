import React from "react"
import styled from "@emotion/styled"
import Search from "../../../assets/images/undraw-searching.inline.svg"
import ArrowIcon from "../../../assets/icons/arrow.inline.svg"

import PersonalizeImage from "../../../assets/images/undraw-personalize.inline.svg"

import { PrimaryButton, HintButton } from "../../Button"
import { H1, maxWidthContainer, headerShared } from "../../../styles/theme"
import {
  colors,
  FONTSIZE,
  SPACING,
  WEIGHTS,
  BREAKPOINTS,
} from "../../../styles/variables"

export default () => {
  return (
    <Hero>
      <TopSection>
        <TextSection>
          <Greeting>
            Hello!{" "}
            <Emoji role="img" aria-label="waving hand">
              👋🏻
            </Emoji>
          </Greeting>
          <Introduction>I'm Alexander</Introduction>
          <Tagline>
            I’m a software engineer with a passion for UI design
          </Tagline>
          <BioText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua,
            consectetur adipiscing elit, sed do eiusmo.
          </BioText>
          <RightAligned>
            <PrimaryButton type="button">Read more</PrimaryButton>
          </RightAligned>
        </TextSection>
        <ImageSection>
          <PersonImage />
        </ImageSection>
      </TopSection>
      <MoreSection>
        <MoreText>Wait, there's more.</MoreText>
        <ArrowIcon />
      </MoreSection>
    </Hero>
  )
}

const Greeting = styled.p`
  ${FONTSIZE[5]};
  letter-spacing: 0.06em;
  font-weight: ${WEIGHTS.SEMI_BOLD};
  color: #a9acd1;
  display: flex;
  align-items: center;
  margin-bottom: ${SPACING[1]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: 0;
  }
`

const Emoji = styled.span`
  ${FONTSIZE[7]};
  margin-left: ${SPACING[4]};
`

const Introduction = styled.h1`
  ${headerShared};
  ${FONTSIZE[7]};
  font-weight: ${WEIGHTS.REGULAR};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    ${FONTSIZE[10]};
  }
`
const Hero = styled.section`
  ${maxWidthContainer};
  padding: 0 ${SPACING[4]};
  padding-top: ${SPACING[5]};
  display: flex;
  flex-direction: column;
`

const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    flex-direction: row;
    margin-bottom: ${SPACING[7]};
  }
`
const MoreSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${SPACING[6]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: ${SPACING[6]};
  }
`

const TextSection = styled.section`
  margin-bottom: ${SPACING[7]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    margin-bottom: 0;
    flex-basis: 50%;
  }
`

const ImageSection = styled.section`
  margin-bottom: ${SPACING[7]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    flex-basis: 50%;
    margin-bottom: 0;
    margin-left: ${SPACING[7]};
    display: flex;
    align-items: center;
  }
`

const PersonImage = styled(PersonalizeImage)`
  width: 100%;
`

const Tagline = styled.p`
  ${FONTSIZE[3]};
  font-weight: ${WEIGHTS.MEDIUM};
  letter-spacing: 0.06em;
  margin-bottom: ${SPACING[5]};
  line-height: 150%;
`

const BioText = styled.p`
  ${FONTSIZE[3]};
  letter-spacing: 0.06em;
  line-height: 160%;
  margin-bottom: ${SPACING[5]};
`

const RightAligned = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const MoreText = styled.p`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.06em;
  font-weight: 500;
  color: ${colors.text.main};
  margin-bottom: 8px;
`
