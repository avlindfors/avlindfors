/** @jsx jsx  */
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"

import ArrowIcon from "../../../assets/icons/arrow.inline.svg"

import PersonalizeImage from "../../../assets/images/undraw-personalize.inline.svg"

import { maxWidthContainer, headerShared } from "../../../styles/theme"
import {
  colors,
  FONTSIZE,
  SPACING,
  WEIGHTS,
  BREAKPOINTS,
} from "../../../styles/variables"

const Hero = () => {
  return (
    <HeroSection>
      <TopSection>
        <TextSection>
          <Greeting>
            Hello!{" "}
            <Emoji role="img" aria-label="waving hand">
              👋🏻
            </Emoji>
          </Greeting>
          <PageTitle>I'm Alexander</PageTitle>
          <PageSubtitle>
            I’m a fullstack developer with wide interests
          </PageSubtitle>
          <PageBodyText>
            I am a Swedish software enginner with a broad skillset. I enjoy
            working in fullstack projects in an agile environment. Historically
            I've leaned towards the frontend, using React, but lately I've also
            found a lot of joy working with backend technologies, such as Spring
            Boot. I built this website as a work sample to show how I work and
            what I do.
          </PageBodyText>
          <PageBodyText>
            I love anything Sci-Fi, I like playing games and I enjoy playing the guitar, drawing, eating and
            cooking food with friends and family. Read on to learn more about me
            and how I work.
          </PageBodyText>
        </TextSection>
        <ImageSection>
          <PersonImage role="img" aria-labelledby="welcome-image" />
        </ImageSection>
      </TopSection>
      <MoreSection>
        <MoreText>Wait, there's more.</MoreText>
        <AnimatedArrowIcon />
      </MoreSection>
    </HeroSection>
  )
}

export default Hero

const AnimatedArrowIcon = styled(ArrowIcon)`
  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }

    100% {
      transform: translateY(0px);
    }
  }
  animation: bounce 2s infinite ease-in-out;
  path {
    fill: ${colors.accent.main};
  }
`

const Greeting = styled.p`
  ${FONTSIZE[6]};
  letter-spacing: 0.06em;
  font-weight: ${WEIGHTS.SEMI_BOLD};
  color: ${colors.main};
  display: flex;
  align-items: center;
  margin-bottom: ${SPACING[1]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: ${SPACING[2]};
  }
`

const Emoji = styled.span`
  ${FONTSIZE[7]};
  margin-left: ${SPACING[4]};
`

export const PageTitle = styled.h1`
  ${headerShared};
  ${FONTSIZE[7]};
  font-weight: ${WEIGHTS.REGULAR};
  line-height: 130%;
  color: ${colors.accent.main};

  margin-bottom: ${SPACING[1]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    ${FONTSIZE[10]};
  }
`
const HeroSection = styled.section`
  ${maxWidthContainer};
  padding: 0 ${SPACING[4]};
  padding-top: ${SPACING[5]};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    padding-top: ${SPACING[6]};
  }
  @media screen and (min-width: ${BREAKPOINTS.LG}) {
    padding-top: ${SPACING[7]};
  }
`

const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    margin-bottom: ${SPACING[5]};
  }
`
const MoreSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${SPACING[6]};
  @media screen and (min-width: ${BREAKPOINTS.MD}) {
  }
`

export const TextSection = styled.section`
  margin-bottom: ${SPACING[3]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    margin-bottom: 0;
    flex-basis: 100%;
  }
`

export const ImageSection = styled.section`
  margin-bottom: ${SPACING[7]};
  display: none;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-basis: 50%;
    margin-bottom: 0;
    margin-left: ${SPACING[7]};
    display: flex;
    align-items: center;
    visibility: hidden;
  }
`

const PersonImage = styled(PersonalizeImage)`
  width: 100%;
  height: auto;
`

export const PageSubtitle = styled.p`
  ${FONTSIZE[6]};
  letter-spacing: 0.06em;
  margin-bottom: ${SPACING[5]};
  line-height: 150%;
  font-weight: ${WEIGHTS.SEMI_BOLD};
`

export const PageBodyText = styled.p`
  ${FONTSIZE[6]};
  letter-spacing: 0.06em;
  line-height: 160%;
  font-weight: ${WEIGHTS.REGULAR};
  margin-bottom: ${SPACING[5]};
  &:last-of-type {
    margin-bottom: ${SPACING[7]};
  }
`

const MoreText = styled.p`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.06em;
  font-weight: 500;
  color: ${colors.text.main};
  margin-bottom: 8px;
`
