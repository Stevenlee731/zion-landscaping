import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {
  Paragraph, Overlay, Divider, HeaderOne, MaskHeader, HeaderTwo, ServiceContainer
} from './../utils/ArticleComponents.js'

const Contact =  props => (
  <React.Fragment>
    <Overlay/>
    <Img outerWrapperClassName="grid-banner" style={{ maxHeight: "400px", gridColumn: "1/-1" }} sizes={props.data.background.sizes} />
    <HeaderTwo>Contact Us</HeaderTwo>
    <Paragraph>
    Fabio vel iudice vincam, sunt in culpa qui officia. Mercedem aut nummos unde unde extricat, amaras. Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
    </Paragraph>
  </React.Fragment>
)

export default Contact

export const query = graphql`
  query ContactQuery {
    background: imageSharp(id: {regex: "/contact-banner.jpg/"}) {
      sizes(maxWidth: 1280) {
        ... GatsbyImageSharpSizes
      }
    }
  }
`