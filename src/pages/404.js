/** @jsx jsx */
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { maxWidthContainer } from "../styles/theme"
import { SPACING, colors, FONTSIZE, BREAKPOINTS } from "../styles/variables"

import GhostImage from "../assets/images/undraw-ghost.inline.svg"
import { LinkButton } from "../components/Button"
export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <NotFound>
        <TextSection>
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundSubtitle>Page not found</NotFoundSubtitle>
          <NotFoundCopy>
            Whoops! It seems like you’re looking for a page that doesn’t exist.<br></br>
            Please make sure you are entering the correct address.

          </NotFoundCopy>
          <Align>
            <LinkButton to="/">GO HOME</LinkButton>
          </Align>
        </TextSection>
        <ImageSection>
          <Spooky role="img" aria-labelledby="spooky-image"/>
          <SpookyText>Maybe it's been taken.</SpookyText>
        </ImageSection>
      </NotFound>
    </Layout>
  )
}

const Align = styled.div`
  display: flex;
`

const NotFound = styled.div`
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
  padding: ${SPACING[2]} ${SPACING[4]};
  padding-bottom: ${SPACING[7]};

  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    padding-bottom: ${SPACING[8]};
    padding-top: ${SPACING[6]};
  }
`

const headerShared = css`
  color: ${colors.accent.main};
  font-weight: 400;
  letter-spacing: 0.1em;
`

const NotFoundTitle = styled.h1`
  ${headerShared};
  ${FONTSIZE[10]}
`
const NotFoundSubtitle = styled.h2`
  ${headerShared}
  ${FONTSIZE[6]};
  margin-bottom: ${SPACING[2]};
`

const NotFoundCopy = styled.p`
  margin-bottom: ${SPACING[5]};
  line-height:150%;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    ${FONTSIZE[4]};
  }
`

const Spooky = styled(GhostImage)`
  width: 60%;
  margin-bottom: ${SPACING[4]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    width: 100%;
    margin-bottom: ${SPACING[4]};
  }
`
const SpookyText = styled.small`
  font-weight: 300;
  font-style: italic;
`

const TextSection = styled.section`
  margin-bottom: ${SPACING[6]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-basis: 50%;
    padding-right: ${SPACING[6]};
    margin-bottom: 0;
  }
`
const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-basis: 50%;
  }
`
