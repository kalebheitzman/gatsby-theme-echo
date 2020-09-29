// import libs
import React, { useContext } from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Context from '../Context/Context'
import ScheduleAside from './ScheduleAside'
import RoomsAside from './RoomsAside'
import QaAside from './QaAside'

export default ({ event }) => {

    const context = useContext(Context)

    const {
        frontmatter: {
            eventBranding,
            eventSchedule,
            eventRooms,
            eventQA
        }
    } = event

    return (
        <aside
            css={css`
                grid-area: aside;

                ${mq('tablet_up')} {
                    position: sticky;
                    top: 0;
                    background: #fff;
                    overflow-y: scroll;
                    height: calc(100vh - 100px);
                    border-right: 1px solid #eee;    
                }
            `}
        >
            { 'schedule' === context.aside && (
                <ScheduleAside 
                    eventSchedule={eventSchedule} 
                />
            )}
            { 'rooms' === context.aside && (
                <RoomsAside 
                    eventRooms={eventRooms} 
                    eventBranding={eventBranding} 
                />
            )}
            { 'qa' === context.aside && (
                <QaAside 
                    eventQA={eventQA} 
                    eventBranding={eventBranding}
                />
            )}
        </aside>
    )
}