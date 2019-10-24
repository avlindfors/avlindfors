/* @jsx jsx */
import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"
import { useCookies } from "react-cookie"

import {
  maxWidthContainer,
  BodyText,
  headerShared,
} from "../../../styles/theme"
import {
  colors,
  animationDurations,
  SPACING,
  FONTSIZE,
  WEIGHTS,
  BREAKPOINTS,
} from "../../../styles/variables"

// Icons
import HeartIcon from "../../../assets/icons/heart.inline.svg"
import HeartOutlineIcon from "../../../assets/icons/heart-outline.inline.svg"
import DesktopIcon from "../../../assets/icons/desktop.inline.svg"
import DatabaseIcon from "../../../assets/icons/database.inline.svg"
import DesignIcon from "../../../assets/icons/pencil-ruler.inline.svg"

// Card Images
import MasterplanImage from "../../../assets/images/undraw-masterplan.inline.svg"
import CertificateImage from "../../../assets/images/undraw-certificate.inline.svg"
import TeamImage from "../../../assets/images/undraw-team.inline.svg"

import Quote from "../Quote"

const cookieSettings = {
  maxAge: 2629743,
}

export default () => {
  const [frontendLikes, setFrontendLikes] = useState(0)
  const [backendLikes, setBackendLikes] = useState(0)
  const [designLikes, setDesignLikes] = useState(0)
  const resourceToUpdateMap = {
    frontend: { state: frontendLikes, update: setFrontendLikes },
    backend: { state: backendLikes, update: setBackendLikes },
    design: { state: designLikes, update: setDesignLikes },
  }

  const [isLikeAllowed, setIsLikeAllowed] = useState(true)
  const likeLimit = 10

  const [cookies, setCookie] = useCookies([LIKES_KEY])

  useEffect(() => {
    if (cookies[LIKES_KEY] == null) {
      setCookie(
        LIKES_KEY,
        {
          frontend: 0,
          backend: 0,
          design: 0,
        },
        cookieSettings
      )
    }

    if (cookies[LIKES_KEY] != null) {
      const likes = getTotalLikes()
      if (likes >= likeLimit) {
        setIsLikeAllowed(false)
      }
    }

    axios
      .request({
        method: "get",
        url: `${process.env.GATSBY_API_ENDPOINT}/likes`,
        auth: {
          username: `${process.env.GATSBY_AVL_USERNAME}`,
          password: `${process.env.GATSBY_AVL_PASSWORD}`,
        },
        timeout: 5000,
      })
      .then(({ data }) => {
        Object.entries(data).forEach(item => {
          // Advanced Destructuring with Alex Lindfors
          const [resource, { likes }] = item
          if (resourceToUpdateMap[resource]) {
            resourceToUpdateMap[resource].update(likes)
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function getTotalLikes() {
    const likes = cookies[LIKES_KEY]
    const likesArray = Object.values(likes)
    const totalLikes = likesArray.reduce((sum, value) => sum + value)
    return totalLikes
  }

  function handleLike(resource) {
    return () => {
      const likes = getTotalLikes()
      if (likes >= likeLimit) {
        setIsLikeAllowed(false)
        return
      }

      if (!isLikeAllowed) {
        return
      }

      if (resourceToUpdateMap[resource]) {
        const cookie = cookies[LIKES_KEY]
        const { state, update } = resourceToUpdateMap[resource]
        update(state + 1)
        const incrementedResource = cookie[resource] + 1
        cookie[resource] = incrementedResource
        setCookie(LIKES_KEY, cookie, cookieSettings)
      }

      // Anyway, I started blasting
      axios.request({
        method: "post",
        url: `${process.env.GATSBY_API_ENDPOINT}/likes/${resource}`,
        auth: {
          username: `${process.env.GATSBY_AVL_USERNAME}`,
          password: `${process.env.GATSBY_AVL_PASSWORD}`,
        },
        timeout: 5000,
      })
    }
  }

  const format = (val, divident) => {
    let formatted = `${(val / divident).toFixed(1)}`
    const prepareLastDigitZero = formatted.split(".")
    return prepareLastDigitZero[1] === "0" ? prepareLastDigitZero[0] : formatted
  }
  function formatLikesCount(count) {
    if (count < 1000) {
      return count
    }
    if (count >= 1000000) {
      return `${format(count, 1000000)}M`
    }
    if (count >= 1000) {
      return `${format(count, 1000)}K`
    }
  }

  const hasLiked = {
    frontend: cookies[LIKES_KEY] ? cookies[LIKES_KEY]["frontend"] > 0 : false,
    backend: cookies[LIKES_KEY] ? cookies[LIKES_KEY]["backend"] > 0 : false,
    design: cookies[LIKES_KEY] ? cookies[LIKES_KEY]["design"] > 0 : false,
  }

  return (
    <Skills id="features">
      <MaxWidthContainer>
        <SectionTitle color={colors.text.header.dark}>
          What can I do for you?
        </SectionTitle>
        <Cards>
          <Card>
            <CardTitle>Front end</CardTitle>
            <IconWrapper>
              <DesktopIcon />
            </IconWrapper>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes
              onClick={handleLike("frontend")}
              disabled={!isLikeAllowed}
            >
              <HeartContainer>
                {hasLiked["frontend"] ? <HeartIcon /> : <HeartOutlineIcon />}
              </HeartContainer>
              <LikesCounter>{formatLikesCount(frontendLikes)}</LikesCounter>
              {!isLikeAllowed && (
                <SmallHintText>
                  I decided that you can like {likeLimit} times.
                </SmallHintText>
              )}
            </CardLikes>
          </Card>
          <Card>
            <CardTitle>Back end</CardTitle>
            <IconWrapper>
              <DatabaseIcon />
            </IconWrapper>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes
              onClick={handleLike("backend")}
              disabled={!isLikeAllowed}
            >
              <HeartContainer>
                {hasLiked["backend"] ? <HeartIcon /> : <HeartOutlineIcon />}
              </HeartContainer>
              <LikesCounter>{formatLikesCount(backendLikes)}</LikesCounter>
              {!isLikeAllowed && (
                <SmallHintText>
                  I decided that you can like {likeLimit} times.
                </SmallHintText>
              )}
            </CardLikes>
          </Card>
          <Card>
            <CardTitle>Design</CardTitle>
            <IconWrapper>
              <DesignIcon />
            </IconWrapper>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes onClick={handleLike("design")} disabled={!isLikeAllowed}>
              <HeartContainer>
                {hasLiked["design"] ? <HeartIcon /> : <HeartOutlineIcon />}
              </HeartContainer>
              <LikesCounter>{formatLikesCount(designLikes)}</LikesCounter>
              {!isLikeAllowed && (
                <SmallHintText>
                  I decided that you can like {likeLimit} times.
                </SmallHintText>
              )}
            </CardLikes>
          </Card>
        </Cards>
        <SectionTitle color={colors.text.header.dark}>
          What motivates me?
        </SectionTitle>
        <FeatureCards>
          <FeatureCard color="#DEDFE2" background="#3F3D56">
            <TextSection>
              <FeatureTitle>Curiosity</FeatureTitle>
              <FeatureBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt iscing elit, sed do eiusmod tempor
                incididunt
              </FeatureBody>
            </TextSection>
            <FeatureImage overhang>
              <MasterplanImage role="img" aria-labelledby="curious-image" />
            </FeatureImage>
          </FeatureCard>
          <FeatureCard background="#6C63FF" color="#E2E1FB" reverse>
            <TextSection>
              <FeatureTitle>Personal growth</FeatureTitle>
              <FeatureBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt iscing elit, sed do eiusmod tempor
                incididunt
              </FeatureBody>
            </TextSection>
            <FeatureImage overhang>
              <CertificateImage role="img" aria-labelledby="growth-image" />
            </FeatureImage>
          </FeatureCard>
          <FeatureCard background="#E9F0FD" color="#2A5384">
            <TextSection>
              <FeatureTitle>Teamwork</FeatureTitle>
              <FeatureBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt iscing elit, sed do eiusmod tempor
                incididunt
              </FeatureBody>
            </TextSection>
            <FeatureImage>
              <TeamImage role="img" aria-labelledby="team-image" />
            </FeatureImage>
          </FeatureCard>
        </FeatureCards>
      </MaxWidthContainer>
      <Quote />
    </Skills>
  )
}
const SmallHintText = styled.small`
  margin-left: ${SPACING[3]};
  color: #605208;
  ${FONTSIZE[1]};
  text-align: left;
`

const FeatureCards = styled.ul`
  list-style-type: none;
`
const FeatureCard = styled.li`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border-radius: 12px;
  padding: ${SPACING[4]};
  padding-top: ${SPACING[5]};
  padding-bottom: 0;
  margin-bottom: ${SPACING[7]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row" : "row-reverse")};
    padding: 0;
  }
`

const TextSection = styled.section`
  color: inherit;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${SPACING[5]};
  }
`
const FeatureTitle = styled.h3`
  ${headerShared};
  ${FONTSIZE[6]};
  font-weight: ${WEIGHTS.REGULAR};
  color: inherit;
  letter-spacing: 0.06em;
  margin-bottom: ${SPACING[2]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: ${SPACING[4]};
  }
`
const FeatureBody = styled.p`
  color: inherit;
  ${FONTSIZE[5]};
  letter-spacing: 0.06em;
  line-height: 160%;
  margin-bottom: ${SPACING[1]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: 0;
  }
`

const withOverhang = css`
  position: relative;
  top: ${SPACING[4]};
`
const FeatureImage = styled.div`
  ${({ overhang }) => overhang && withOverhang};
  svg {
    max-width: 100%;
  }
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    padding: 0 ${SPACING[4]};
    svg {
      max-width: initial;
      height: 320px;
      width: 420px;
    }
  }
`
const IconWrapper = styled.div`
  margin-bottom: ${SPACING[5]};
`
const Cards = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: ${SPACING[7]};
    flex-direction: row;
  }
`
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 100%;
  margin-bottom: ${SPACING[5]};
  padding: ${SPACING[5]};
  box-shadow: 0 0 8px #00000019;
  transition: ${animationDurations.normal} ease;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: 0;
    &:not(:last-of-type) {
      margin-right: ${SPACING[3]};
    }
    &:hover {
      box-shadow: 0 4px 12px 1px #00000025;
    }
  }
  @media screen and (min-width: ${BREAKPOINTS.MD}) {
    &:not(:last-of-type) {
      margin-right: ${SPACING[5]};
    }
  }
`
const CardTitle = styled.h5`
  color: #343e56;
  font-family: "Poppins", sans-serif;
  ${FONTSIZE[6]}
  font-weight: ${WEIGHTS.REGULAR};
  letter-spacing: 0.06em;
  margin-bottom: ${SPACING[5]};
`
const HeartContainer = styled.span`
  margin-right: ${SPACING[2]};
  display: flex;
  background: #0000ff09;
  border-radius: 50%;
  padding: ${SPACING[2]};
  cursor: pointer;
  transition: ${animationDurations.normal} ease;
  path {
    transition: ${animationDurations.fast} ease;
    fill: ${colors.heart.idle};
  }
`

const CardLikes = styled.button`
  display: inline-flex;
  width: 100%;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  border-radius: 4px;
  ${HeartContainer} {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  }

  &:hover {
    cursor: pointer;
    path {
      fill: ${({ disabled }) =>
        disabled ? colors.heart.idle : colors.heart.hover};
    }
  }
  &:active {
    ${HeartContainer} {
      transform: ${({ disabled }) => !disabled && "scale(0.9)"};
    }
  }
`

const LikesCounter = styled.span`
  color: #0e1b39;
  font-size: 18px;
  letter-spacing: 0.06em;
`

const Skills = styled.section`
  background: ${colors.main.background.light};
`

const MaxWidthContainer = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
  padding: 0 ${SPACING[4]};
  padding-top: ${SPACING[7]};
`

export const SectionTitle = styled.h2`
    ${headerShared};
    ${FONTSIZE[6]}
    font-weight:${WEIGHTS.REGULAR};
    color: ${({ color }) => (color ? color : "#252E41")};
    margin-bottom:${SPACING[5]};
`

const LIKES_KEY = "__AVL_LIKES__"
