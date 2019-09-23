import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { HintLink } from "../../../styles/shared"
import PrimaryButton from "../../PrimaryButton"

import Letter from "../../../assets/images/undraw-letter.inline.svg"

import {
  H1,
  maxWidthContainer,
  H2,
  H6,
  BodyText,
  Flex,
} from "../../../styles/theme"
import {
  colors,
  borderRadius,
  animationDurations,
} from "../../../styles/variables"

export default () => {
  const handleSubmit = event => {
    event.preventDefault()
    console.log("submitting")
  }
  return (
    <>
      <BackgroundSVGBlobs />
      <Message>
        <Flex direction="row" justifyContent="space-between">
          <LetterImage />
          <MessageForm onSubmit={handleSubmit}>
            <FormTitle>Send me a message</FormTitle>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput id="name" placeholder="Alexander Lindfors"></FormInput>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                id="email"
                placeholder="alex@avlindfors.com"
              ></FormInput>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormInput
                textArea
                id="message"
                placeholder="I’m a software engineer with a passion for Front End Development and Design work. Use this form to contact me."
              ></FormInput>
            </FormControl>
            <FormSubmit>
              <PrimaryButton type="submit">SEND</PrimaryButton>
            </FormSubmit>
          </MessageForm>
        </Flex>
        <UnderTheHoodSection>
          <UnderTheHoodTitle light>
            Under the hood: Sending Messages
          </UnderTheHoodTitle>
          <UnderTheHoodCopy light>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            officia soluta illum doloremque neque perferendis accusantium libero
            sit adipisci deserunt, suscipit sunt natus numquam tempore ipsum
            facilis quisquam ducimus nesciunt!
            <br></br>
            <br></br>
            sit adipisci deserunt, suscipit sunt natus numquam tempore ipsum
            facilis quisquam ducimus nesciunt!
          </UnderTheHoodCopy>
        </UnderTheHoodSection>
      </Message>
    </>
  )
}

const BackgroundSVGBlobs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  &::after,
  &::before {
    content: "";
    position: absolute;
    z-index: -5;
    height: 1000px;
    width: 1000px;
    border-radius: 200px;
    transform: rotateZ(75deg);
  }
  &::after {
    background: ${colors.blob.green};
    opacity: 0.5;

    right: 950px;
    top: 800px;
  }

  &::before {
    background: ${colors.blob.blue};
    opacity: 0.75;
    right: -800px;
    bottom:-600px ;
  }
`
const Message = styled.section`
  ${maxWidthContainer};
  padding-top: 180px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`
const LetterImage = styled(Letter)`
  flex-basis: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const MessageForm = styled.form`
  flex-grow: 1;
  max-width: 500px;
`

const FormTitle = styled(H2)`
  color: #f3f3f3;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  margin-bottom: 24px;
`

const FormControl = styled.div`
  margin-bottom: 24px;
`
const FormLabel = styled.label`
  font-family: "Poppins", sans-serif;
  display: block;
  font-size: 20px;

  letter-spacing: 0.06em;
  color: #f3f3f3;
  margin-bottom: 12px;
`

const textSharedStyles = css`
  font-family: "Poppins", sans-serif;
  width: 100%;
  background: #141627;
  border: none;
  outline: none;
  padding: 20px;

  color: #f3f3f3;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.1em;
  transition: ${animationDurations.fast} ease;
  &::placeholder {
    color: #5f6280;
    font-style: italic;
  }
  border: 1px solid #6c6f8a;
  border-radius: ${borderRadius};
  &:focus {
    border-color: #a19bff;
  }
`
const Input = styled.input`
  ${textSharedStyles};
  height: 60px;
`

const TextArea = styled.textarea`
  ${textSharedStyles};
  height: 150px;
  resize: none;
`
const FormInput = ({ textArea, ...props }) => {
  if (textArea) {
    return <TextArea {...props} autoCorrect="false" spellCheck="false" />
  } else {
    return <Input {...props} autoCorrect="false" spellCheck="false" />
  }
}

const FormSubmit = styled.div``

const UnderTheHoodSection = styled.section`
  padding-bottom: 0;
  z-index: 2;
  margin-bottom: 120px;
  margin-top:20px;
`
const UnderTheHoodTitle = styled(H6)`
  color: ${({ light }) => (light ? `#F3F3F3` : `#0a1121`)};
  margin-bottom: 18px;
  font-size: 20px;
  letter-spacing: 0.1em;
`
const UnderTheHoodCopy = styled(BodyText)`
  max-width: 600px;
  z-index: 99;
  margin-bottom: 0;
  color: ${({ light }) => (light ? `#D7DAF4` : colors.text.dark)};
  font-weight: 300;
`
