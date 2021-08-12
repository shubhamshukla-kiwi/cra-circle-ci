import React, { Component } from 'react';
import logo from './../../assets/images/homepage/seekr-logo.png';
import { Link, Redirect } from 'react-router-dom';

class OnboardingHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showSignin: !!this.props.showSignin
          
        };
        console.log(props, this.state);
      }

    render() {
        const portal = localStorage.getItem('portal');
        return (
            <div className="header-logo">
                <div className="screen-container">
                    <img className="loginLogo" src={logo} alt="logo" />
                    {this.props.loggedIn ? <Redirect to="/dashboard" /> : null}
                    {this.state.showSignin && portal === 'client' && <h5>Already have an account? <Link to="/login">Sign In</Link></h5>}
                    {this.state.showSignin && portal === 'agent' && <h5>Already have an account? <Link to="/agent/login">Sign In</Link></h5>}
                </div>
                
            </div>
        );
    }
}
export default OnboardingHeader;

