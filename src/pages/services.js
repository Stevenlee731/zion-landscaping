import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {
  Paragraph, Overlay, Divider, HeaderOne, MaskHeader, HeaderTwo, ServiceContainer
} from './../utils/ArticleComponents.js'

const Services= props => (
  <React.Fragment>
    <Overlay/>
    <Img outerWrapperClassName="grid-banner" style={{ maxHeight: "400px", gridColumn: "1/-1" }} sizes={props.data.background.sizes} />
    <HeaderTwo>Our Services</HeaderTwo>
    <Paragraph>
    Landscaping can increase the value of your home while making your surroundings more attractive and enjoyable. Your outdoor living space is an extension of your home and an expression of you. At Zion Landscaping Inc., we’ll work together with you to create a natural outdoor environment that will suit your needs and preserve the integrity of your property. We help make your vision a reality.
    </Paragraph>

    <HeaderTwo>
      LANDSCAPE DESIGN
    </HeaderTwo>
    <Paragraph>
      Exterior spaces should be the expression of your architecture and living style. Space is considered a successful design if the interior and exterior flow with comfort. The key to designing a landscape environment is optimizing that exterior space with function, style, and class. This is accomplished with the use of unique materials that create a sense of originality in the environment.
    </Paragraph>

    <HeaderTwo>
    LANDSCAPE MAINTENANCE
    </HeaderTwo>
    <Paragraph>
    Zion Landscaping Inc. provides landscape enhancement services to upgrade, enhance and repair existing landscape and irrigation systems, installation of new landscape and irrigation systems, seasonal flower design & planting, tree management and plant healthcare.
      </Paragraph>
  </React.Fragment>
)

export default Services

export const query = graphql`
  query ServicesQuery {
    background: imageSharp(id: {regex: "/services.jpg/"}) {
      sizes(maxWidth: 1280) {
        ... GatsbyImageSharpSizes
      }
    }
  }
`