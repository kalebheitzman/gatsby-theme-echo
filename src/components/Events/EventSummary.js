// import libs
import React from 'react'
import slugify from '../../utils/slugify'

// import css
import { css } from '@emotion/core'

// import components
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ event }) => {

  const {
    frontmatter: {
      title,
      eventInformation: {
        startTime,
      },
      eventGraphics: {
        lobbyImage
      },
      eventBranding
    }
  } = event

  return(
    <Link
      to={`/event/${slugify(title)}`}
      css={css`
        background: #f7f7f7;
        border-radius: 4px;
        text-decoration: none;
        display: block;
      `}
    >

      <div
        css={css`
          position: relative;

          &:hover {

            h3 {
              opacity: 1;
            }

            img {
              filter: grayscale(0%);
            }
          }
        `}
      >
        <Img 
          fluid={{ ...lobbyImage.childImageSharp.fluid, aspectRatio: 16 / 9 }} 
          css={css`
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
            filter: grayscale(10%);
            transition: all 85ms ease-out;
          `}
        />
        <h3
          css={css`
            margin: 0;
            padding: 0;
            font-size: 1rem;
            position: absolute;
            bottom: 0;
            width: 100%;
            z-index: 5;
            background: ${eventBranding.primaryBackground};
            color: ${eventBranding.primaryTextColor};
            padding: 0.5rem 1rem;
            opacity: 0.9;
            transition: all 85ms ease-out;
          `}
        >
          {title}
        </h3>
      </div>


      <div
        css={css`
          color: #333;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
          border-bottom: 1px solid #eee;
          font-style: italic;
        `}
      >
        {startTime}
      </div>

    </Link>
  )
}