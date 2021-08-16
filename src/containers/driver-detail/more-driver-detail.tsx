import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import './driver-detail.css';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

class MoreDriverDetail extends Component {

    render() {

        return (
            <div className="driver-detail-dashboard">
                <div className="new-car-container">
                    <div className="onboard-container">
                        <OnboardHeader />
                        <div className="navigation-section">
                            <TabNavigator />
                            <div className="detail-dashboard moredriver-details-wrapper">
                                <TransitionGroup className="driver-detail-transition-group">
                                    <div className="header-container-row">
                                    <span className="icon-back-arrow font-icon"></span>
                                        <h4>tell us a bit more about adrian!</h4>
                                    </div>
                                    <form>
                                        <div className="detail-list">
                                            <h4>Has the driver lived at the current address for less than 1 year?</h4>
                                            <div className="select-data">
                                                <div className="form-group custom-radio-btn">
                                                    <input type="radio" id="yes" name="radio-group" checked/>
                                                    <label for="yes">Yes</label>
                                                </div>
                                                <div className="form-group custom-radio-btn">
                                                    <input type="radio" id="no" name="radio-group"/>
                                                    <label for="no">No</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>If so, what was the previous address?</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="detail-list">
                                            <h4>Did the driver obtain their license in the last 3 years?</h4>
                                            <div className="select-data">
                                                <div className="form-group custom-radio-btn">
                                                    <input type="radio" id="yes" />
                                                    <label for="yes">Yes</label>
                                                </div>
                                                <div className="form-group custom-radio-btn">
                                                    <input type="radio" id="no" />
                                                    <label for="no">No</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>If yes, at what age?</label>
                                                <select>
                                                    <option selected value="">Select</option>
                                                    <option value="">29</option>
                                                    <option value="">20</option>
                                                    <option value="">22</option>
                                                    <option value="">26</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="detail-list">
                                            <h4>Profession, Student, or Veteran Discounts?</h4>
                                            <h6>Some insurance companies offer discounts to student, veterans, and some professions.</h6>
                                            <div className="select-data">
                                                <div className="form-group custom-radio-btn">
                                                    <input type="radio" id="yes" />
                                                    <label for="yes">Yes</label>
                                                </div>
                                                <div className="form-group custom-radio-btn">
                                                    <input type="radio" id="no" />
                                                    <label for="no">No</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Select if applicable.</label>
                                                <select>
                                                    <option selected value="">Select</option>
                                                    <option value="">29</option>
                                                    <option value="">20</option>
                                                    <option value="">22</option>
                                                    <option value="">26</option>
                                                </select>
                                            </div>
                                        </div>
                                        <Link className="button-primary" to="/more-driver-detail-a">Next</Link>
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



export default MoreDriverDetail;
