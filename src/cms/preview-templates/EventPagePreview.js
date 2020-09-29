// import libs
import React from 'react'
import informal from 'spacetime-informal'

// import css
import './event.css'

// import components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDoorOpen,
    faVideo,
    faUsers,
    faUserFriends,
    faQuestion,
    faPoll
} from '@fortawesome/free-solid-svg-icons'

export default (props) => {

  const {
    entry, 
    widgetFor
  } = props

  // get main data
  const data = entry.getIn(['data'])

  // get data fields
  const title = data.get('title') ? data.get('title') : 'Title'
  const body = widgetFor('body')
  // const eventInformation = data.get('eventInformation')
  // const eventGraphics = data.get('eventGraphics')
  // const eventBranding = data.get('eventBranding')
  // const eventSchedule = data.get('eventSchedule')
  // const eventRooms = data.get('eventRooms')
  // const eventQA = data.get('eventQA')
  // const eventSettings = data.get('eventSettings')

  // eventGraphics
  const lobbyImage = data.getIn(['eventGraphics', 'lobbyImage'])
  const headerLogo = data.getIn(['eventGraphics', 'headerLogo'])

  // eventBranding
  const primaryBackground = data.getIn(['eventBranding', 'primaryBackground'])
  const primaryTextColor = data.getIn(['eventBranding', 'primaryTextColor'])
  const textColor = data.getIn(['eventBranding', 'defaultTextColor'])

  // eventInformation
  const timezone = data.getIn(['eventInformation', 'timezone', 'value'])
  const startTime = data.getIn(['eventInformation', 'startTime'])
  const endTime = data.getIn(['eventInformation', 'endTime'])
  const livestreamUrl = data.getIn(['eventInformation', 'livestreamUrl'])
  
  let timezoneCode = null
  if (timezone) {
    timezoneCode = informal.display(timezone).standard.abbrev
  }

  // eventSettings
  const mainStageEnabled = data.getIn(['eventSettings', 'mainStage'])
  const roomsEnabled = data.getIn(['eventSettings', 'rooms'])
  const qaEnabled = data.getIn(['eventSettings', 'qa'])
  const chatEnabled = false
  const pollsEnabled = false

  // eventSchedule
  const schedule = widgetFor('eventSchedule')

  // eventQA
  const qa = widgetFor('eventQA')

  // eventRooms
  const rooms = widgetFor('eventRooms')

  // navigation links
  const links = [
    {
        name: 'Lobby',
        view: 'lobby',
        icon: faDoorOpen,
        main: 'mainStage',
        aside: 'schedule',
        enabled: true
    },
    {
        name: 'Main Stage',
        view: 'mainStage',
        icon: faVideo,
        main: 'mainStage',
        aside: 'schedule',
        enabled: mainStageEnabled
    },
    {
        name: 'Rooms',
        view: 'rooms',
        icon: faUsers,
        aside: 'rooms',
        enabled: roomsEnabled
    },
    {
        name: 'Chat',
        view: 'chat',
        icon: faUserFriends,
        enabled: chatEnabled
    },
    {
        name: 'Q&A',
        view: 'qa',
        icon: faQuestion,
        aside: 'qa',
        enabled: qaEnabled
    },
    {
        name: 'Polls',
        view: 'polls',
        icon: faPoll,
        enabled: pollsEnabled
    },
  ]

  return (
    <div className="event-wrapper">

      <header style={{ 
        background: primaryBackground,
        color: primaryTextColor
      }}>
        {headerLogo && (
          <img src={headerLogo} className="header-logo" alt="Header Logo" />
        )}
        {!headerLogo && (
          <p>Header Logo</p>
        )}
      </header>

      <nav>
        <ul>
          {links.map(link => {

            if (!link.enabled) {
              return <></>
            }

            return (
              <li key={link.view}>
                <FontAwesomeIcon
                  icon={link.icon}
                  fixedWidth={true}
                  aria-hidden="true"
                  title={link.name}
                />
                <span>
                  {link.name}
                </span>
              </li>
            )
          })}
        </ul>
      </nav>

      {lobbyImage && (
        <img src={lobbyImage} className="lobby-image" alt="Lobby" />
      )}

      <div className="times">
        {startTime && (
          <p>Starts: {startTime} - {timezoneCode}</p>
        )}
        {endTime && (
          <p>Ends: {endTime} - {timezoneCode}</p>
        )}
      </div>

      <div 
        className="content padded"
        style={{
          color: textColor
        }}
      >
        <h1>{title}</h1>
        {body}
      </div>

      <div
        className="event-main-stage padded"
      >
        <h3>Main Stage</h3>

        {livestreamUrl && (
          <div className="iframe-wrapper">
            <iframe src={livestreamUrl} frameBorder="0" title="Livestream" />
          </div>
        )}
      </div>

      <div
        className="event-schedule padded"
      >
        <h3>Schedule</h3>
        {schedule}
      </div>

      <div
        className="event-qa padded"
      >
        <h3>Q&amp;A Information</h3>
        {qa}
      </div>

      <div
        className="event-rooms padded"
      >
        <h3>Rooms Information</h3>
        {rooms}
      </div>

    </div>
  )
}