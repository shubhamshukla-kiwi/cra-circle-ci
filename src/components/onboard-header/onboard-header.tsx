import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/images/seekr-logo.png';
import { isClient } from '../../utils';


const  OnboardHeader= (props) => {
    const isClientUser = isClient()
    const logout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('persist:root');
        if(isClientUser) {
            props.history.push('/')
        } else {
            props.history.push('/agent/login')
        }
    }
    return (
        <div className="navigation-header">
            <Link to="/" className="seeker-logo-container">
                <img alt="" src={logo} />
            </Link>
            <Link onClick={logout} className="signout-link">
                Sign out
          </Link>
        </div>
    );
}

export default withRouter(OnboardHeader);