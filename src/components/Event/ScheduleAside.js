// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

export default ({ eventSchedule }) => {

    return (
      <ul
        css={css`
          margin: 0;
          padding: 0;
          list-style: none;
        `}
      >
        {eventSchedule.map(item => <ScheduleItem 
          key={item.startTime} 
          item={item} /> 
        )}
      </ul>
    )
}

const ScheduleItem = ({ item }) => {

  return(
    <li
      css={css`
				padding: 0 2rem 1rem;
				border-bottom: 1px solid #efefef;
        margin-bottom: 0;
        
        ${mq('tablet_up')} {
          padding: 0 1rem 1rem;
        }
			`}
    >
      <div
        css={css`
          margin-left: -2rem;
          margin-right: -2rem;
          margin-bottom: 0.5rem;
          padding: 0.35rem 2rem;
          background: #f7f7f7;
          color: #777;

          ${mq('tablet_up')} {
            margin-left: -1rem;
            margin-right: -1rem;  
            padding: 0.35rem 1rem;
          }
        `}
      >
        {item.startTime}
      </div>
      <p
        css={css`
          margin-bottom: 0.25rem;
        `}
      >
        {item.title}
      </p>
      <div 
        css={css`
          color: #777;
          padding-bottom: 0.5rem;
          font-style: italic;
        `} 
        dangerouslySetInnerHTML={{ __html: item.description }} 
      />
    </li>
  )
}