/** @jsx jsx  */
import React from "react"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"

import Layout from "../components/Layout"
import ResumeHeader from "../components/Resume/ResumeHeader"

import SEO from "../components/seo"
import { maxWidthContainer } from "../styles/theme"
import { SPACING, BREAKPOINTS } from "../styles/variables"

import WorkImage from "../assets/images/undraw-programming.inline.svg"
import EducationImage from "../assets/images/undraw-upload.inline.svg"
export default () => (
  <Layout>
    <SEO title="Resume" />
    <ResumeWrapper>
      <ResumeHeader />
      <ResumeSection>
        <ImageWrapper>
          <ManAtComputerImage aria-labelledby="work-image" role="img" />
        </ImageWrapper>
        <ResumeContent>
          <ResumeSectionTitleContainer>
            <ResumeSectionTitle>Experience</ResumeSectionTitle>
          </ResumeSectionTitleContainer>
          <ResumeSectionList>
            <ResumeSectionItem>
              <ResumeSectionItemTitle>TableCheck Inc</ResumeSectionItemTitle>
              <ResumeSectionRole>Junior Software Engineer</ResumeSectionRole>
              <ResumeSectionDuration>06/2019 - present</ResumeSectionDuration>
              <ResumeSectionLocation>Tokyo, Japan</ResumeSectionLocation>
              <ResumeSectionBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis reiciendis dolores illo nisi accusamus quam omnis
                labore quibusdam dicta. Animi aut perspiciatis expedita facere,
                vitae asperiores illo molestias magnam! Ratione!
              </ResumeSectionBody>
            </ResumeSectionItem>
            <ResumeSectionItem>
              <ResumeSectionItemTitle>Erlang Solutions</ResumeSectionItemTitle>
              <ResumeSectionRole>Erlang Developer</ResumeSectionRole>
              <ResumeSectionDuration>10/2017 - 04/2018</ResumeSectionDuration>
              <ResumeSectionLocation>Stockholm, Sweden</ResumeSectionLocation>
              <ResumeSectionBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis reiciendis dolores illo nisi accusamus quam omnis
                labore quibusdam dicta. Animi aut perspiciatis expedita facere,
                vitae asperiores illo molestias magnam! Ratione!
              </ResumeSectionBody>
            </ResumeSectionItem>
            <ResumeSectionItem>
              <ResumeSectionItemTitle>Ericsson</ResumeSectionItemTitle>
              <ResumeSectionRole>Software Engineering Intern</ResumeSectionRole>
              <ResumeSectionDuration>06/2017 - 10/2017</ResumeSectionDuration>
              <ResumeSectionLocation>Stockholm, Sweden</ResumeSectionLocation>
              <ResumeSectionBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis reiciendis dolores illo nisi accusamus quam omnis
                labore quibusdam dicta. Animi aut perspiciatis expedita facere,
                vitae asperiores illo molestias magnam! Ratione!
              </ResumeSectionBody>
            </ResumeSectionItem>
          </ResumeSectionList>
        </ResumeContent>
      </ResumeSection>
      <ResumeSection>
        <ImageWrapper>
          <FolderImage aria-labelledby="education-image" role="img" />
        </ImageWrapper>
        <ResumeContent>
          <ResumeSectionTitleContainer>
            <ResumeSectionTitle>Education</ResumeSectionTitle>
          </ResumeSectionTitleContainer>
          <ResumeSectionList>
            <ResumeSectionItem>
              <ResumeSectionItemTitle>
                KTH, Royal Institute of Technology
              </ResumeSectionItemTitle>
              <ResumeSectionRole>BSc in Computer Science</ResumeSectionRole>
              <ResumeSectionDuration>09/2014 - 06/2017</ResumeSectionDuration>
              <ResumeSectionLocation>Stockholm, Sweden</ResumeSectionLocation>
              <ResumeSectionBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis reiciendis dolores illo nisi accusamus quam omnis
                labore quibusdam dicta. Animi aut perspiciatis expedita facere,
                vitae asperiores illo molestias magnam! Ratione!
              </ResumeSectionBody>
            </ResumeSectionItem>
            <ResumeSectionItem>
              <ResumeSectionItemTitle>
                Academy of Language Arts
              </ResumeSectionItemTitle>
              <ResumeSectionRole>Japanese Language School</ResumeSectionRole>
              <ResumeSectionDuration>10/2018 - 07/2019</ResumeSectionDuration>
              <ResumeSectionLocation>Tokyo, Japan</ResumeSectionLocation>
              <ResumeSectionBody>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis reiciendis dolores illo nisi accusamus quam omnis
                labore quibusdam dicta. Animi aut perspiciatis expedita facere,
                vitae asperiores illo molestias magnam! Ratione!
              </ResumeSectionBody>
            </ResumeSectionItem>
          </ResumeSectionList>
        </ResumeContent>
      </ResumeSection>
    </ResumeWrapper>
  </Layout>
)

const ResumeWrapper = styled.section`
  padding: ${SPACING[6]} ${SPACING[4]};
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    padding-bottom: ${SPACING[6]};
  }
  @media screen and (min-width: ${BREAKPOINTS.MD}) {
    padding-top: ${SPACING[7]};
    padding-bottom: ${SPACING[7]};
  }
`

const ResumeContent = styled.div`
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    display: flex;
  }
`
const ResumeSectionInfo = styled.p`
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #c1c3d9;
  margin-bottom: ${SPACING[1]};
`
const ResumeSectionRole = styled(ResumeSectionInfo)`
  font-weight: 600;
  margin-right: 16px;
`
const ResumeSectionDuration = styled(ResumeSectionInfo)``
const ResumeSectionLocation = styled(ResumeSectionInfo)`
  margin-bottom: 12px;
`

const ResumeSectionBody = styled.p`
  font-weight: 300;
  font-style: italic;
  line-height: 1.6em;
  color: #daddf7;
  font-size: 18px;
  letter-spacing: 0.06em;
  max-width: 600px;
`
const ResumeSectionList = styled.ul`
  list-style-type: none;
`
const ResumeSectionItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 36px;
  }
`
const ResumeSectionItemTitle = styled.h3`
  font-size: 28px;
  letter-spacing: 0.1em;
  color: #d4d3ed;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`
const ResumeSection = styled.section`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING[7]};
`

const ResumeSectionTitleContainer = styled.div`
  display: flex;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-basis: 250px;
    justify-content: flex-end;
    margin-right: ${SPACING[7]};
  }
`
const ResumeSectionTitle = styled.h2`
  color: #6c63ff;
  letter-spacing: 0.1em;
  font-size: 40px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 1;
  margin-bottom: ${SPACING[4]};
`
const ImageWrapper = styled.div`
  margin-bottom: ${SPACING[6]};
  padding: 0 ${SPACING[6]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    padding: 0;
    margin-bottom: ${SPACING[7]};
    display: grid;
    grid-template-columns: 30% 1fr;
    padding-right: ${SPACING[7]};
  }
`

const imageShared = css`
  @media screen and (min-width: ${BREAKPOINTS.XS}) {
    grid-column: 2;
    width: 100%;
    max-width: 600px;
  }
`

const ManAtComputerImage = styled(WorkImage)`
  ${imageShared};
`

const FolderImage = styled(EducationImage)`
  ${imageShared};
`
