/* @jsx jsx */
import React from "react"
import styled from "@emotion/styled"
// eslint-disable-next-line
import { jsx } from "@emotion/core"
import { Link } from "gatsby"

import Logo from "../../assets/images/avl-logo.inline.svg"
import { colors, animationDurations } from "../../styles/variables"

export default () => (
  <Header>
    <SiteLogoAndLink />
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </Nav>
  </Header>
)

const SiteLogoAndLink = () => (
  <Link to="/">
    <Logo />
  </Link>
)

const Header = styled.header`
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const NavList = styled.ul`
  display: flex;
  list-style-type: none;
`
const Nav = ({ children }) => (
  <nav>
    <NavList>{children}</NavList>
  </nav>
)

const RightMarginItem = styled.li`
  :not(:last-of-type) {
    margin-right: 42px;
  }
`;

const StyledNavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  color: ${colors.text.nav.idle};
  text-decoration: none;
  letter-spacing: 0.1em;
  font-weight: 500;
  font-size: 18px;
  transition: ${animationDurations.fast} ease-in;
  text-transform:uppercase;
  :hover {
    color: ${colors.text.nav.hover};
  }
`

const NavLink = props => (
  <RightMarginItem>
    <StyledNavLink
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent && colors.text.nav.active,
          },
        }
      }}
    />
  </RightMarginItem>
)
