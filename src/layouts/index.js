import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header/Index'
import Footer from '../components/Footer/Index'
import './index.css'

const StyledTemplate = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 250px 1fr 1fr 1fr 250px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header header header"
    "content content content content content"
    "footer footer footer footer footer";
`

const StyledContent = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 2fr 12fr 2fr;
  grid-template-rows: min-content;
  grid-template-areas:
    "banner banner banner";
`

const TemplateWrapper = ({ data, children }) => (
  <StyledTemplate>
    <Helmet
      title="Zion Landscaping"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header data={data} />
    <StyledContent>
      {children()}
    </StyledContent>
    <Footer />
  </StyledTemplate>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

// export const query = graphql`
//   query SiteMeta {
//     site {
//       siteMetadata {
//         title
//         desc
//       }
//     }
//     zionLogo: imageSharp(id: {regex: "/Zion.jpg/"}) {
//       sizes(maxWidth: 200) {
//         ... GatsbyImageSharpSizes
//       }
//     }
//   }
// `