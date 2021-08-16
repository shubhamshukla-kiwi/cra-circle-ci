import _ from 'lodash';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import './driver-detail.css';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import cross from '../../assets/images/homepage/cross.svg';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

class MoreDriverDetailA extends Component {

    render() {

        return (
            <div className="driver-detail-dashboard">
                <div className="new-car-container">
                    <div className="onboard-container">
                        <OnboardHeader />
                        <div className="navigation-section">
                            <TabNavigator />
                            <div className="detail-dashboard driver-incident-details-wrapper">
                                <TransitionGroup className="driver-detail-transition-group">
                                    <div className="header-container-row">
                                        <span className="icon-back-arrow font-icon"></span>
                                        <h4>Accidents/Moving Violations</h4>
                                    </div>
                                    <form>
                                        <div className="check-driver-details">
                                            <p>Check if Adrian has had no violations in the past 5 years</p>
                                            <div className="form-group custom-radio-btn">
                                                    <input type="radio" id="check" name="radio-group"/>
                                                    <label for="check"></label>
                                                </div>
                                        </div>
                                        <div className="detail-list">
                                            <div className="header-top">
                                                <h4>Mention any accident occured</h4>
                                                <span className="more-txt">Add more</span>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group calendar-col">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <label>Year</label>
                                                </div>
                                                <div className="form-group">
                                                    <select>
                                                        <option value=""></option>
                                                        <option value="1" selected>Accident</option>
                                                        <option value="2">Break Fail</option>
                                                    </select>
                                                    <label>Category</label>
                                                </div>
                                                <div className="delete-spn">
                                                    <img alt="delete" src={cross}></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail-list">
                                            <div className="header-top">
                                                <h4>Has there been a violation?</h4>
                                                <span className="more-txt">Add more</span>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group calendar-col">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <label>Year</label>
                                                </div>
                                                <div className="form-group">
                                                    <select>
                                                        <option value=""></option>
                                                        <option value="1" selected>Accident</option>
                                                        <option value="2">Break Fail</option>
                                                    </select>
                                                    <label>Category</label>
                                                </div>
                                                <div className="delete-spn">
                                                    <img alt="delete" src={cross}></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="detail-list">
                                            <div className="header-top">
                                                <h4>Any other incident?</h4>
                                                <span className="more-txt">Add more</span>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group calendar-col">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <label>Year</label>
                                                </div>
                                                <div className="form-group">
                                                    <select>
                                                        <option value=""></option>
                                                        <option value="1" selected>Accident</option>
                                                        <option value="2">Break Fail</option>
                                                    </select>
                                                    <label>Category</label>
                                                </div>
                                                <div className="delete-spn">
                                                    <img alt="delete" src={cross}></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-selection">
                                        <Link className="button-transparent" to="/">Save & add another driver</Link>
                                        <Link className="button-primary" to="/car-detail">Proceed to next step</Link>
                                        </div>
                                    </form>
                                </TransitionGroup>
                            </div>
                        </div>
                        <OnboardingFooter />
                    </div>
                </div>

            </div>
        );
    }
}



export default MoreDriverDetailA;
