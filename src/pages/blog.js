import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { maxWidthContainer } from "../styles/theme"
import {
  PageTitle,
  PageSubtitle,
  PageBodyText,
  TextSection,
  ImageSection,
} from "../components/Home/Hero"

import ConstructionImage from "../assets/images/undraw-construction.inline.svg"
import { SPACING, BREAKPOINTS } from "../styles/variables"
import { LinkButton, SecondaryLinkButton } from "../components/Button"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogContainer>
      <TextSection>
        <ExtraMarginPageTitle>The blog isn't ready... yet</ExtraMarginPageTitle>
        <PageSubtitle>
          This is where I will put blog posts. At some point.{" "}
        </PageSubtitle>
        <PageBodyText>
          In the meantime you can check out my resume or sign up for
          notifications. That way you will be the first to know when this page is
          ready!
        </PageBodyText>
        <RightAligned>
          <SecondaryLinkButtonWithMargin to="/resume">
            SEE RESUME
          </SecondaryLinkButtonWithMargin>
          <LinkButton to="/">GO HOME</LinkButton>
        </RightAligned>
      </TextSection>
      <ImageSectionWithFixedMargin>
        <StyledConstructionImage
          role="img"
          aria-labelledby="construction-image"
        />
      </ImageSectionWithFixedMargin>
    </BlogContainer>
  </Layout>
)

const SecondaryLinkButtonWithMargin = styled(SecondaryLinkButton)`
  margin-right: ${SPACING[3]};
`
const ExtraMarginPageTitle = styled(PageTitle)`
  margin-bottom: ${SPACING[2]};
`

const ImageSectionWithFixedMargin = styled(ImageSection)`
  margin-left: 0;
`
const BlogContainer = styled.section`
  ${maxWidthContainer};
  padding: ${SPACING[4]};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    margin-bottom: ${SPACING[7]};
    padding: ${SPACING[7]} ${SPACING[4]};
  }
`
const StyledConstructionImage = styled(ConstructionImage)`
  width: 100%;
`

const RightAligned = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: ${SPACING[5]};
    margin-bottom: 0;
  }
`
export default Blog
