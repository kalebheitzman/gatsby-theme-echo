// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

export default ({ eventQA, eventBranding }) => {

    return (
      <ul
        css={css`
          margin: 0;
          padding: 0;
          list-item-style: none;

          li {
            padding: 1rem 2rem;
            border-bottom: 1px solid #efefef;
            margin-bottom: 0;

            ${mq('tablet_up')} {
              padding: 1rem;
            }

            h3 {
              margin: 0;
            }
          }
        `}
      >
        {eventQA.map((qa, i) => <QA 
          qa={qa} 
          eventBranding={eventBranding}
          key={i} 
        />)}
      </ul>
    )
}

const QA = ({ qa, eventBranding }) => {

  return(
    <li>
      <div
        css={css`
          display: grid;
          grid-template-columns: 40px 1fr;
          grid-gap: 1rem;
        `}
      >
        <span
          css={css`
            background: ${eventBranding.primaryBackground};
            color: ${eventBranding.primaryTextColor};
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
          `}
        >
          Q
        </span>
        <div dangerouslySetInnerHTML={{ __html: qa.question }} />
      </div>
      <div
        css={css`
          display: grid;
          grid-template-columns: 40px 1fr;
          grid-gap: 1rem;
          margin-top: 0.25rem;
        `}
      >
        <span
          css={css`
            background: #efefef;
            color: #aaa;
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
          `}
        >
          A
        </span>
        <div 
          dangerouslySetInnerHTML={{ __html: qa.answer }} 
          css={css`
            font-style: italic;
            color: #888;
          `}
        />
      </div>
    </li>
  )
}