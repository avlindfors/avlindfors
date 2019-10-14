import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Avatar from "../../../assets/images/undraw-avatar.inline.svg"
import { maxWidthContainer, headerShared } from "../../../styles/theme"
import { FONTSIZE, SPACING, WEIGHTS } from "../../../styles/variables"

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
            <LanguageList>
              <LanguageItem>
                <TableText>Swedish</TableText>
                <TableText>Fluent</TableText>
              </LanguageItem>
              <LanguageItem>
                <TableText>English</TableText>
                <TableText>Fluent</TableText>
              </LanguageItem>
              <LanguageItem>
                <TableText>Japanese</TableText>
                <TableText>Conversational</TableText>
              </LanguageItem>
            </LanguageList>
          </LanguageSummary>
        </TopSummary>
        <section>
          <SummaryDataTitle>Toolkit</SummaryDataTitle>
          <ToolkitList>
            <ToolkitListItem>
              <TableText>Web</TableText>
              <SkillList>
                <SkillItem>
                  <TableText>React</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>JavaScript</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>HTML</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>CSS</TableText>
                </SkillItem>
              </SkillList>
            </ToolkitListItem>
            <ToolkitListItem>
              <TableText>Backend</TableText>
              <SkillList>
                <SkillItem>
                  <TableText>Express</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>Node</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>Python</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>Java</TableText>
                </SkillItem>
              </SkillList>
            </ToolkitListItem>
            <ToolkitListItem>
              <TableText>Storage</TableText>
              <SkillList>
                <SkillItem>
                  <TableText>MongoDB</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>Firebase</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>SQL</TableText>
                </SkillItem>
              </SkillList>
            </ToolkitListItem>
            <ToolkitListItem>
              <TableText>Other</TableText>
              <SkillList>
                <SkillItem>
                  <TableText>Docker</TableText>
                </SkillItem>
                <SkillItem>
                  <TableText>GitHub</TableText>
                </SkillItem>
              </SkillList>
            </ToolkitListItem>
          </ToolkitList>
        </section>
      </SummaryContainer>
    </ResumeHeader>
  )
}

const sectionUnderline = css`
  &:not(:last-of-type) {
    margin-bottom: ${SPACING[4]};
  }
  padding-bottom: ${SPACING[4]};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: #444551;
    opacity: 0.2;
  }
`
const SkillList = styled.ul`
  list-style-type: none;
`
const SkillItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: ${SPACING[3]};
  }
`

const ToolkitListItem = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 120px 1fr;
  ${sectionUnderline};
`
const ToolkitList = styled.ul`
  display: flex;
  flex-direction: column;
`
const LanguageList = styled.ul`
  list-style-type: none;
  margin-bottom:${SPACING[4]};
`
const LanguageItem = styled.li`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: repeat(3, auto);
  ${sectionUnderline};
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
  padding: ${SPACING[4]};
`

const AvatarImage = styled(Avatar)`
  width: 70px;
  height: 70px;
`
const AvatarContainer = styled.div`
  margin-bottom: ${SPACING[3]};
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
  margin-bottom: 4px;
`
const SummaryProfession = styled.p`
  ${titleText};
  ${FONTSIZE[2]};
  text-transform: uppercase;
  color: #d1d5f8;
  font-weight: 300;
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
