import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Avatar from "../../../assets/images/undraw-avatar.inline.svg"
import { maxWidthContainer } from "../../../styles/theme"

export default () => {
  return (
    <ResumeHeader>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <SummaryContainer>
        <SummaryTitleContainer>
          <SummaryTitle>Alexander Lindfors</SummaryTitle>
          <SummaryProfession>
            Profession: <B>Software Engineer</B>
          </SummaryProfession>
        </SummaryTitleContainer>
        <TopSummary>
          <TopLeftSummary>
            <SummaryData>
              <SummaryDataTitle>Degree</SummaryDataTitle>
              <SummaryDataBody>BSc in Computer Science</SummaryDataBody>
            </SummaryData>
            <SummaryData>
              <SummaryDataTitle>Location</SummaryDataTitle>
              <SummaryDataBody>Tokyo, Japan</SummaryDataBody>
            </SummaryData>
            <SummaryData>
              <SummaryDataTitle>Email</SummaryDataTitle>
              <SummaryDataBody>alex@avlindfors.com</SummaryDataBody>
            </SummaryData>
          </TopLeftSummary>
          <TopRightSummary>
            <SummaryDataTitle>Languages</SummaryDataTitle>
            <LanguageList>
              <LanguageItem>
                <LanguageName>Swedish</LanguageName>
                <DimmedTableText>Fluent</DimmedTableText>
              </LanguageItem>
              <LanguageItem>
                <LanguageName>English</LanguageName>
                <DimmedTableText>Fluent</DimmedTableText>
              </LanguageItem>
              <LanguageItem>
                <LanguageName>Japanese</LanguageName>
                <DimmedTableText>Conversational</DimmedTableText>
              </LanguageItem>
            </LanguageList>
          </TopRightSummary>
        </TopSummary>
        <BottomSummary>
          <SummaryDataTitle>Toolkit</SummaryDataTitle>
          <InlineLists>
            <ToolkitList>
              <UpperCaseSummaryDataBody>Web</UpperCaseSummaryDataBody>
              <ToolkitItem>
                <DimmedTableText>React</DimmedTableText>
              </ToolkitItem>
              <ToolkitItem>
                <DimmedTableText>JavaScript</DimmedTableText>
              </ToolkitItem>
              <ToolkitItem>
                <DimmedTableText>HTML</DimmedTableText>
              </ToolkitItem>
              <ToolkitItem>
                <DimmedTableText>CSS</DimmedTableText>
              </ToolkitItem>
            </ToolkitList>
            <ToolkitList>
              <UpperCaseSummaryDataBody>General</UpperCaseSummaryDataBody>
              <ToolkitItem>
                <DimmedTableText>Node</DimmedTableText>
              </ToolkitItem>
              <ToolkitItem>
                <DimmedTableText>Python</DimmedTableText>
              </ToolkitItem>
              <ToolkitItem>
                <DimmedTableText>Java</DimmedTableText>
              </ToolkitItem>
            </ToolkitList>
            <ToolkitList>
              <UpperCaseSummaryDataBody>Storage</UpperCaseSummaryDataBody>
              <ToolkitItem>
                <DimmedTableText>MongoDB</DimmedTableText>
              </ToolkitItem>
              <ToolkitItem>
                <DimmedTableText>Firebase</DimmedTableText>
              </ToolkitItem>
              <ToolkitItem>
                <DimmedTableText>SQL</DimmedTableText>
              </ToolkitItem>
            </ToolkitList>
            <ToolkitList>
              <UpperCaseSummaryDataBody>Other</UpperCaseSummaryDataBody>
              <ToolkitItem>
                <DimmedTableText>Docker</DimmedTableText>
              </ToolkitItem>
              <ToolkitItem>
                <DimmedTableText>GitHub</DimmedTableText>
              </ToolkitItem>
            </ToolkitList>
          </InlineLists>
        </BottomSummary>
      </SummaryContainer>
    </ResumeHeader>
  )
}

const BottomSummary = styled.section``

const ToolkitList = styled.ul`
  list-style-type: none;
  &:not(:last-of-type) {
    margin-right: 85px;
  }
`
const ToolkitItem = styled.li`
  margin-bottom: 12px;
`
const InlineLists = styled.div`
  display: flex;
  margin-top:12px;
`
const LanguageList = styled.ul`
  list-style-type: none;
`
const LanguageItem = styled.li`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(3, auto);
  margin-bottom: 18px;
`

const tableText = css`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0.1em;
`
const LanguageName = styled.span`
  ${tableText};
  color: #b8bde3;
  font-weight:400;
  text-transform: uppercase;
`
const DimmedTableText = styled.span`
  color: #d8dbf5;
  ${tableText}
`
const TopSummary = styled.div`
  display: flex;
  flex-direction: row;
`
const TopLeftSummary = styled.div`
  margin-right: 100px;
`
const TopRightSummary = styled.div``
const titleText = css`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.1em;
`
const ResumeHeader = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 60px;
`
const AvatarContainer = styled.div`
  flex-basis: 225px;
  display: flex;
  justify-content: flex-end;
  margin-right: 55px;
`
const SummaryContainer = styled.div`
  flex-grow: 1;
`

const SummaryTitleContainer = styled.header``
const SummaryTitle = styled.h1`
  ${titleText};
  font-size: 56px;
  color: #6c63ff;
  line-height: 1;
  margin-bottom: 4px;
`
const SummaryProfession = styled.p`
  ${titleText};
  text-transform: uppercase;
  color: #d1d5f8;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 24px;
`
const B = styled.b`
  font-weight: 400;
  font-family: inherit;
`

const SummaryData = styled.span``
const SummaryDataTitle = styled.h5`
  ${titleText};
  font-size: 24px;
  font-weight: 400;
  color: #d1d5f8;
  margin-bottom: 6px;
`
const SummaryDataBody = styled.p`
  font-size: 20px;
  letter-spacing: 0.1em;
  color: #d8dbf5;
  font-weight: 300;
  margin-bottom: 20px;
`

const UpperCaseSummaryDataBody = styled(SummaryDataBody)`
  text-transform: uppercase;
  color: #b8bde3;
  font-weight:400;
  margin-bottom:12px
`
