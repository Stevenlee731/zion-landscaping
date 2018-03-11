import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const FullWidthImg = styled(Img)`
  grid-column: 1/-1 !important;

`

const IndexPage = ({data}) => (
  <React.Fragment>
    <FullWidthImg sizes={data.background.sizes} />
    <p>Now go build something great.</p>
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
    background: imageSharp(id: {regex: "/zion-test.jpg/"}) {
      sizes(maxWidth: 1280) {
        ... GatsbyImageSharpSizes
      }
    }
  }
`