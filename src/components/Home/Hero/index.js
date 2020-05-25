/** @jsx jsx  */
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"

import ArrowIcon from "../../../assets/icons/arrow.inline.svg"

import PersonalizeImage from "../../../assets/images/undraw-personalize.inline.svg"

import { LinkButton, SecondaryLinkButton } from "../../Button"
import { maxWidthContainer, headerShared } from "../../../styles/theme"
import {
  colors,
  FONTSIZE,
  SPACING,
  WEIGHTS,
  BREAKPOINTS,
} from "../../../styles/variables"

const Hero = () => {
  const showContact = false;

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
            I’m a software engineer with a passion for UI design
          </PageSubtitle>
          <PageBodyText>
            I am a Swedish software enginner with an interest in UI design. I
            mainly do front end work but I also enjoy working with back end
            technologies. I built this website as a work sample to show how I
            work and what I can do.
          </PageBodyText>
          <RightAligned>
            <LinkButton to="/#features">Read more</LinkButton>
            {showContact && (
              <MarginSecondaryLinkButton to="/#contact">
                Contact me
              </MarginSecondaryLinkButton>
            )}
          </RightAligned>
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

export default Hero;

const MarginSecondaryLinkButton = styled(SecondaryLinkButton)`
  margin-left: ${SPACING[3]};
  text-decoration: none;
`
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
`

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

export const PageTitle = styled.h1`
  ${headerShared};
  ${FONTSIZE[7]};
  font-weight: ${WEIGHTS.REGULAR};
  line-height: 130%;
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
  @media screen and (min-width: ${BREAKPOINTS.MD}) {
    padding-top: ${SPACING[7]};
  }
  @media screen and (min-width: ${BREAKPOINTS.LG}) {
    padding-top: ${SPACING[6]};
  }
`

const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    margin-bottom: ${SPACING[7]};
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
  margin-bottom: ${SPACING[7]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    margin-bottom: 0;
    flex-basis: 50%;
  }
`

export const ImageSection = styled.section`
  margin-bottom: ${SPACING[7]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-basis: 50%;
    margin-bottom: 0;
    margin-left: ${SPACING[7]};
    display: flex;
    align-items: center;
  }
`

const PersonImage = styled(PersonalizeImage)`
  width: 100%;
  height: auto;
`

export const PageSubtitle = styled.p`
  ${FONTSIZE[3]};
  letter-spacing: 0.06em;
  margin-bottom: ${SPACING[4]};
  line-height: 150%;
`

export const PageBodyText = styled.p`
  ${FONTSIZE[3]};
  letter-spacing: 0.06em;
  line-height: 160%;
  margin-bottom: ${SPACING[5]};
  font-weight: ${WEIGHTS.THIN};
`

const RightAligned = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const MoreText = styled.p`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.06em;
  font-weight: 500;
  color: ${colors.text.main};
  margin-bottom: 8px;
`
