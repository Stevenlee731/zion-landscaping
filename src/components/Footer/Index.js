import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ContactUs from './Contact'
import About from './About'
import Services from './Services'
import Hours from './Hours'
import DevDetails from './DevDetails'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1280px 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: 
    ". footer-items ."
    ". footer-dev-details .";
  grid-area: footer;
  background-color: #252931;
  color: white;
  justify-content: space-between;
  padding-top: 1rem;

`

  // @media (max-width: 768px) {
  //   grid-template-columns: auto;
  //   grid-template-rows: auto;
  //   grid-template-areas: 
  //     "footer-about"
  //     "footer-services"
  //     "footer-hours"
  //     "footer-contact"
  //     "footer-dev-details";

  //   justify-items: center;
  //   padding: 1rem;
  // }

  // @media (min-width: 768px) and (max-width: 1024px) {
  //   grid-template-columns: 1fr 1fr;
  //   grid-template-rows: auto;
  //   grid-template-areas: 
  //     "footer-about footer-about" 
  //     "footer-services footer-hours" 
  //     "footer-contact footer-contact"
  //     "footer-dev-details footer-dev-details";
  //     padding: 2rem;
  // }

  // @media (min-width: 1024px) and (max-width: 1280px) {
  //   grid-template-columns: 1fr 1fr 1fr;
  //   grid-template-rows: auto;
  //   grid-template-areas: 
  //     "footer-about footer-services footer-hours" 
  //     "footer-contact footer-contact footer-contact"
  //     "footer-dev-details footer-dev-details footer-dev-details";
  //   padding: 2rem;
  //   justify-items: center;
  // }

  const FooterItems = styled.div`
    display: grid;
    grid-area: footer-items;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
      "footer-about footer-services footer-contact";
    grid-template-rows: minmax(300px, 350px);
  `

const Footer = () => (
  <StyledFooter>
    <FooterItems>
      <About/>
      <Services/>
      {/* <Hours/> */}
      <ContactUs/>
    </FooterItems>
    <DevDetails/>
  </StyledFooter>
)

export default Footer
