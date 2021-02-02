/** @jsx jsx  */
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"

import Layout from "../components/Layout"
import ResumeHeader from "../components/Resume/ResumeHeader"

import SEO from "../components/seo"
import { maxWidthContainer } from "../styles/theme"
import { SPACING, BREAKPOINTS, FONTSIZE, colors } from "../styles/variables"

import { graphql } from "gatsby"

export const query = graphql`
  query ResumeQuery {
    resumeJson {
      education {
        title
        role
        location
        description
        duration {
          start
          end
        }
      }
      experience {
        title
        role
        location
        description
        duration {
          start
          end
        }
      }
    }
  }
`

export default function Resume({ data }) {
  const {
    resumeJson: { education, experience },
  } = data
  return (
    <Layout>
      <SEO title="Resume" />
      <ResumeWrapper>
        <ResumeHeader />
        <ResumeSection>
          <ResumeContent>
            <ResumeSectionTitleContainer>
              <ResumeSectionTitle>Experience</ResumeSectionTitle>
            </ResumeSectionTitleContainer>
            <ResumeSectionList>
              {experience.map((data, index) => {
                const {
                  title,
                  role,
                  location,
                  description,
                  duration: { start, end },
                } = data
                return (
                  <ResumeSectionItem key={index}>
                    <ResumeSectionItemTitle>{title}</ResumeSectionItemTitle>
                    <ResumeSectionRole>{role}</ResumeSectionRole>
                    <ResumeSectionInfo>
                      {start} - {end}
                    </ResumeSectionInfo>
                    <ResumeSectionInfo>{location}</ResumeSectionInfo>
                    <ResumeSectionBody>{description}</ResumeSectionBody>
                  </ResumeSectionItem>
                )
              })}
            </ResumeSectionList>
          </ResumeContent>
        </ResumeSection>
        <ResumeSection>
          <ResumeContent>
            <ResumeSectionTitleContainer>
              <ResumeSectionTitle>Education</ResumeSectionTitle>
            </ResumeSectionTitleContainer>
            <ResumeSectionList>
              {education.map((data, index) => {
                const {
                  title,
                  role,
                  location,
                  description,
                  duration: { start, end },
                } = data
                return (
                  <ResumeSectionItem key={index}>
                    <ResumeSectionItemTitle>{title}</ResumeSectionItemTitle>
                    <ResumeSectionRole>{role}</ResumeSectionRole>
                    <ResumeSectionInfo>
                      {start} - {end}
                    </ResumeSectionInfo>
                    <ResumeSectionInfo>{location}</ResumeSectionInfo>
                    <ResumeSectionBody>{description}</ResumeSectionBody>
                  </ResumeSectionItem>
                )
              })}
            </ResumeSectionList>
          </ResumeContent>
        </ResumeSection>
      </ResumeWrapper>
    </Layout>
  )
}

const ResumeWrapper = styled.section`
  padding: ${SPACING[6]} ${SPACING[4]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    padding-bottom: ${SPACING[6]};
  }
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    padding-bottom: ${SPACING[7]};
  }
  @media screen and (min-width: ${BREAKPOINTS.MD}) {
    padding-top: ${SPACING[7]};
    padding-bottom: ${SPACING[8]};
  }
`

const ResumeContent = styled.div`
  margin-bottom: ${SPACING[4]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    display: flex;
  }
`
const ResumeSectionInfo = styled.p`
  ${FONTSIZE[3]};
  letter-spacing: 0.1em;
  color: #c1c3d9;
  margin-bottom: ${SPACING[2]};
  font-style: italic;
  &:nth-last-of-type(2) {
    margin-bottom: ${SPACING[3]};
  }
`
const ResumeSectionRole = styled(ResumeSectionInfo)`
  font-weight: 500;
  margin-right: 16px;
`

const ResumeSectionBody = styled.p`
  line-height: 1.6em;
  color: #daddf7;
  ${FONTSIZE[4]};
  letter-spacing: 0.06em;
  max-width: 600px;
`
const ResumeSectionList = styled.ul`
  list-style-type: none;
`
const ResumeSectionItem = styled.li`
  margin-bottom: ${SPACING[5]};
`
const ResumeSectionItemTitle = styled.h3`
  font-size: 28px;
  letter-spacing: 0.1em;
  color: #d4d3ed;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: ${SPACING[1]};
`
const ResumeSection = styled.section`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
`

const ResumeSectionTitleContainer = styled.div`
  display: flex;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-basis: 250px;
    max-width: 250px;
    justify-content: flex-end;
    margin-right: ${SPACING[7]};
  }
`
const ResumeSectionTitle = styled.h2`
  color: ${colors.accent.main};
  letter-spacing: 0.1em;
  font-size: 40px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 1;
  margin-bottom: ${SPACING[4]};
`
