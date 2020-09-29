// import libs
import React, { useContext } from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import Context from '../Context/Context'
import MainStage from './MainStage'
import Jitsi from './Jitsi'

export default ({ event }) => {

    const context = useContext(Context)

    const {
        frontmatter: {
            eventInformation
        }
    } = event

    return (
        <div
            css={css`
                grid-area: main;

                ${mq('tablet_up')} {
                    height: calc(100vh - 100px);
                    overflow-y: scroll;
                }
            `}
        >
            { 'mainStage' === context.main && (
                <MainStage eventInformation={eventInformation} />
            )}
            { 'jitsi' === context.main && (
                <Jitsi event={event} />
            )}
        </div>
    )
}