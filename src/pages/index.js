import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

const IndexPage = ({data}) => (
  <React.Fragment>
    <Img sizes={data.background.sizes} />
    <p>Zion Landscaping</p>
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