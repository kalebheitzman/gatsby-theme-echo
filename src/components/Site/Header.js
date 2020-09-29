// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'

// import components
import Logo from './Logo'
import UserSpace from '../User/UserSpace'

export default ({ title, branding, headerLogo }) => {

    return (
        <header
            css={css`
                grid-area: header;
                position: sticky;
                top: 0;
                z-index: 1;
                padding: 0 2rem;

                display: grid;
                grid-template-columns: 1fr 1fr;
                align-items: center;

                background: ${branding.primaryBackground};
                color: ${branding.primaryTextColor};

                h1 {
                    color: ${branding.primaryTextColor};
                }
            `}
        >
            <Logo
                headerLogo={headerLogo}
                title={title}
            />
            <UserSpace branding={branding} />
        </header>
    )
}