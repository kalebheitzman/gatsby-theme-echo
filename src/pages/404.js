import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Site/Layout'

export default ({ data }) => {

  const {
    page: {
      frontmatter: {
        title,
        pageBranding,
        pageGraphics: {
          headerLogo
        }
      }
    }
  } = data

  return(
    <Layout
      title={title}
      branding={pageBranding}
      headerLogo={headerLogo}
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>    
  )
}

export const errorQuery = graphql`
query ErrorQuery {
  page:markdownRemark(frontmatter: {template: {eq: "main-page"}}) {
    frontmatter {
      title
      pageBranding {
        bodyBackground
        defaultTextColor
        htmlBackground
        primaryBackground
        primaryBackgroundHover
        primaryTextColor
      }
      pageGraphics {
        headerLogo {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
}
`