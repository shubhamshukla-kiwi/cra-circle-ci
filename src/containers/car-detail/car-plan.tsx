import _ from 'lodash';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import info from '../../assets/images/homepage/info.svg';
import './car-detail.css';
import CustomModal from '../../components/custom-modal/custom-modal';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

class CarPlan extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false, 
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    
    render() {
        return (
            <div className="plan-dashboard">
                <div className="new-car-container">
                    <div className="onboard-container">
                        <OnboardHeader />
                        <div className="navigation-section">
                            <TabNavigator />
                            <div className="detail-dashboard plan-details-wrapper">
                                <TransitionGroup className="plan-detail-transition-group">
                                    <div className="header-container-row">
                                        <span class="icon-back-arrow font-icon"></span>
                                        <h4>please select your coverage</h4>
                                    </div>
                                    <div className="price-plan-wrap">
                                        <div className="price-content">
                                            <div className="coverage-info">
                                                <img src={info} alt="icon"></img>
                                                Coverage Info
                                            </div>
                                            <ul>
                                                <li>Bodily Injury (BI)</li>
                                                <li>Property Damage</li>
                                                <li>Unisured Motorist BI</li>
                                                <li>Unisured Motorist Property Damage</li>
                                                <li>Personal Injury Protection (PIP)</li>
                                                <li>Comprehensive Deductible</li>
                                                <li>Collision Deductible</li>
                                                <li>Rental Car Coverage</li>
                                                <li>Emergency Road Services</li>
                                            </ul>
                                        </div>
                                        <div className="price-data">
                                            <div class="pricing-table selected-plan">
                                                <div className="header">
                                                <h3 class="pricing-title">Best</h3>
                                                <div class="form-group custom-radio-btn">
                                                    <input type="radio" id="check" name="radio-group"/>
                                                    <label for="check"></label>
                                                </div>
                                                </div>
                                                <ul class="table-list">
                                                    <li><h5>Bodily Injury (BI)</h5>$250k/ $500K</li>
                                                    <li><h5>Property Damage</h5>$100K</li>
                                                    <li><h5>Unisured Motorist BI</h5>$250k/ $500K</li>
                                                    <li><h5>Unisured Motorist Property Damage</h5>$20</li>
                                                    <li><h5>Personal Injury Protection (PIP)</h5>$50K</li>
                                                    <li><h5>Comprehensive Deductible</h5>$250</li>
                                                    <li><h5>Collision Deductible</h5>N/A</li>
                                                    <li><h5>Rental Car Coverage</h5>Yes</li>
                                                    <li><h5>Emergency Road Services</h5>Yes</li>
                                                    <li className="customise-btn" onClick={this.handleOpenModal}>Customize</li>
                                                </ul>
                                            </div>
                                            <div class="pricing-table">
                                                <div className="header">
                                                <h3 class="pricing-title">Better</h3>
                                                <div class="form-group custom-radio-btn">
                                                    <input type="radio" id="check" name="radio-group"/>
                                                    <label for="check"></label>
                                                </div>
                                                </div>
                                                <ul class="table-list">
                                                    <li><h5>Bodily Injury (BI)</h5>$250k/ $500K</li>
                                                    <li><h5>Property Damage</h5>$100K</li>
                                                    <li><h5>Unisured Motorist BI</h5>$250k/ $500K</li>
                                                    <li><h5>Unisured Motorist Property Damage</h5>$20</li>
                                                    <li><h5>Personal Injury Protection (PIP)</h5>$50K</li>
                                                    <li><h5>Comprehensive Deductible</h5>$250</li>
                                                    <li><h5>Collision Deductible</h5>N/A</li>
                                                    <li><h5>Rental Car Coverage</h5>Yes</li>
                                                    <li><h5>Emergency Road Services</h5>Yes</li>
                                                    <li className="customise-btn" onClick={this.handleOpenModal}>Customize</li>
                                                </ul>
                                            </div>
                                            <div class="pricing-table">
                                                <div className="header">
                                                <h3 class="pricing-title">Basic</h3>
                                                <div class="form-group custom-radio-btn">
                                                    <input type="radio" id="check" name="radio-group"/>
                                                    <label for="check"></label>
                                                </div>
                                                </div>
                                                <ul class="table-list">
                                                    <li><h5>Bodily Injury (BI)</h5>$250k/ $500K</li>
                                                    <li><h5>Property Damage</h5>$100K</li>
                                                    <li><h5>Unisured Motorist BI</h5>$250k/ $500K</li>
                                                    <li><h5>Unisured Motorist Property Damage</h5>$20</li>
                                                    <li><h5>Personal Injury Protection (PIP)</h5>$50K</li>
                                                    <li><h5>Comprehensive Deductible</h5>$250</li>
                                                    <li><h5>Collision Deductible</h5>N/A</li>
                                                    <li><h5>Rental Car Coverage</h5>Yes</li>
                                                    <li><h5>Emergency Road Services</h5>Yes</li>
                                                    <li className="customise-btn" onClick={this.handleOpenModal}>Customize</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="button-primary" to="/car-detail-success">
                                        <span className="btn-txt">Save & send request for quotes</span> 
                                        <span className="icon-forward-arrow font-icon"></span>
                                    </Link>
                                </TransitionGroup>
                            </div>
                        </div>
                        <OnboardingFooter />
                    </div>
                </div>
                <CustomModal 
                    showModal = {this.state.showModal}
                    handleCloseModal = {this.handleCloseModal}
                />
            </div>
        );
    }
}

export default CarPlan;
