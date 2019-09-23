import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { borderRadius, animationDurations } from "../../styles/variables"

export default () => {
  const handleSubmit = event => {
    event.preventDefault()
    console.log("Subscribing")
  }
  return (
    <FullWidthWrapper>
      <FloatingForm name="newsletter" onSubmit={handleSubmit}>
        <FormTitle>Let's keep in touch</FormTitle>
        <FormSubtitle>
          Let me know who you are and you will be the first to know when I write
          something new
        </FormSubtitle>
        <InputGroup>
          <FormLabel htmlFor="newsletter-name">Name</FormLabel>
          <FormInput
            type="text"
            id="newsletter-name"
            placeholder="Name McNameson"
          ></FormInput>
        </InputGroup>
        <InputGroup>
          <FormLabel htmlFor="newsletter-email">Email</FormLabel>
          <FormInput
            type="text"
            id="newsletter-email"
            placeholder="name@example.com"
          ></FormInput>
        </InputGroup>

        <SubscribeButton type="submit">SUBSCRIBE</SubscribeButton>
      </FloatingForm>
    </FullWidthWrapper>
  )
}

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
  position: relative;
  bottom: 40px;
  border-radius: ${borderRadius};
  box-shadow: 0 4px 12px #00000020, 0 6px 20px #0000000f;
  padding: 48px 60px;
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
  margin-bottom: 12px;
`
const InputGroup = styled.div`
  margin-bottom: 24px;
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
    border: 1px solid #ABBCE6;
  }
  &::placeholder {
    color: #6a6a6a;
    font-style: italic;
  }
`
const SubscribeButton = styled.button`
  ${formText};
  border: none;
  outline: none;
  cursor: pointer;
  background: #1b2fe2;
  color: #ffffff;
  border-radius: ${borderRadius};
  padding: 18px 32px;

  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  float: right;
  transition: ${animationDurations.fast} ease;
  &:hover {
    background: #1326d2;
  }
`
