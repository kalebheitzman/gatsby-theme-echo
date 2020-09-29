// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import BackgroundImage from 'gatsby-background-image'

export default ({ featuredImage }) => {

  return (
    <BackgroundImage
      fluid={featuredImage.childImageSharp.fluid}
      css={css`
        grid-area: featured-image;
        width: 100%;
        height: 35vh;

        ${mq('tablet_up')} {
          height: 100%;
        }
      `}
    >

    </BackgroundImage>
  )
}