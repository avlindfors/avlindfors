import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Avatar from "../../../assets/images/undraw-avatar.inline.svg"
import { maxWidthContainer, headerShared } from "../../../styles/theme"
import { FONTSIZE, SPACING, WEIGHTS, colors } from "../../../styles/variables"

export default () => {
  return (
    <ResumeHeader>
      <AvatarContainer>
        <AvatarImage />
      </AvatarContainer>
      <SummaryContainer>
        <SummaryTitleContainer>
          <SummaryTitle>Alexander Lindfors</SummaryTitle>
          <SummaryProfession>
            Profession: <B>Software Engineer</B>
          </SummaryProfession>
        </SummaryTitleContainer>
        <TopSummary>
          <BasicSummary>
            <SummaryData>
              <SummaryDataTitle>Degree</SummaryDataTitle>
              <MarginBottomTableText>
                BSc in Computer Science
              </MarginBottomTableText>
            </SummaryData>
            <SummaryData>
              <SummaryDataTitle>Location</SummaryDataTitle>
              <MarginBottomTableText>Tokyo, Japan</MarginBottomTableText>
            </SummaryData>
            <SummaryData>
              <SummaryDataTitle>Email</SummaryDataTitle>
              <MarginBottomTableText>alex@avlindfors.com</MarginBottomTableText>
            </SummaryData>
          </BasicSummary>
          <LanguageSummary>
            <SummaryDataTitle>Languages</SummaryDataTitle>
            <MarginBottomTableText>
              Swedish, English, Japanese
            </MarginBottomTableText>
          </LanguageSummary>
        </TopSummary>
        <section>
          <SummaryDataTitle>Toolkit</SummaryDataTitle>
          <MarginBottomTableText>
            React, JavaScript, HTML, CSS, Node, Express, Java, Python
          </MarginBottomTableText>
          <MarginBottomTableText>
            MongoDB, Firebase, SQL, Docker, GitHub, AWS
          </MarginBottomTableText>
          <AccentedMoreText>& more</AccentedMoreText>
        </section>
      </SummaryContainer>
    </ResumeHeader>
  )
}

const AccentedMoreText = styled.p`
  ${FONTSIZE[5]};
  color: ${colors.accent.main};
  letter-spacing: 0.1em;
  margin-bottom: ${SPACING[6]};
`

const TableText = styled.p`
  ${FONTSIZE[3]};
  color: #ffffff;
  letter-spacing: 0.1em;
`
const MarginBottomTableText = styled(TableText)`
  margin-bottom: ${SPACING[2]};
`
const TopSummary = styled.div`
  display: flex;
  flex-direction: column;
`
const BasicSummary = styled.div`
  margin-right: 100px;
`
const LanguageSummary = styled.div``
const titleText = css`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1em;
`
const ResumeHeader = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
  //padding: ${SPACING[4]};
`

const AvatarImage = styled(Avatar)`
  width: 100px;
  height: 100px;
`
const AvatarContainer = styled.div`
  margin-bottom: ${SPACING[4]};
`
const SummaryContainer = styled.div`
  flex-grow: 1;
`
const SummaryTitleContainer = styled.header``
const SummaryTitle = styled.h1`
  ${headerShared};
  ${FONTSIZE[6]};
  color: #6c63ff;
  line-height: 1;
  margin-bottom: ${SPACING[2]};
`
const SummaryProfession = styled.p`
  ${titleText};
  ${FONTSIZE[2]};
  text-transform: uppercase;
  color: #d1d5f8;
  font-weight: 300;
  margin-bottom: ${SPACING[3]}
`
const B = styled.b`
  font-weight: 400;
  font-family: inherit;
`

const SummaryData = styled.span``
const SummaryDataTitle = styled.h5`
  ${titleText};
  ${FONTSIZE[5]};
  font-weight: ${WEIGHTS.REGULAR};
  color: #d8dbf5;
  margin-bottom: 6px;
`
