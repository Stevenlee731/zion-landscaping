import React, {Component} from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import {
  Paragraph, Overlay, Divider, HeaderOne, MaskHeader, HeaderTwo, ServiceContainer
} from './../utils/ArticleComponents.js';

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gallery: []
    }
  }

  render() {
    return (
    <React.Fragment>
      <Overlay/>
      <Img outerWrapperClassName="grid-banner" style={{ gridColumn: "1/-1" }} sizes={this.props.data.background.sizes} />
        <MaskHeader>
          ZION LANDSCAPING
        </MaskHeader>
      <HeaderOne position="full" alignment="center" >For All Your Landscaping Needs</HeaderOne>
      <Paragraph alignment="center" >Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Quid securi etiam tamquam eu fugiat nulla pariatur. Praeterea iter est quasdam res quas ex communi.</Paragraph>
      <Paragraph alignment="center" >Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Curabitur est gravida et libero vitae dictum. Inmensae subtilitatis, obscuris et malesuada fames. Cras mattis iudicium purus sit amet fermentum.</Paragraph>
      <Divider half primary/>
      <ServiceContainer position="full"/>
    </React.Fragment>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
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