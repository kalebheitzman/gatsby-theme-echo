// import libs
import React from 'react'
import { graphql } from 'gatsby'

// import components
import Event from '../components/Event/Event'

// default component
export default (props) => <Event {...props} />

// page content query
export const eventQuery = graphql`
  query ($id: String!) {
    event: markdownRemark(id: {eq: $id}) {
      ...Event
    }
  }
  fragment Event on MarkdownRemark {
    frontmatter {
      title
      eventInformation {
        livestreamUrl
        startTime
        endTime
      }
      eventSchedule {
        title
        startTime
        description
      }
      eventGraphics {
        headerLogo {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        lobbyImage {
          childImageSharp {
            fluid(maxWidth: 960) {
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
      eventRooms {
        slug
        title
        description
      }
      eventQA {
        answer
        question
      }
      eventSettings {
        allEvents
        mainStage
        mainStageLabel
        rooms
        roomsLabel
        qa
        qaLabel
      }
    }
    html
  }
`