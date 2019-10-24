import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import axios from "axios"

import {
  borderRadius,
  animationDurations,
  SPACING,
  BREAKPOINTS,
  colors,
  FONTSIZE,
} from "../../styles/variables"
import { PrimaryButton } from "../Button"

export default () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const handleChange = event => {
    const { value } = event.target
    setEmail(value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setIsLoading(true)

    axios({
      method: "post",
      url: "www.nonexistenserver.com/newendpoint",
      data: {
        email,
      },
      auth: {
        username: `${process.env.AVL_USERNAME}`,
        password: `${process.env.AVL_PASSWORD}`,
      },
    })
      .then(({ data }) => {
        const { message } = data
        if (message == null) {
          setData(null)
          setError("Error subscribing, try again!")
        } else {
          setData("Successfully subscribed!")
          setError(null)
        }
      })
      .catch(err => {
        if (err.response) {
          const { msg } = err.response.data.errors[0]
          setError(msg)
        } else {
          setError("An unknown error has occured, please try again.")
        }
        setData(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <FullWidthWrapper>
      <FloatingForm name="newsletter" onSubmit={handleSubmit}>
        <FormTitle>Stay tuned</FormTitle>
        <FormSubtitle>
          Let me know how I can reach you and you will be the first to know when
          I have any updates
        </FormSubtitle>
        <InputGroup noMargin={error || data}>
          <FormLabel htmlFor="newsletter-email">Email</FormLabel>
          <FormInput
            type="text"
            id="newsletter-email"
            placeholder="name@example.com"
            value={email}
            onChange={handleChange}
            disabled={isLoading}
          />
          {error && <ErrorText>{error}</ErrorText>}
          {data && <SuccessText>{data}</SuccessText>}
        </InputGroup>
        <RightAligned>
          <LoadingAndButtonContainer>
            {isLoading && (
              <MarginRightContainer>
                <Spinner />
              </MarginRightContainer>
            )}
            <PrimaryButton
              background="#1b2fe2"
              type="submit"
              disabled={isLoading || email.length < 1}
            >
              SUBSCRIBE
            </PrimaryButton>
          </LoadingAndButtonContainer>
        </RightAligned>
      </FloatingForm>
    </FullWidthWrapper>
  )
}

const smallShared = css`
  display: block;
  ${FONTSIZE[2]};
  margin-top: ${SPACING[2]};
  letter-spacing: 0.06em;
`
export const ErrorText = styled.small`
  ${smallShared};
  color: red;
`
export const SuccessText = styled.small`
  ${smallShared};
  color: green;
`

const spin = css`
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoadingAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Spinner = styled.div`
  ${spin};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 4px solid ${({ trackColor }) => trackColor || "#00000020"};
  border-top-color: ${({ color }) => color || colors.accent.dark};
  animation: spin 700ms infinite ease-in-out;
`

const MarginRightContainer = styled.div`
  margin-right: ${SPACING[3]};
`

const RightAligned = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const FullWidthWrapper = styled.section`
  background: #f4f6fc;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FloatingForm = styled.form`
  background: #ffffff;
  width: 650px;
  border-radius: ${borderRadius};
  box-shadow: 0 4px 12px #00000020, 0 6px 20px #0000000f;
  padding: ${SPACING[7]} ${SPACING[4]};
  @media screen and (min-width: ${BREAKPOINTS.SM}) {
    padding: ${SPACING[6]};
    position: relative;
    bottom: 40px;
  }
`

const formText = css`
  font-family: "Poppins", sans-serif;
  color: #303030;
  font-weight: 400;
  letter-spacing: 0.06em;
`
const FormTitle = styled.h1`
  ${formText};
  font-size: 24px;
  margin-bottom: 8px;
`
const FormSubtitle = styled.p`
  ${formText};
  font-size: 16px;
  margin-bottom: ${SPACING[4]};
`
const InputGroup = styled.div`
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : SPACING[4])};
`
const FormLabel = styled.label`
  ${formText};
  font-size: 20px;
  display: block;
  margin-bottom: 12px;
`
const FormInput = styled.input`
  ${formText};
  font-size: 18px;
  outline: none;
  border: none;
  width: 100%;
  height: 60px;
  background: #f9f9f9;
  border: 1px solid transparent;
  font-weight: 300;
  letter-spacing: 0.08em;
  padding: 18px;
  border-radius: ${borderRadius};
  transition: ${animationDurations.fast} ease;
  &:focus {
    border: 1px solid #abbce6;
  }
  &::placeholder {
    color: #6a6a6a;
    font-style: italic;
  }
  &:disabled {
    opacity: 0.5;
  }
`
