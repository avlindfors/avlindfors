import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Search from "../../../assets/images/undraw-searching.inline.svg"
import ArrowIcon from "../../../assets/icons/arrow.inline.svg"

import { H1 } from "../../../styles/theme"
import {
  colors,
  borderRadius,
  animationDurations,
} from "../../../styles/variables"

export default () => {
  return (
    <Hero>
      <TextSection>
        <H1>Hi! I'm Alexander</H1>
        <Tagline>
          I'm a software engineer with a passion for Front End development and
          Design.
        </Tagline>
        <BioText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua,
          consectetur adipiscing elit, sed do eiusmo.
        </BioText>
        <RightAligned>
          <HintLink to="#">Say hi</HintLink>
          <PrimaryButton type="button">Read more</PrimaryButton>
        </RightAligned>
      </TextSection>
      <ImageSection>
        <SearchImage />
      </ImageSection>
      <MoreSection>
        <MoreText>Wait, there's more.</MoreText>
        <ArrowIcon />
      </MoreSection>
    </Hero>
  )
}

const Hero = styled.section`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  position: relative;
  z-index: 1;

  &::after,
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    height: 1000px;
    width: 1000px;
    border-radius: 200px;
    transform: rotateZ(75deg);
  }
  &::after {
    background: ${colors.blob.green};
    opacity: 0.5;

    right: 950px;
    top: 200px;
  }

  &::before {
    background: ${colors.blob.blue};
    opacity: 0.75;

    left: 900px;
    top: 100px;
  }
`

const TextSection = styled.section`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Tagline = styled.p`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.06em;
  margin-bottom: 18px;
`

const BioText = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.5em;
  margin-bottom: 48px;
`

const RightAligned = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
`

const HintLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-left: 36px;
  &:hover {
    text-decoration: underline;
  }
`
const PrimaryButton = styled.button`
  outline: none;
  border: none;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1em;
  font-weight: 600;
  background: ${colors.accent.main};
  font-size: 18px;

  border-radius: ${borderRadius};
  width: 155px;
  height: 60px;
  cursor: pointer;
  transition: ${animationDurations.normal} ease;
  &:hover {
    background: ${colors.accent.dark};
  }
`

const ImageSection = styled.section`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
`

const SearchImage = styled(Search)`
  float: right;
`
const MoreSection = styled.section`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`

const MoreText = styled.p`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.06em;
  font-weight: 500;
  color: ${colors.text.main};
  margin-bottom: 8px;
`
