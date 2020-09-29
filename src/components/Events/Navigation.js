// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import { navigate } from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCalendarAlt,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import Credit from '../Site/Credit'

export default ({ branding }) => {

	const isActive = (path) => {
		if (typeof window !== 'undefined') {
			return window.location.pathname === path ? 'active' : null 
		}
		return null
	}

	return (
		<nav
			css={css`
				grid-area: navigation;
				background: #f7f7f7;
				border-top: 1px solid #eee;
				display: grid;
				grid-template-columns: 1fr;
				position: sticky;
				bottom: 0;
				padding: 0 0 0 1rem;

				${mq('tablet_up')} {
					grid-template-columns: 1fr;
					grid-template-rows: 1fr 100px;                        
					border-bottom: none;
					border-right: 1px solid #eee;
					box-sizing: border-box;    
					top: 100px;
					height: calc(100vh - 100px);
					padding: 0;
				}
			`}
		>
			<ul
				css={css`
					list-style: none;
					margin: 0;
					padding: 0;

					display: flex;
					justify-content: center;

					${mq('tablet_up')} {
						display: block;
						padding: 1rem 0;
					}

					li {
						margin: 0;
						padding: 0;
						display: flex;
						flex-grow: 1;
						flex-basis: 0;
						font-size: 1.2rem;

						${mq('tablet_up')} {
							display: block;
							margin: 0 0 1rem;
						}

						button {
							width: 100%;
							background: none;
							border: none;
							outline: none;
							padding: 0;
							margin: 0;
							display: block;
							text-align: center;
							cursor: pointer;
							color: #888;
							transition: all 85ms ease-out;
							text-decoration: none;
							border-bottom: 3px solid transparent;

							${mq('tablet_up')} {
								border-bottom: none;
								border-right: 3px solid transparent;
							}	

							&.active,
							&:hover {
								border-bottom: 3px solid ${branding.primaryBackground};
								color: #333;

								${mq('tablet_up')} {
									border-bottom: none;
									border-right: 3px solid ${branding.primaryBackground};
								}
							}
						}

						span.label {
							font-size: 10px;
							text-transform: uppercase;
							display: block;
						}
					}
				`}
			>
				<li>
					<button 
						onClick={() => navigate('/')}
						className={isActive('/')}
					>
						<FontAwesomeIcon
							icon={faCalendarAlt}
							fixedWidth
							aria-hidden="true"
							title={"All Events"}
							css={css`
								text-align: center;
							`}
						/>
						<span className="label">All Events</span>
					</button>
				</li>
				<li>
					<button 
						onClick={() => navigate('/contact')}
						className={isActive('/contact')}
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							fixedWidth
							aria-hidden="true"
							title={"Home"}
							css={css`
								text-align: center;
							`}
						/>
						<span className="label">Contact</span>
					</button>
				</li>
			</ul>

			<Credit />
		</nav>
	)
}