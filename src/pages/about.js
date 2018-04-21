import React, {Component} from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {
  Paragraph, Overlay, Divider, HeaderOne, MaskHeader, HeaderTwo, ServiceContainer
} from './../utils/ArticleComponents.js'

class About extends Component {
  constructor(props) {
    super(props)
    
  }
  



  render() {
    return (
        <React.Fragment>
          <Overlay/>
          <Img outerWrapperClassName="grid-banner" style={{ maxHeight: "400px", gridColumn: "1/-1" }} sizes={this.props.data.background.sizes} />
        <HeaderTwo>About Zion Landscaping</HeaderTwo>
        <Paragraph>
        We pride ourselves in superior workmanship, excellent customer service, and an endless commitment to detail. Our mission is to provide industry-leading customer satisfaction and quality service. To accomplish this mission, we base our company on the following principles:

We cater to our clientele's discriminating tastes by offering a wide range of exceptional products and services.
We believe strong customer communication is one of the keys to a successful project.
We maintain a highly professional staff that understands and responds to customers' needs in a friendly, personal manner.
We create a "sense of place" - an environment in which people may entertain, play or just relax.
We constantly strive to have your installation completed on time and with minimal inconvenience.
        </Paragraph>
      </React.Fragment>
    )
  }
}

export default About

export const query = graphql`
  query AboutQuery {
    background: imageSharp(id: {regex: "/about-banner.jpg/"}) {
      sizes(maxWidth: 1280) {
        ... GatsbyImageSharpSizes
      }
    }
  }
`