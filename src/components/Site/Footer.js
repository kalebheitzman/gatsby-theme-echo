// import libs
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

export default () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <footer
            css={css`
                grid-area: footer;
                color: #bbb;
                padding: 2rem;
                display: flex;
                align-items: center;

                ${mq('tablet_up')} {
                    padding: 2rem;
                    justify-content: flex-end;
                    border-top: 1px solid #eee;    
                }

                p {
                    margin: 0;
                }
            `}
        >
            <p>{data.site.siteMetadata.title} &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}