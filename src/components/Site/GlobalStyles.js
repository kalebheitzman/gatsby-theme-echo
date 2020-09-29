// import libs
import React from 'react'

// import css
import { Global, css } from '@emotion/core'

export default ({ branding }) => {

  return(
    <Global
      styles={css`
      
        html {
          background: ${branding.htmlBackground};
        }

        body {
          background: ${branding.bodyBackground};
        }
      `}
    />
  )
}