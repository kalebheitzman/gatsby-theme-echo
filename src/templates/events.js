// import libs
import React from 'react'
import { graphql } from 'gatsby'

// import components
import Events from '../components/Events/Events'

export default (props) => <Events pageContext={props.pageContext} {...props} />

export const eventsQuery = graphql`
query EventsQuery($skip: Int!, $limit: Int!) {
  site {
    siteMetadata {
      title
    }
  }
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
  events:allMarkdownRemark(
    filter: {frontmatter: {template: {eq: "event"}}}  
    limit: $limit
    skip: $skip
  ) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          eventInformation {
            startTime
            endTime
          }
          eventGraphics {
            lobbyImage {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          eventBranding {
            bodyBackground
            defaultTextColor
            htmlBackground
            primaryBackground
            primaryBackgroundHover
            primaryTextColor
          }
        }
      }
    }
  }
}
`