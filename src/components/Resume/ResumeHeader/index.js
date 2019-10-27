import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Avatar from "../../../assets/images/undraw-avatar.inline.svg"
import { maxWidthContainer, headerShared } from "../../../styles/theme"
import {
  FONTSIZE,
  SPACING,
  WEIGHTS,
  colors,
  BREAKPOINTS,
} from "../../../styles/variables"

import File from "../../../assets/icons/file.inline.svg"
import ResumePDF from "../../../assets/files/resume.pdf"

export default () => {
  return (
    <ResumeHeader>
      <AvatarContainer>
        <AvatarImage role="img" aria-labelledby="avatar-image" />
        <DownloadLink
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadText>Download as PDF</DownloadText>
          <FileIcon />
        </DownloadLink>
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
            React, JavaScript, HTML, CSS, Node, Express, Python, Erlang, Java
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
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: ${SPACING[7]};
  }
`

const TableText = styled.p`
  ${FONTSIZE[3]};
  color: #ffffff;
  letter-spacing: 0.1em;
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    ${FONTSIZE[4]};
  }
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
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    flex-direction: row;
  }
`

const AvatarImage = styled(Avatar)`
  width: 100px;
  height: 100px;
  transition: 250ms ease;
  margin-right: ${SPACING[5]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    width: 150px;
    height: 150px;
    float: right;
    margin-right: 0;
    margin-bottom: ${SPACING[5]};
  }
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    width: 200px;
    height: 200px;
  }
`

const DownloadLink = styled.a`
  ${FONTSIZE[3]};
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  padding: 16px;
  transition: 250ms ease;
  border-radius: 4px;
  color: ${colors.text.main};
  text-decoration: none;
  background: #decbf705;
  white-space: nowrap;
  &:hover {
    background: #decbf70d;
  }
`
const FileIcon = styled(File)`
  width: 16px;
  path {
    color: ${colors.text};
  }
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    width: 14px;
  }
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
  }
`

const DownloadText = styled.span`
  margin-right: ${SPACING[3]};
`
const AvatarContainer = styled.div`
  margin-bottom: ${SPACING[4]};
  transition: 250ms ease;
  display: flex;
  align-items: center;
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 0;
    margin-right: ${SPACING[5]};
    flex-basis: 150px;
  }
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-basis: 250px;
    margin-right: ${SPACING[7]};
    align-items: center;
  }
`
const SummaryContainer = styled.div`
  flex-grow: 1;
`
const SummaryTitleContainer = styled.header``
const SummaryTitle = styled.h1`
  ${headerShared};
  color: #6c63ff;
  line-height: 1;
  margin-bottom: ${SPACING[2]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    ${FONTSIZE[9]};
  }
`
const SummaryProfession = styled.p`
  ${titleText};
  ${FONTSIZE[2]};
  text-transform: uppercase;
  color: #d1d5f8;
  font-weight: 300;
  margin-bottom: ${SPACING[3]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    ${FONTSIZE[4]};
  }
`
const B = styled.b`
  font-weight: 400;
  font-family: inherit;
`

const SummaryData = styled.span``
const SummaryDataTitle = styled.h5`
  ${FONTSIZE[5]};
  ${titleText};
  font-weight: ${WEIGHTS.REGULAR};
  color: #d8dbf5;
  margin-bottom: ${SPACING[1]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    ${FONTSIZE[6]};
  }
`
