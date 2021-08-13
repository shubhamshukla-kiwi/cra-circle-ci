import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from '../../../components/svgs/logo-icon';

const TopBar = ({ showDashboard }) => {
  return (
    <div className="top-bar">
    <Link to="/">
        <LogoIcon className="logo-icon" />
        <span className="top-bar-logo">seeker</span>
    </Link>
    {showDashboard
        ? (
            <Link to="/dashboard" className="login-buttton" style={{ width: 130 }}>
                DASHBOARD
            </Link>
        )
        : (
            <Link to="/login" className="login-buttton">
                LOGIN
            </Link>
        )
    }
</div>
);
};

TopBar.propTypes = {

};

export default TopBar;