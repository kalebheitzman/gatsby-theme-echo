// import libs
import React, { useContext } from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Context from '../Context/Context'

export default ({ eventRooms, eventBranding }) => {

  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin: 0;
      `}
    >
      {eventRooms.map(room => <RoomLink 
        room={room} 
        key={room.slug} 
        eventBranding={eventBranding} />
      )}
    </ul>
  )
}

const RoomLink = ({ room, eventBranding }) => {

  const context = useContext(Context)

  return (
    <li 
      css={css`
        border-bottom: 1px solid #eee;
        margin-bottom: 0;
      `}	
    >
      <div 
        css={css`
          display grid;
          grid-template-columns: 40px 1fr 60px;
          grid-gap: 0.5rem;
          margin-bottom: 0;
          border-bottom: 1px solid #eee;
          padding: 1rem 2rem;

          ${mq('tablet_up')} {
            padding: 1rem;
          }
        `}	
      >
        <div
          css={css`
            background: ${eventBranding.primaryBackground};
            color: ${eventBranding.primaryTextColor};
            width: 40px;
            height: 40px;
            border-radius: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
          `}
        >
          {room.title.charAt(0)}
        </div>
        <div
          css={css`
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
          `}
        >
          {room.title}
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: flex-end;
          `}
        >
          <button 
            css={css`
              background: ${eventBranding.primaryBackground};
              color: ${eventBranding.primaryTextColor};
              padding: 0.25rem 0.35rem;
              border-radius: 4px;
              text-decoration: none;
              border: 0;
              outline: 0;
              margin: 0;
              cursor: pointer;

              &:hover {
                background: ${eventBranding.primaryBackgroundHover};
              }
            `}
            onClick={() => {
              context.setJitsi(room.slug)
              context.setMain('jitsi')
            }}
          >
            Join
          </button>
        </div>
      </div>
      <div
        css={css`
            font-style: italic;
            color: #777;
            padding: 1rem 2rem;

            ${mq('tablet_up')} {
              padding: 1rem;
            }

            p {
              margin: 0;
              padding: 0;
            }
        `}
      >
          <p>{room.description}</p>
      </div>
    </li>
  )
}