import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"

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

const query = graphql`
  query {
    overviewJson {
      degree
      email
      languages
      location
      toolkit {
        frameworks
        languages
        other
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={query}
    render={({ overviewJson }) => <ResumeHeader overview={overviewJson} />}
  />
)

function ResumeHeader({ overview }) {
  const { degree, location, email, languages, toolkit } = overview
  const showDownloadLink = false

  return (
    <ResumeHeaderContainer>
      <AvatarContainer>
        <AvatarImage role="img" aria-labelledby="avatar-image" />
        {showDownloadLink && (
          <DownloadLink
            href="/alexander_lindfors_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadText>Download as PDF</DownloadText>
            <FileIcon />
          </DownloadLink>
        )}
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
            <span>
              <SummaryDataTitle>Degree</SummaryDataTitle>
              <MarginBottomTableText>{degree}</MarginBottomTableText>
            </span>
            <span>
              <SummaryDataTitle>Location</SummaryDataTitle>
              <MarginBottomTableText>{location}</MarginBottomTableText>
            </span>
            <span>
              <SummaryDataTitle>Email</SummaryDataTitle>
              <MarginBottomTableText>
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {email}
                </a>
              </MarginBottomTableText>
            </span>
          </BasicSummary>
          <LanguageSummary>
            <SummaryDataTitle>Spoken Languages</SummaryDataTitle>
            <MarginBottomTableText>{languages}</MarginBottomTableText>
          </LanguageSummary>
        </TopSummary>
        <section>
          <SummaryDataTitle>Main skills</SummaryDataTitle>
          <MarginBottomTableText>{toolkit.frameworks}</MarginBottomTableText>
          <MarginBottomTableText>{toolkit.languages}</MarginBottomTableText>
          <MarginBottomTableText>{toolkit.other}</MarginBottomTableText>
          <AccentedMoreText>& more</AccentedMoreText>
        </section>
      </SummaryContainer>
    </ResumeHeaderContainer>
  )
}

const titleText = css`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1em;
`

const AccentedMoreText = styled.p`
  ${FONTSIZE[5]};
  color: ${colors.accent.main};
  letter-spacing: 0.1em;
`

const TableText = styled.p`
  ${FONTSIZE[3]};
  letter-spacing: 0.1em;
  color: #ffffff;
  font-weight: ${WEIGHTS.REGULAR};
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    ${FONTSIZE[5]};
  }
`

const SummaryDataTitle = styled.h5`
  color: #999fd2;
  ${titleText};
  ${FONTSIZE[4]};
  font-weight: ${WEIGHTS.REGULAR};
  margin-bottom: ${SPACING[1]};
  letter-spacing: 0.1em;
`

const MarginBottomTableText = styled(TableText)`
  margin-bottom: ${SPACING[3]};
`
const TopSummary = styled.div`
  display: flex;
  flex-direction: column;
`
const BasicSummary = styled.div`
  margin-right: 100px;
`
const LanguageSummary = styled.div``

const ResumeHeaderContainer = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING[6]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: ${SPACING[5]};
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
