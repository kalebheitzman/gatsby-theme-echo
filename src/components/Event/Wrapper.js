// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

export default ({ children }) => {

    return (
        <div
            css={css`
                grid-area: wrapper;
                overflow-y: scroll;
        
                ${mq('tablet_up')} {
                    display: grid;
                    grid-template-areas: 
                        "aside main"
                        "footer footer";
                    grid-template-columns: 300px 1fr;
                    grid-template-rows: 1fr 70px;
                    // height: auto;
                }
            `}
        >
            {children}
        </div>
    )
}