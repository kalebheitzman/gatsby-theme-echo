// import libs
import React, { useContext } from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import { navigate } from 'gatsby-link'
import Context from '../Context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faDoorOpen,
	faVideo,
	faUsers,
	faUserFriends,
	faQuestion,
	faPoll,
	faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'
import Credit from '../Site/Credit'

export default ({ eventBranding, eventSettings }) => {

	const context = useContext(Context)

	const isActive = (view) => {
		return context.view === view ?  'active' : ''
	}

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
			name: eventSettings.mainStageLabel ? eventSettings.mainStageLabel : 'Main Stage',
			view: 'mainStage',
			icon: faVideo,
			main: 'mainStage',
			aside: 'schedule',
			enabled: eventSettings.mainStage ? true : false
		},
		{
			name: eventSettings.roomsLabel ? eventSettings.roomsLabel : 'Rooms',
			view: 'rooms',
			icon: faUsers,
			aside: 'rooms',
			enabled: eventSettings.rooms ? true : false
		},
		{
			name: eventSettings.chatLabel ? eventSettings.chatLabel : 'Chat',
			view: 'chat',
			icon: faUserFriends,
			enabled: eventSettings.chat ? true : false
		},
		{
			name: eventSettings.qaLabel ? eventSettings.qaLabel : 'Q&A',
			view: 'qa',
			icon: faQuestion,
			aside: 'qa',
			enabled: eventSettings.qa ? true : false
		},
		{
			name: eventSettings.pollsLabel ? eventSettings.pollsLabel : 'Polls',
			view: 'polls',
			icon: faPoll,
			enabled: eventSettings.polls ? true : false
		},
	]

	const enabledLinks = links.filter(item => {
		return item.enabled === true
	})

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
				padding: 0 1rem;

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
								border-bottom: 3px solid ${eventBranding.primaryBackground};
								color: #333;

								${mq('tablet_up')} {
									border-bottom: none;
									border-right: 3px solid ${eventBranding.primaryBackground};
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
				{eventSettings.allEvents && (
					<li>
						<button onClick={() => navigate('/')}>
							<FontAwesomeIcon
								icon={faCalendarAlt}
								fixedWidth
								aria-hidden="true"
								title={`All Events`}
								css={css`
									text-align: center;
								`}
							/>
							<span className="label">All Events</span>
						</button>
					</li>
				)}
				{enabledLinks.map(link => (
					<li 
						key={link.view}
					>
						<button
							className={isActive(link.view)}
							onClick={() => {
								context.navigate(link.view)

								if (undefined !== link.aside) {
									context.setAside(link.aside)
								}

								if (undefined !== link.main) {
									context.setMain(link.main)
								}
							}}
						>
							<FontAwesomeIcon
								icon={link.icon}
								fixedWidth
								aria-hidden="true"
								title={link.name}
								css={css`
									text-align: center;
								`}
							/>
							<span className="label">{link.name}</span>
						</button>
					</li>
				))}
			</ul>

			<Credit />
		</nav>
	)
}