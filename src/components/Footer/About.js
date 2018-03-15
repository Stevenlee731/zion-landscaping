import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Summary = styled.div`
    grid-area: summary;
    margin: 1rem 0;
`

const ContactHeader = styled.h2`
    margin: 0;
    padding-bottom: 1rem;
    font-size: 2rem;
    grid-column: 1/-1;
    border-bottom: 1px solid grey;
`

const StyledAbout = styled.div`
    grid-area: footer-about;
    display: grid;
    grid-template-areas:
        "logo logo"
        "summary summary"
        ". contact";
    grid-template-rows: repeat(2, auto) 40px;
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    margin: 0 1rem;

    @media (max-width: 1024px) {
        grid-template-areas:
        "logo logo"
        "summary summary"
        "contact contact";
      }
`

const About = () => (
    <StyledAbout>
        <ContactHeader>
            About Zion
        </ContactHeader>
        <Summary>
        Since 1989, Zion Landscaping Inc. has been a licensed landscape contractor that delivers effective and successful landscape design and construction. For decades, we have been serving our clients in developing long-term projects and design throughout Orange County and Los Angeles.
        </Summary>
    </StyledAbout>
)

export default About
