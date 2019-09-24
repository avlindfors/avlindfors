import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import ResumeHeader from "../components/Resume/ResumeHeader"

import SEO from "../components/seo"
import { maxWidthContainer } from "../styles/theme"

export default () => (
  <Layout>
    <SEO title="Resume" />
    <ResumeHeader />
    <ResumeWrapper>
      <ResumeSection>
        <ResumeSectionTitleContainer>
          <ResumeSectionTitle>Work</ResumeSectionTitle>
        </ResumeSectionTitleContainer>
        <ResumeSectionList>
          <ResumeSectionItem>
            <ResumeSectionItemTitle>TableCheck Inc</ResumeSectionItemTitle>
            <Row>
              <ResumeSectionRole>Junior Software Engineer</ResumeSectionRole>
              &bull;
              <ResumeSectionDuration>06/2019 - present</ResumeSectionDuration>
            </Row>
            <ResumeSectionLocation>Tokyo, Japan</ResumeSectionLocation>
            <ResumeSectionBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              reiciendis dolores illo nisi accusamus quam omnis labore quibusdam
              dicta. Animi aut perspiciatis expedita facere, vitae asperiores
              illo molestias magnam! Ratione!
            </ResumeSectionBody>
          </ResumeSectionItem>
          <ResumeSectionItem>
            <ResumeSectionItemTitle>Erlang Solutions</ResumeSectionItemTitle>
            <Row>
              <ResumeSectionRole>Erlang Developer</ResumeSectionRole>
              &bull;
              <ResumeSectionDuration>10/2017 - 04/2018</ResumeSectionDuration>
            </Row>
            <ResumeSectionLocation>Stockholm, Sweden</ResumeSectionLocation>
            <ResumeSectionBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              reiciendis dolores illo nisi accusamus quam omnis labore quibusdam
              dicta. Animi aut perspiciatis expedita facere, vitae asperiores
              illo molestias magnam! Ratione!
            </ResumeSectionBody>
          </ResumeSectionItem>
          <ResumeSectionItem>
            <ResumeSectionItemTitle>Ericsson</ResumeSectionItemTitle>
            <Row>
              <ResumeSectionRole>Software Engineering Intern</ResumeSectionRole>
              &bull;
              <ResumeSectionDuration>06/2017 - 10/2017</ResumeSectionDuration>
            </Row>
            <ResumeSectionLocation>Stockholm, Sweden</ResumeSectionLocation>
            <ResumeSectionBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              reiciendis dolores illo nisi accusamus quam omnis labore quibusdam
              dicta. Animi aut perspiciatis expedita facere, vitae asperiores
              illo molestias magnam! Ratione!
            </ResumeSectionBody>
          </ResumeSectionItem>
        </ResumeSectionList>
      </ResumeSection>
      <ResumeSection>
        <ResumeSectionTitleContainer>
          <ResumeSectionTitle>Education</ResumeSectionTitle>
        </ResumeSectionTitleContainer>
        <ResumeSectionList>
          <ResumeSectionItem>
            <ResumeSectionItemTitle>
              KTH, Royal Institute of Technology
            </ResumeSectionItemTitle>
            <Row>
              <ResumeSectionRole>BSc in Computer Science</ResumeSectionRole>
              &bull;
              <ResumeSectionDuration>09/2014 - 06/2017</ResumeSectionDuration>
            </Row>
            <ResumeSectionLocation>Stockholm, Sweden</ResumeSectionLocation>
            <ResumeSectionBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              reiciendis dolores illo nisi accusamus quam omnis labore quibusdam
              dicta. Animi aut perspiciatis expedita facere, vitae asperiores
              illo molestias magnam! Ratione!
            </ResumeSectionBody>
          </ResumeSectionItem>
          <ResumeSectionItem>
            <ResumeSectionItemTitle>
              Academy of Language Arts
            </ResumeSectionItemTitle>
            <Row>
              <ResumeSectionRole>Japanese School</ResumeSectionRole>
              &bull;
              <ResumeSectionDuration>10/2018 - 07/2019</ResumeSectionDuration>
            </Row>
            <ResumeSectionLocation>Tokyo, Japan</ResumeSectionLocation>
            <ResumeSectionBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              reiciendis dolores illo nisi accusamus quam omnis labore quibusdam
              dicta. Animi aut perspiciatis expedita facere, vitae asperiores
              illo molestias magnam! Ratione!
            </ResumeSectionBody>
          </ResumeSectionItem>
        </ResumeSectionList>
      </ResumeSection>
    </ResumeWrapper>
  </Layout>
)

const ResumeWrapper = styled.section`
  margin-bottom: 100px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`
const ResumeSectionInfo = styled.p`
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #c1c3d9;
`
const ResumeSectionRole = styled(ResumeSectionInfo)`
  font-weight: 600;
  margin-right: 16px;
`
const ResumeSectionDuration = styled(ResumeSectionInfo)`
  margin-left: 16px;
`
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
  margin-bottom: 4px;
  font-weight: 600;
`
const ResumeSection = styled.section`
  ${maxWidthContainer};
  display: flex;
  flex-direction: row;
  &:not(:last-of-type) {
    margin-bottom: 60px;
  }
`

const ResumeSectionTitleContainer = styled.div`
  flex-basis: 225px;
  max-width: 225px;
  display: flex;
  justify-content: flex-end;
  margin-right: 55px;
`
const ResumeSectionTitle = styled.h2`
  color: #6c63ff;
  letter-spacing: 0.1em;
  font-size: 40px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 1;
`
