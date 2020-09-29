import React from 'react'
import SocialLogin from 'react-social-login'
 
class SocialButton extends React.Component {
 
    render() {

        return (
            <button onClick={() => this.props.triggerlogin()} {...this.props}>
              { this.props.children }
            </button>
        )
    }
}
 
export default SocialLogin(SocialButton)