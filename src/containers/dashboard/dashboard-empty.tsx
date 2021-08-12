import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Col, Row } from "react-styled-flexboxgrid"
import Header from '../../components/header/header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import './dashboard.css';
import seekerIcon from '../../assets/images/homepage/seeker-icon.png';
import userDefaultIcon from '../../assets/images/homepage/default-user.png';
import emptyImage from '../../assets/images/homepage/empty.png';


class DashboardEmpty extends Component {

    
    render() {
        return (
            <div className="container">
                <div className="dashboard-container">
                    <Header />
                    <Row className="row">
                        <div className="dashboard-left">
                            <span class="icon-cross font-icon">
                                <span class="path2 font-icon"></span>
                            </span>
                            <div className="profile-container">
                                <img alt="Seeker icon" src={seekerIcon} />
                                <div className="profile-content">
                                    <h3>Adrian Dawson</h3>
                                    <p className="profile-address">76 Afhe Street,60005</p>
                                </div>
                            </div>
                            <div className="user-list-container">
                                <h4 className="user-title">1 driver added</h4>
                                <ul className="user-list">
                                    <li>
                                        <a className="user-link">
                                            <img alt="Brand icon" src={userDefaultIcon} />
                                            <div className="profile-content">
                                                <h5>Adrian</h5>
                                                <p className="profile-address">0123456789-002</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-list-container">
                                <h4 className="user-title">2 vehicles added</h4>
                                <ul className="user-list">
                                    <li>
                                        <a className="user-link">
                                            <img alt="Brand icon" src={userDefaultIcon} />
                                            <div className="profile-content">
                                                <h5>Fiat - Abarth</h5>
                                                <p className="profile-address">Coverage: Best</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="user-link">
                                            <img alt="Brand icon" src={userDefaultIcon} />
                                            <div className="profile-content">
                                                <h5>Fiat - Abarth</h5>
                                                <p className="profile-address">Coverage: Best</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dashboard-right">
                            <div className="empty-container">{/* show when nothing on Dashboard and remove "d-none" class*/}
                                <div className="empty-container-inner">
                                    <img alt="Empty icon" src={emptyImage} className="empty-image" />
                                    <h2>Welcome!</h2>
                                    <p>We are in the process of curating the top agents for you. we will get back to you soon.</p>
                                    <p className="extract">&mdash; Team Seekr</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <OnboardingFooter />
                </div>
            </div>
        )
    }
}

export default DashboardEmpty;
