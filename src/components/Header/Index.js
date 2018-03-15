import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../images/ZionLandscaping.svg'

const StyledHeader = styled.header`
  display: grid;
  grid-area: header;
  width: 100vw;

  grid-template-columns: 1fr 1280px 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
    ". top-bar ."
    ". bottom-bar .";
  

  @media (max-width: 768px) {

  }

  @media (min-width: 768px) and (max-width: 1024px) {

  }

  @media (min-width: 1024px) and (max-width: 1280px) {

  }
`

//Top Bar
const StyledTopBar = styled.div`
    display: grid;
    padding: 0.5rem 0;
    color: #7aba1e;
    border-bottom: 1px solid grey;
    grid-template-columns: 1fr repeat(3, auto);
    grid-area: top-bar;
    grid-template-areas: 
        "email social quote phone";
`

const StyledEmail = styled.div`
    grid-area: email;
`

const RightNav = styled.div`
  margin: 0 1rem;
`

const StyledSocial = styled(RightNav)`
    grid-area: social;
`

const StyledQuote = styled(RightNav)`
    grid-area: quote;
`

const StyledPhone = styled(RightNav)`
    grid-area: phone;
`

//Bottom Bar
const StyledBottomBar = styled.div`
    grid-area: bottom-bar;
    display: grid;
    grid-template-columns: 1fr repeat(4, auto);
    grid-template-areas: 
        "logo home about services portfolio contact";

    padding: 1rem 1rem 0 1rem;
`


const BottomButton = styled(Link)`
    padding: 0 2rem 1rem 2rem;
    text-decoration: none;
    color: black;

    :hover {
        color: #7aba1e;
        border-bottom: 4px solid #7aba1e;
    }
`

const StyledLogo = styled.div`
    grid-area: logo;
`

const StyledHome = styled(BottomButton)`
    grid-area: home;
`

const StyledAbout = styled(BottomButton)`
    grid-area: about;
`

const StyledServices = styled(BottomButton)`
    grid-area: services;
`

const StyledPortfolio = styled(BottomButton)`
    grid-area: portfolio;
`

const StyledContact = styled(BottomButton)`
    grid-area: contact;
`

const Logo = styled.img`
    max-width: 75px;
`

const TopBar = () => (
    <StyledTopBar>
        <StyledEmail>
            zionlandscaping@gmail.com
        </StyledEmail>
        <StyledSocial>
            Facebook
        </StyledSocial>
        <StyledQuote>
            Get a Quote
        </StyledQuote>
        <StyledPhone>
            562.522.3897
        </StyledPhone>
    </StyledTopBar>
)

const BottomBar = () => (
    <StyledBottomBar>
        <StyledLogo to="/">
            <Logo src={logo} alt="Zion landscaping"/>
        </StyledLogo>
        <StyledHome to="/">
            Home
        </StyledHome>
        <StyledAbout to="/about">
            About
        </StyledAbout>
        <StyledServices to="/services">
            Services
        </StyledServices>
        <StyledPortfolio to="/portfolio">
            Portfolio
        </StyledPortfolio>
        <StyledContact to="/contact">
            Contact
        </StyledContact> 
    </StyledBottomBar>
)


const Header = () => (
  <StyledHeader>
    <TopBar/>
    <BottomBar/>
  </StyledHeader>
)

export default Header
