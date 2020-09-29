// import libs
import React, { useContext } from 'react'

// import login components
// import TwitterLogin from "react-twitter-login"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GoogleLogin } from 'react-google-login'

// import components
import Context from '../Context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	// faTwitter,
  faFacebookF,
	faGoogle,
} from '@fortawesome/free-brands-svg-icons'

// import css
import { css } from '@emotion/core'

export default ({ branding }) => {

	const context = useContext(Context)

	// const responseTwitter = (response) => {
	// 	console.log(response)
	// }

	const setLocalUser = (user) => {
		window.localStorage.setItem('echoUser', JSON.stringify(user))
	}

	const responseFacebook = (response) => {
		const user = {
			name: response.name,
			email: response.email,
			picture: response.picture.data.url
		}
		context.setUser(user)
		setLocalUser(user)
	}

	const googleResponse = (response) => {
		const user = {
			name: response.profileObj.name,
			email: response.profileObj.email,
			picture: response.profileObj.imageUrl
		}
		context.setUser(user)
		setLocalUser(user)
	}

	const googleError = (err) => {
		console.log(err)
	}

	return(
		<div
			css={css`
				display: flex;
				align-items: center;
				justify-content: flex-end;

				span {
					margin-right: 0.5rem;
				}

				button {
					background: rgba(0,0,0,0.05);
					outline: none;
					border: 0;
					padding: 0;
					margin: 0 0.25rem 0 0;
					color: ${branding.primaryTextColor};
					width: 2rem;
					height: 2rem;
					border-radius: 2rem;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}
			`}
		>
			<span>Login</span>
			
			{/* <TwitterLogin 
				authCallback={responseTwitter}
				consumerKey={process.env.GATSBY_TWITTER_API_KEY}
				consumerSecret={process.env.GATSBY_TWITTER_API_SECRET}
				callbackUrl={`${process.env.GATSBY_SITE_URL}/.netlify/functions/twitter-auth`}
			>
				<button>
					<FontAwesomeIcon
						icon={faTwitter}
						fixedWidth
						aria-hidden="true"
						title={"Login with Twitter"}
					/>
				</button>
			</TwitterLogin> */}

			<FacebookLogin
				appId={process.env.GATSBY_FACEBOOK_APP_ID}
				callback={responseFacebook}
				fields="name,email,picture"
				render={renderProps => (
					<button onClick={renderProps.onClick}>
						<FontAwesomeIcon
							icon={faFacebookF}
							fixedWidth
							aria-hidden="true"
							title={"Login with Facebook"}
						/>
					</button>
				)}
			/>

			<GoogleLogin
				clientId={process.env.GATSBY_GOOGLE_APP_ID}
				buttonText="Login"
				onSuccess={googleResponse}
				onFailure={googleError}
				render={renderProps => (
					<button 
						onClick={renderProps.onClick} 
						disabled={renderProps.disabled}
					>
							<FontAwesomeIcon
								icon={faGoogle}
								fixedWidth
								aria-hidden="true"
								title={"Login with Google"}
							/>
					</button>
				)}
			/>

		</div>
	)
}
