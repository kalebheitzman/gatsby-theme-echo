// import libs
import React, { useContext } from 'react'

// import components
import Layout from '../Site/Layout'
import Context from '../Context/Context'
import Navigation from './Navigation'
import Footer from '../Site/Footer'
import Lobby from './Lobby'
import Wrapper from './Wrapper'
import Main from './Main'
import Aside from './Aside'

export default ({ data: { event } }) => {

	const {
			frontmatter: {
					title,
					eventBranding,
					eventGraphics: {
						headerLogo
					},
					eventSettings
			}
	} = event
	
	const context = useContext(Context)

	return (
		<Layout
			title={title}
			branding={eventBranding}
			headerLogo={headerLogo}
		>
			<Navigation 
				eventBranding={eventBranding} 
				eventSettings={eventSettings}
			/>

			{'lobby' === context.view && (
				<Lobby event={event} />
			)}

			{'lobby' !== context.view && (
				<Wrapper>
					<Main event={event} />
					<Aside event={event} />
					<Footer />
				</Wrapper>
			)}
		</Layout>
	)
}