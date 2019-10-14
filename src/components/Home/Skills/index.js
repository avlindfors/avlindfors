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
    axios
      .request({
        method: "get",
        url: `api/likes`,
        auth: {
          username: `${process.env.AVL_USERNAME}`,
          password: `${process.env.AVL_PASSWORD}`,
        },
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

  function handleLike(resource) {
    return () => {
      const cookie = cookies[LIKES_KEY]
      if (cookie[resource] >= 50) {
        return
      }

      if (resourceToUpdateMap[resource]) {
        const { state, update } = resourceToUpdateMap[resource]
        update(state + 1)
        const incrementedResource = cookie[resource] + 1
        cookie[resource] = incrementedResource
        setCookie(LIKES_KEY, cookie, cookieSettings)
      }
      axios
        .request({
          method: "post",
          url: `/api/likes/${resource}`,
          auth: {
            username: `${process.env.AVL_USERNAME}`,
            password: `${process.env.AVL_PASSWORD}`,
          },
        })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  const hasVoted = {
    frontend: cookies[LIKES_KEY] ? cookies[LIKES_KEY]["frontend"] > 0 : false,
    backend: cookies[LIKES_KEY] ? cookies[LIKES_KEY]["backend"] : false,
    design: cookies[LIKES_KEY] ? cookies[LIKES_KEY]["design"] : false,
  }

  return (
    <Skills>
      <MaxWidthContainer>
        <SectionTitle color={colors.text.header.dark}>
          What can I do for you?
        </SectionTitle>
        <SectionSubTitle>
          Click on one of the cards to show some love!
        </SectionSubTitle>
        <Cards>
          <Card onClick={handleLike("frontend")}>
            <CardTitle>Front end</CardTitle>
            <IconWrapper>
              <DesktopIcon />
            </IconWrapper>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes>
              <HeartContainer>
                {hasVoted["frontend"] ? <HeartIcon /> : <HeartOutlineIcon />}
              </HeartContainer>
              <LikesCounter>{frontendLikes}</LikesCounter>
            </CardLikes>
          </Card>
          <Card onClick={handleLike("backend")}>
            <CardTitle>Back end</CardTitle>
            <IconWrapper>
              <DatabaseIcon />
            </IconWrapper>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes>
              <HeartContainer>
                {hasVoted["backend"] ? <HeartIcon /> : <HeartOutlineIcon />}
              </HeartContainer>
              <LikesCounter>{backendLikes}</LikesCounter>
            </CardLikes>
          </Card>
          <Card onClick={handleLike("design")}>
            <CardTitle>Design</CardTitle>
            <IconWrapper>
              <DesignIcon />
            </IconWrapper>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes>
              <HeartContainer>
                {hasVoted["design"] ? <HeartIcon /> : <HeartOutlineIcon />}
              </HeartContainer>
              <LikesCounter>{designLikes}</LikesCounter>
            </CardLikes>
          </Card>
        </Cards>
        <ExtraMarginSectionTitle color={colors.text.header.dark}>
          What motivates me?
        </ExtraMarginSectionTitle>
        <FeatureCards>
          <FeatureCard color="#DEDFE2" background="#3F3D56">
            <FeatureTitle>Curiosity</FeatureTitle>
            <FeatureBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt iscing elit, sed do eiusmod tempor
              incididunt
            </FeatureBody>
            <FeatureImage overhang>
              <MasterplanImage />
            </FeatureImage>
          </FeatureCard>
          <FeatureCard background="#6C63FF" color="#E2E1FB">
            <FeatureTitle>Personal growth</FeatureTitle>
            <FeatureBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt iscing elit, sed do eiusmod tempor
              incididunt
            </FeatureBody>
            <FeatureImage overhang>
              <CertificateImage />
            </FeatureImage>
          </FeatureCard>
          <FeatureCard background="#E9F0FD" color="#2A5384">
            <FeatureTitle>Teamwork</FeatureTitle>
            <FeatureBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt iscing elit, sed do eiusmod tempor
              incididunt
            </FeatureBody>
            <FeatureImage>
              <TeamImage />
            </FeatureImage>
          </FeatureCard>
        </FeatureCards>
      </MaxWidthContainer>
      <Quote />
    </Skills>
  )
}

const FeatureCards = styled.ul`
  list-style-type: none;
`
const FeatureCard = styled.li`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border-radius: 12px;
  padding: ${SPACING[6]};
  padding-bottom: 0;
  margin-bottom: ${SPACING[7]};
`
const FeatureTitle = styled.h3`
  ${headerShared};
  ${FONTSIZE[6]};
  font-weight: ${WEIGHTS.REGULAR};
  color: inherit;
  letter-spacing: 0.06em;
  margin-bottom: ${SPACING[4]};
`
const FeatureBody = styled.p`
  color: inherit;
  ${FONTSIZE[5]};
  letter-spacing: 0.06em;
  line-height: 160%;
  margin-bottom: ${SPACING[4]};
`

const withOverhang = css`
  position: relative;
  top: ${SPACING[4]};
`
const FeatureImage = styled.div`
  ${({ overhang }) => overhang && withOverhang};
`
const IconWrapper = styled.div`
  margin-bottom: ${SPACING[5]};
`
const Cards = styled.section`
  display: flex;
  flex-direction: column;
`
const Card = styled.div`
  background: white;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 4px 12px #00000019;
  margin-bottom: ${SPACING[6]};
  padding: ${SPACING[5]};
  cursor: pointer;
`
const CardTitle = styled.h5`
  color: #343e56;
  font-family: "Poppins", sans-serif;
  ${FONTSIZE[6]}
  font-weight: ${WEIGHTS.REGULAR};
  letter-spacing: 0.06em;
  margin-bottom: ${SPACING[5]};
`

const CardLikes = styled.div`
  display: inline-flex;
  &:hover {
    path {
      fill: ${colors.heart.hover};
    }
  }
`

const HeartContainer = styled.span`
  margin-right: 12px;
  display: flex;
  path {
    transition: ${animationDurations.fast} ease;
    fill: ${colors.heart.idle};
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
    margin-bottom:${SPACING[4]};
`

const ExtraMarginSectionTitle = styled(SectionTitle)`
  margin-top: ${SPACING[1]};
  margin-bottom: ${SPACING[6]};
`

const SectionSubTitle = styled.p`
  ${FONTSIZE[5]};
  color: ${colors.text.dark};
  letter-spacing: 0.06em;
  line-height: 150%;
  font-weight: ${WEIGHTS.REGULAR};
  margin-bottom: ${SPACING[6]};
`

const LIKES_KEY = "__AVL_LIKES__"
