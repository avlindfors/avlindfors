import React from "react"
import styled from "@emotion/styled"

import { H1, maxWidthContainer, H2, H5, H6, BodyText } from "../../../styles/theme"
import { colors, animationDurations } from "../../../styles/variables"

// Icons
import HeartIcon from "../../../assets/icons/heart.inline.svg"
import HeartOutlineIcon from "../../../assets/icons/heart-outline.inline.svg"

// Card Images
import FrontendImage from "../../../assets/images/undraw-frontend.inline.svg"
import BackendImage from "../../../assets/images/undraw-backend.inline.svg"
import DesignImage from "../../../assets/images/undraw-design.inline.svg"
import Quote from "../Quote"

export default () => {
  return (
    <Skills>
      <MaxWidthContainer>
        <CenteredH2 color={colors.text.header.dark}>
          What can I do for you?{" "}
        </CenteredH2>
        <Cards>
          <Card>
            <CardTitle>Front end</CardTitle>
            <CardImage>
              <FrontendImage />
            </CardImage>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes>
              <HeartContainer>
                <HeartOutlineIcon />
              </HeartContainer>
              <LikesCounter>{0}</LikesCounter>
            </CardLikes>
          </Card>
          <Card>
            <CardTitle>Back end</CardTitle>
            <CardImage>
              <BackendImage />
            </CardImage>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes>
              <HeartContainer>
                <HeartOutlineIcon />
              </HeartContainer>
              <LikesCounter>{0}</LikesCounter>
            </CardLikes>
          </Card>
          <Card>
            <CardTitle>Design</CardTitle>
            <CardImage>
              <DesignImage />
            </CardImage>
            <BodyText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nihil.
            </BodyText>
            <CardLikes>
              <HeartContainer>
                <HeartOutlineIcon />
              </HeartContainer>
              <LikesCounter>{0}</LikesCounter>
            </CardLikes>
          </Card>
        </Cards>
      </MaxWidthContainer>
      <Quote />
      <MaxWidthContainer>
      <UnderTheHoodSection>
        <UnderTheHoodTitle>Under the hood: Likes</UnderTheHoodTitle>
        <UnderTheHoodCopy>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          officia soluta illum doloremque neque perferendis accusantium libero
          sit adipisci deserunt, suscipit sunt natus numquam tempore ipsum
          facilis quisquam ducimus nesciunt!
          <br></br><br></br>
          sit adipisci deserunt, suscipit sunt natus numquam tempore ipsum
          facilis quisquam ducimus nesciunt!
        </UnderTheHoodCopy>
      </UnderTheHoodSection>
      </MaxWidthContainer>
    </Skills>
  )
}

const Cards = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 110px;
`
const Card = styled.div`
  max-width: 300px;
`
const CardTitle = styled.h5`
  color: #20293e;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.06em;
  margin-bottom: 36px;
`
const CardImage = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 24px;
`

const CardLikes = styled.div`
  display: inline-flex;
  cursor: pointer;
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
  position: relative;
  z-index: 1;
`

const MaxWidthContainer = styled.div`
  ${maxWidthContainer};
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  padding-bottom:40px;
`

const CenteredH2 = styled(H2)`
  text-align: center;
  margin-bottom: 90px;
  font-weight:400;
`

const UnderTheHoodSection = styled.section`
  padding-bottom:0;
  z-index:2;
`
const UnderTheHoodTitle = styled(H6)`
  color:#0A1121;
  margin-bottom:18px;
  font-size:20px;
`
const UnderTheHoodCopy = styled(BodyText)`
  max-width:600px;
  z-index:99;
  margin-bottom:0;
`