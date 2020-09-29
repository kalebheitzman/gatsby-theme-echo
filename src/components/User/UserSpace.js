// import libs
import React, { useContext } from 'react'

// import css
import { css } from '@emotion/core'

// import components
import Context from '../Context/Context'
import SocialLogin from './SocialLogin'
import User from './User'

export default ({ branding }) => {

  const context = useContext(Context)

  return(
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
      `}
    >

      {!context.user && (
        <SocialLogin branding={branding} />
      )}
      {context.user && (
        <User branding={branding} />
      )}
    </div>
  )
}