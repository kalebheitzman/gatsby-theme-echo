// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {

  return (
    <div
      css={css`
        display: none;

        a {
          font-size: 1.25rem;
          height: 3rem;
          width: 3rem;
          border-radius: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #eee;
          color: #ccc;
          font-weight: bold;
          text-decoration: none;
          transition: all 185ms ease-out;
          &:hover {
            background: #e9e7ea;
            color: #bbb;
          }
        }

        ${mq('tablet_up')} {
          display: flex;
          justify-content: center;
          align-items: center;  
        }
      `}
    >
      <a
        href="https://github.com/kalebheitzman/echo"
        target="_blank"
        rel="noreferrer"
      >E</a>
    </div>
  )
}