/*
Layout Component

The layout is organized into css grid-areas that display differently for
mobile, tablet, and desktop. The following css grid-areas should be used in 
different page-designs:

header - defined in the ./Site/Header component
navigation - user per page navigation component
wrapper - main children components
*/

// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'
import mq from '../../utils/media'

// import components
import GlobalStyles from './GlobalStyles'
import SEO from './SEO'
import Header from './Header'

export default ({ 
	children, 
	branding,
	headerLogo,
	title
}) => {

	return(
		<div
			css={css`
				display: grid;
				grid-template-areas: 
					"header"
					"wrapper"
					"navigation";
				grid-template-rows: 9vh 82vh 9vh;
				grid-template-columns: 1fr;

				${mq('tablet_up')} {
					grid-template-areas: 
						"header header"
						"navigation wrapper";
					grid-template-rows: 100px 1fr;
					grid-template-columns: 100px 1fr;  
					min-height: 100vh;  
				}
			`}
		>
			<GlobalStyles branding={branding} />

			<SEO
				title={title}
			/>

			<Header 
				title={title}
				branding={branding}
				headerLogo={headerLogo}
			/>

			{children}
		</div>
	)
}