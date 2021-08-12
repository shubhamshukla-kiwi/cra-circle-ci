import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/seekr-logo.png';

class OnboardHeader extends Component {

    render() {

        return (
            <div className="navigation-header">
                <Link to="/" className="seeker-logo-container">
                    <img alt="" src={logo} />
                </Link>
                <Link to="/" className="signout-link">
                    Sign out
              </Link>
            </div>
        );
    }
}
export default OnboardHeader;

