import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Paragraph = styled.p`
  grid-column: 2 / span 1;
`

// const MaskBannerContainer = styled.div`
//   grid-row: 1 / span 1;
//   grid-column: 2 / span 1;
//   z-index: 2;
//   padding: 2rem 3rem;
//   width: 50%;
//   height: 75%;
//   align-self: center;
//   background-color: rgba(255, 255, 255, 0.85);
// `

const MaskHeader = styled.h1`
  grid-column: 2/ span 1;
  grid-row: 1/ span 1;
  z-index: 5;
  font-size: 3rem;
  align-self: center;
  text-align: center;
  color: white;
`

const Overlay = styled.div`
  grid-area: banner;
  z-index: 4;
  position: relative;
  transition: background-color 1s ease;
  :hover {
    transition: background-color 1s ease;
    background-color: rgba(0,0,0,0.5);
  }


`

const IndexPage = ({data}) => (
  <React.Fragment>
    <Overlay/>
    <Img outerWrapperClassName="grid-banner" style={{ gridColumn: "1/-1" }} sizes={data.background.sizes} />
      <MaskHeader>
        Your Landscaping Dreams Start Here.
      </MaskHeader>
    <Paragraph>Zion Landscaping</Paragraph>
    <Link to="/services/">Go to page 2</Link>
  </React.Fragment>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: {regex: "/zion-banner.jpg/"}) {
      sizes(maxWidth: 1280) {
        ... GatsbyImageSharpSizes
      }
    }
  }
`