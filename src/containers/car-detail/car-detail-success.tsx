import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import './car-detail.css';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

class CarDetailSuccess extends Component {
  render() {
    return (
      <div className="car-detail-dashboard">
        <div className="new-car-container">
          <div className="onboard-container">
            <OnboardHeader />
            <div className="navigation-section success-modal">
              <div className="car-success-wrapper">
                <TransitionGroup className="car-detail-transition-group">
                  <>
                  <h5>success!</h5>
                  <p>Hello Seekr, Your on-boarding is through. Thank you for sending us the request. We will process your requirements and get back to you soon with the suitable quotes.</p>
                  <div className="btn-wrapper">
                    <Link className="button-primary" to="/dashboard">Go To Dashboard</Link>              
                  </div>
                  </>
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

export default CarDetailSuccess;
