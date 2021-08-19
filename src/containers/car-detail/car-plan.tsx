import { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import info from '../../assets/images/homepage/info.svg';
import './car-detail.css';
import CustomModal from '../../components/custom-modal/custom-modal';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import { coveragePlans } from '../../constants/app.const';

class CarPlan extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            selectedPlan: null
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

    choosePlan = (index: number) => {
        this.setState({ selectedPlan: index });
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
                                    <>
                                        <div className="header-container-row">
                                            <span onClick={this.props.prevState} className="icon-back-arrow font-icon"></span>
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
                                                {coveragePlans.map((item, index) => (
                                                    <div key={index} className={`pricing-table ${index === this.state.selectedPlan ? 'selected-plan' : ''}`}>
                                                        <div className="header">
                                                            <h3 className="pricing-title">{item.planName}</h3>
                                                            <div className="form-group custom-radio-btn">
                                                                <input onChange={() => this.choosePlan(index)} checked={index === this.state.selectedPlan} type="checkbox" id={`check${index}`} name="radio-group" />
                                                                <label htmlFor={`check${index}`}></label>
                                                            </div>
                                                        </div>
                                                        <ul className="table-list">
                                                            <li><h5>Bodily Injury (BI)</h5>{item.bodilyInjury}</li>
                                                            <li><h5>Property Damage</h5>{item.propertyDamage}</li>
                                                            <li><h5>Unisured Motorist BI</h5>{item.unisuredMotoristBI}</li>
                                                            <li><h5>Unisured Motorist Property Damage</h5>{item.unisuredMotoristPropertyDamage}</li>
                                                            <li><h5>Personal Injury Protection (PIP)</h5>{item.personalInjuryProtection}</li>
                                                            <li><h5>Comprehensive Deductible</h5>{item.comprehensiveDeductible}</li>
                                                            <li><h5>Collision Deductible</h5>{item.collisionDeductible}</li>
                                                            <li><h5>Rental Car Coverage</h5>{item.rentalCarCoverage}</li>
                                                            <li><h5>Emergency Road Services</h5>{item.emergencyRoadServices}</li>
                                                            <li className="customise-btn" onClick={this.handleOpenModal}>Customize</li>
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {!this.state.selectedPlan && <span className="error-msg">Please select a plan</span>}
                                        <div className="btn-selection">
                                            <Link onClick={()=> {
                                                if(this.state.selectedPlan) {
                                                    this.props.saveCoveragePlan(coveragePlans[this.state.selectedPlan], true);
                                                }
                                                }} className="button-primary">Save & add another vehicle</Link>
                                            <Link onClick={()=> {
                                                if(this.state.selectedPlan) {
                                                    this.props.saveCoveragePlan(coveragePlans[this.state.selectedPlan], true);
                                                }
                                                }} className="button-primary" to="/car-detail-success">
                                                <span className="btn-txt">Save & send request for quotes</span>
                                                <span className="icon-forward-arrow font-icon"></span>
                                            </Link>
                                        </div>
                                    </>
                                </TransitionGroup>
                            </div>
                        </div>
                        <OnboardingFooter />
                    </div>
                </div>
                <CustomModal
                    showModal={this.state.showModal}
                    handleCloseModal={this.handleCloseModal}
                    planData={coveragePlans[this.state.selectedPlan]}
                    saveCoveragePlan={this.props.saveCoveragePlan}
                />
            </div>
        );
    }
}

export default CarPlan;
