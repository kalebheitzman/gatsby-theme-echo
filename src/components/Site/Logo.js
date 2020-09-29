// import libs
import React, { useContext } from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Context from '../Context/Context'
import Img from 'gatsby-image'

export default ({ headerLogo, title }) => {

  const context = useContext(Context)

  const navigateHome = () => {
    context.navigate('lobby')
  }

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        
        h1 {
          display: none;
        }

        button {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          cursor: pointer;
          background: none;
        }

        img {
          margin: 0;
        }

      `}
    >
      <button
        onClick={navigateHome}
      >
        <Img 
          fixed={headerLogo.childImageSharp.fixed} 
          fadeIn={false}
          css={css`
            max-height: 30px !important;

            ${mq('tablet_up')} {
              max-height: 40px !important;
            }
          `}
          imgStyle={{ 
            objectFit: 'contain', 
            objectPosition: 'left center', 
          }}
          loading="eager"
        />
      </button>
      <h1>{title}</h1>
    </div>
  )
}