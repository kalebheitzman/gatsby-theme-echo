// import react libs
import React from 'react'
import { Link } from 'gatsby'

// import css libs
import { css } from '@emotion/core'
import mq from '../../utils/media'

// Pagination component
export default ({
  currentPage, numPages, branding, base = "/events"
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  let firstPage = "/"
  let prevPage = currentPage - 1 === 1 ? "/" : `/events/${(currentPage - 1).toString()}`
  let nextPage = `/events/${(currentPage + 1).toString()}`
  if (base !== "/events") {
    firstPage = base
    prevPage = currentPage - 1 === 1 ? base : `${base}/${(currentPage - 1).toString()}`
    nextPage = `${base}/${(currentPage + 1).toString()}`
  }

  if ( numPages === 1 ) {
    return(<></>)
  }

  return (
    <div>
      <ul
        css={css`
          list-style: none;
          margin: 0;
          padding: 1rem;
          border-top: 1px solid #eee;

          ${mq('tablet_up')} {
            padding: 1rem 2rem;
          }

          li {
            display: inline-block;
            margin-bottom: 0;

            a {
              color: #aaa;
              text-decoration: none;
              display: block;
              line-height: 2rem;
              min-width: 2rem;
              text-align: center;
              background: #f7f7f7;
              border-radius: 3px;
              margin-right: 0.5rem;
              transition: all 85ms ease-out;

              &:hover {
                background: #efefef;
                color: #333;
              }

              &.jump {
                padding: 0 0.5rem;
              }

              &.active {
                background: ${branding.primaryBackground};
                color: ${branding.primaryTextColor};

                &:hover {
                  background: ${branding.primaryBackgroundHover};
                }
              }
            }
          }
        `}
      >
        {!isFirst && (
          <li>
            <Link
              to={prevPage}
              rel="prev"
              className="jump"
              title="Previous Page"
            >
              &#9664; Previous
            </Link>
          </li>
        )}
        {Array.from({ length: numPages }, (_, i) => {

          // check for active class
          let key = currentPage-1
          let activeClass = "page-number"
          if (key === i) {
            activeClass = "page-number active"
          }

          return(
            <li key={i}>
              <Link
                className={activeClass}
                key={`pagination-number${i + 1}`}
                to={i === 0 ? firstPage : `${base}/${i + 1}`}
                title={`Page ${i+1}`}
              >
                {i + 1}
              </Link>
            </li>
          )
        })}
        {!isLast && (
          <li>
            <Link
              to={nextPage}
              rel="next"
              className="jump"
              title="Next Page"
            >
              Next &#9654;
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}