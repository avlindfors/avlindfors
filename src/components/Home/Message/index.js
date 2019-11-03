import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import axios from "axios"
import { StaticQuery, graphql } from "gatsby"

import { PrimaryButton } from "../../Button"
import EnvelopeImage from "../../../assets/images/undraw-envelope.inline.svg"
import { maxWidthContainer } from "../../../styles/theme"
import {
  borderRadius,
  animationDurations,
  SPACING,
  BREAKPOINTS,
  FONTSIZE,
} from "../../../styles/variables"
import { SectionTitle } from "../Skills"
import { ErrorText, Spinner, SuccessText } from "../../NewsLetter"
import { PageBodyText } from "../Hero"

const query = graphql`
  query {
    overviewJson {
      email
    }
  }
`
export default () => (
  <StaticQuery query={query} render={data => <Message data={data} />} />
)
function Message({ data: { overviewJson } }) {
  const { email: myEmail } = overviewJson

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const setField = {
    name: setName,
    email: setEmail,
    message: setMessage,
  }

  function getFirstFieldError(field) {
    if (error == null || typeof error === "string") return
    const errors = error.filter(item => {
      const { param } = item
      return param === field
    })
    return errors[0]
  }

  const handleChange = event => {
    const { name, value } = event.target
    setField[name](value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (loading) {
      return
    }
    setLoading(true)
    setData(null)
    setError(null)
    axios({
      method: "post",
      url: `${process.env.GATSBY_API_ENDPOINT}/message`,
      data: {
        name,
        email,
        message,
      },
      auth: {
        username: `${process.env.GATSBY_AVL_USERNAME}`,
        password: `${process.env.GATSBY_AVL_PASSWORD}`,
      },
      timeout: 10000,
    })
      .then(data => {
        setData("Message successfully sent!")
        setError(null)
      })
      .catch(error => {
        let errorMsg = "Error sending message, please try again."
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          errorMsg = error.response.data.errors
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          errorMsg =
            "There was an unknown error sending the message, please try again."
        } else {
          // Something happened in setting up the request that triggered an Error
          errorMsg =
            "There was an unknown error sending the message, please try again."
        }
        setError(errorMsg)
        setData(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const canSubmit = email.length > 0 && name.length > 0 && message.length > 0
  return (
    <MessageWrapper id="contact">
      <MessageSection>
        <MessageForm name="message" onSubmit={handleSubmit}>
          <ExtraMarginSectionTitle color="#F3F3F3">
            Send me a message
          </ExtraMarginSectionTitle>
          <MessageBodyText>
            Fill in the form below and an email will be sent to{" "}
            <a
              href={`mailto:${myEmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {myEmail}
            </a>
            . I will get back to you as soon as I can.
          </MessageBodyText>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Alexander Lindfors"
              maxLength={100}
            />
            {getFirstFieldError("name") && (
              <LightErrorText>{getFirstFieldError("name").msg}</LightErrorText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="alex@avlindfors.com"
              maxLength={100}
            />
            {getFirstFieldError("email") && (
              <LightErrorText>{getFirstFieldError("email").msg}</LightErrorText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormInput
              textArea
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              maxLength={500}
              placeholder="I’m a software engineer with a passion for Front End Development and Design work. Use this form to contact me."
            />
            {getFirstFieldError("message") && (
              <LightErrorText>
                {getFirstFieldError("message").msg}
              </LightErrorText>
            )}
            {error && typeof error === "string" && (
              <LightErrorText>{error}</LightErrorText>
            )}
            {data && <LightSuccessText>{data}</LightSuccessText>}
          </FormControl>
          <FormSubmit>
            {loading && <SpinnerWithMargin trackColor={"#323B4E"} />}
            <PrimaryButton type="submit" disabled={!canSubmit || loading}>
              SEND
            </PrimaryButton>
          </FormSubmit>
        </MessageForm>
        <ImageWrapper>
          <MessageImage role="img" aria-labelledby="message-image" />
        </ImageWrapper>
      </MessageSection>
    </MessageWrapper>
  )
}

const MessageBodyText = styled(PageBodyText)`
  margin-bottom: ${SPACING[3]};
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const LightErrorText = styled(ErrorText)`
  color: #e47a7a;
`

const LightSuccessText = styled(SuccessText)`
  color: #7ce47a;
`

const MessageSection = styled.section`
  ${maxWidthContainer};
  padding: ${SPACING[7]} ${SPACING[4]};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    flex-direction: row;
    padding-bottom: ${SPACING[8]};
  }
`

const MessageWrapper = styled.section`
  background: linear-gradient(to bottom right, #080a1c, #161932);
`

const MessageImage = styled(EnvelopeImage)`
  width: 100%;
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    box-sizing: border-box;
    flex-basis: 50%;
    padding: 0;
    padding-left: ${SPACING[7]};
  }
`

const MessageForm = styled.form`
  width: 100%;
  max-width: 500px;
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    width: auto;
    flex-grow: 1;
  }
`

const FormControl = styled.div`
  margin-bottom: ${SPACING[5]};
`
const FormLabel = styled.label`
  font-family: "Poppins", sans-serif;
  display: block;
  ${FONTSIZE[4]};

  letter-spacing: 0.06em;
  color: #f3f3f3;
  margin-bottom: ${SPACING[2]};
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
  height: 170px;
  resize: none;
`
const FormInput = ({ textArea, ...props }) => {
  if (textArea) {
    return <TextArea {...props} autoCorrect="false" spellCheck="false" />
  } else {
    return <Input {...props} autoCorrect="false" spellCheck="false" />
  }
}

const SpinnerWithMargin = styled(Spinner)`
  margin-right: ${SPACING[3]};
`
const FormSubmit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${SPACING[6]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    margin-bottom: 0;
  }
`

const ExtraMarginSectionTitle = styled(SectionTitle)`
  margin-bottom: ${SPACING[3]};
`
