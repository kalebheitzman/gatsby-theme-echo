// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Layout from '../Site/Layout'
import Footer from '../Site/Footer'
import Navigation from './Navigation'
import FeaturedImage from './FeaturedImage'
import EventSummary from './EventSummary'
import Pagination from '../Site/Pagination'

export default ({ data: { site, page, events }, pageContext }) => {

  const {
    frontmatter: {
      pageBranding,
      pageGraphics: {
        headerLogo,
        featuredImage
      }
    }
  } = page

  const {
    numPages,
    currentPage
  } = pageContext

  return(
    <Layout
      title={`All Events`}
      branding={pageBranding}
      headerLogo={headerLogo}
    >

      <Navigation branding={pageBranding} />
      
      <div
        css={css`
          grid-area: wrapper;

          display: grid;
          grid-template-areas: 
            "featured-image"
            "events";

          height: 82h;
          overflow-y: scroll;
  
          ${mq('tablet_side')} {
            grid-template-areas: 
              "events featured-image";
            grid-template-columns: 1fr 1fr;
            height: calc(100vh - 100px);
            overflow: hidden;  
          }
        `}
      >
        <main
          css={css`
            grid-area: events;
            overflow-y: scroll;
          `}
        >
          <div
            css={css`
              display: grid;
              padding: 2rem;
              grid-gap: 2rem;
            
              ${mq('tablet_up')} {
                grid-template-columns: 1fr 1fr;
              }  
            `}
          >
            {events.edges.map(event => (
              <EventSummary 
                key={event.node.id} 
                event={event.node}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            numPages= {numPages}
            branding={pageBranding}
            base="/events"
          />
          <Footer />
        </main>

        <FeaturedImage featuredImage={featuredImage} />
      </div>

    </Layout>
  )
}