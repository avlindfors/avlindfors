/* @jsx jsx */
import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
// eslint-disable-next-line
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

import Logo from "../../assets/images/avl-logo.inline.svg"
import {
  colors,
  animationDurations,
  SPACING,
  FONTSIZE,
  WEIGHTS,
} from "../../styles/variables"
import { maxWidthContainer } from "../../styles/theme"

export default () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    function handleScroll() {
      // Force close menu on scroll
      setMenuIsOpen(false)
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const headerHeightScrollOffset = 500
  const offsetIsExceeded = scrollY >= headerHeightScrollOffset
  return (
    <Header
      menuIsOpen={menuIsOpen}
      onClick={() => {
        if (menuIsOpen) {
          setMenuIsOpen(false)
        }
      }}
    >
      <LogoAndIconWrapper>
        <SiteLogoAndLink />
        <HamburgerWrapper
          role="checkbox"
          name="menu"
          ariaChecked={menuIsOpen}
          onClick={() => {
            setMenuIsOpen(!menuIsOpen)
          }}
        >
          <HamburgerIcon menuIsOpen={menuIsOpen} />
        </HamburgerWrapper>
      </LogoAndIconWrapper>
      <NavContainer menuIsOpen={menuIsOpen}>
        <NavList>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </NavList>
      </NavContainer>
    </Header>
  )
}

const LogoAndIconWrapper = styled.div`
  background: ${colors.main.background.dark};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SPACING[5]} ${SPACING[4]};
`
const HamburgerWrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  padding: ${SPACING[1]};
  box-sizing: border-box;
  border-radius: 4px;
  transition: ${animationDurations.fast} ease;
`
const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background: ${({ menuIsOpen }) => (menuIsOpen ? "transparent" : "#a9b6d1")};

  position: relative;
  border-radius: 1px;
  transition: ${animationDurations.fast} ease;
  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background: #a9b6d1;
    border-radius: 1px;
    transition: ${animationDurations.fast} ease;
  }
  &::after {
    bottom: ${({ menuIsOpen }) => (menuIsOpen ? "0" : "10px")};
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? "rotate3d(0, 0, 1, 45deg);" : "none"};
  }
  &::before {
    top: ${({ menuIsOpen }) => (menuIsOpen ? "0" : "10px")};
    transform: ${({ menuIsOpen }) =>
      menuIsOpen ? "rotate3d(0, 0, 1, -45deg);" : "none"};
  }
`

const SiteLogoAndLink = () => (
  <Link to="/">
    <Logo />
  </Link>
)

const Header = styled.header`
  z-index: 999;
  ${maxWidthContainer};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const NavContainer = styled.nav`
  background: ${colors.main.background.dark};
  position: absolute;
  top: 100%;
  transition: ${animationDurations.normal} ease-in-out;
  left: 0;
  right: 0;
  height:100vh;
  opacity: ${({ menuIsOpen }) => (menuIsOpen ? 1 : 0)};
  pointer-events: ${({ menuIsOpen }) => (menuIsOpen ? "all" : "none")};
  z-index: -1;
  padding-top:${SPACING[4]};
`
const NavList = styled.ul`
  list-style-type: none;
  margin: ${SPACING[5]} ${SPACING[4]};
  margin-top: 0;
`

const LinkItem = styled.li`
  margin-bottom: ${SPACING[4]};
`

const StyledNavLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  color: ${colors.text.nav.idle};
  text-decoration: none;
  letter-spacing: 0.1em;
  font-weight: ${WEIGHTS.REGULAR};
  ${FONTSIZE[7]};
  transition: ${animationDurations.fast} ease;
  text-transform: uppercase;
  display: block;
  border-radius: 4px;
  &:hover {
    color: ${colors.text.nav.hover};
  }
`

const NavLink = props => (
  <LinkItem>
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
  </LinkItem>
)
