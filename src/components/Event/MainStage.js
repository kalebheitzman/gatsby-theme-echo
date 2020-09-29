// import libs
import React from 'react'

// import css
import { css } from '@emotion/core'

export default ({ eventInformation }) => {

  const {
    livestreamUrl
  } = eventInformation

  return (
		<div
			css={css`
				position: relative;
				overflow: hidden;
				padding-top: 56.25%;
			`}
		>
			<iframe
				src={livestreamUrl}
				allowFullScreen
				frameBorder="0"
				css={css`
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border: 0;
					margin: 0;
				`}
				title={"Livestream"}
			/>
		</div>
  )
}