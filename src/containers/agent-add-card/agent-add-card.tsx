import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

class AgentAddCard extends Component {
    render() {
        return (
            <div className="car-detail-dashboard">
                <div className="new-car-container add-card-container">
                    <div className="onboard-container">
                        <OnboardHeader />
                        <div className="navigation-section add-card-modal">
                            <div className="card-modal-wrapper">
                                <TransitionGroup className="card-modal-transition-group">
                                    <h5>Add Card</h5>
                                    <form>
                                        <div className="form-group">
                                            <label>Name on card</label>
                                            <input
                                                type="name"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Card Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Date of expiry (MM/YY)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="btn-wrapper">
                                            <Link className="button-txt" to="/car-detail-success">Skip</Link>
                                            <Link className="button-primary" to="/car-detail-success">Save & Proceed</Link>
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

export default AgentAddCard;
