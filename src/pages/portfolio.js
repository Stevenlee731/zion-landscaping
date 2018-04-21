import React, {Component, Fragment} from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {
    Paragraph, Overlay, Divider, HeaderOne, MaskHeader, HeaderTwo, ServiceContainer
  } from './../utils/ArticleComponents.js'
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { GridGallery } from './../components/GridGallery.js'

class Portfolio extends Component {
  
  state = {
    gallery: []
  }

  render() {
    return (
      <Fragment>
        <Overlay/>
        <Img outerWrapperClassName="grid-banner" style={{ maxHeight: "400px", gridColumn: "1/-1" }} sizes={this.props.data.background.sizes} />
        <HeaderTwo alignment="center" position="center">Porfolio</HeaderTwo>
          <GridGallery/>
      </Fragment>
    )
  }
}

export default Portfolio

export const query = graphql`
  query PortfolioQuery {
    background: imageSharp(id: {regex: "/portfolio-banner.jpg/"}) {
      sizes(maxWidth: 1280) {
        ... GatsbyImageSharpSizes
      }
    }
  }
`