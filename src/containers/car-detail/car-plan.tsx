import { useState, useEffect } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import info from '../../assets/images/homepage/info.svg';
import './car-detail.css';
import CustomModal from '../../components/custom-modal/custom-modal';
import { coveragePlanList, originalCoveragePlans } from '../../constants/app.const';


import React from 'react'

interface Props {
    
}

const  CarPlan= (props: Props) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState(-1)
    const [btnClicked, setBtnClicked ]=  useState(false)
    const [coveragePlans, setCoveragePlans] = useState(coveragePlanList);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal =() => {
        setShowModal(false);
    }
    const choosePlan = (index: number) => {
        setSelectedPlan(index);
    }
    const setCoveragePlan = (data) => {
        const index = coveragePlans.findIndex(item => item.planName === data.planName);
        setSelectedPlan(index);
        setCoveragePlans([
            ...coveragePlans.slice(0,index),
            {
                ...coveragePlans[index],
                ...data,
            },
            ...coveragePlans.slice(index+1)
        ])
    }
    useEffect(() => {
        if(props.coveragePlan) {
            setCoveragePlan(props.coveragePlan)
        } else {
            setCoveragePlans(originalCoveragePlans)
        }
    }, [props.coveragePlan]);

    return (
        <>
            <div className="detail-dashboard plan-details-wrapper">
                <TransitionGroup className="plan-detail-transition-group">
                    <>
                        <div className="header-container-row">
                            <span onClick={props.prevState} className="icon-back-arrow font-icon"></span>
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
                                    <div key={index} className={`pricing-table ${index === selectedPlan ? 'selected-plan' : ''}`}>
                                        <div className="header">
                                            <h3 className="pricing-title">{item.planName}</h3>
                                            <div className="form-group custom-radio-btn">
                                                <input onChange={() => choosePlan(index)} checked={index === selectedPlan} type="checkbox" id={`check${index}`} name="radio-group" />
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
                                            <li className="customise-btn" onClick={handleOpenModal}>Customize</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {selectedPlan < 0 && btnClicked && <span className="error-msg">Please select a plan</span>}
                        <div className="btn-selection">
                            <Link onClick={() => {
                                setBtnClicked(true)
                                if (selectedPlan > -1) {
                                    props.saveCoveragePlan(coveragePlans[selectedPlan], false);
                                    setBtnClicked(false);
                                    setSelectedPlan(-1);
                                }
                            }} className="button-primary" to="/new-quote/vehicles">Save & add another vehicle</Link>
                            <Link  onClick={() => {
                                setBtnClicked(true)
                                if (selectedPlan > -1) {
                                    props.saveCoveragePlan(coveragePlans[selectedPlan], true);
                                    setBtnClicked(false);
                                    setSelectedPlan(-1);
                                }
                            }} className="button-primary">
                                <span className="btn-txt">Save & send request for quotes</span>
                                <span className="icon-forward-arrow font-icon"></span>
                            </Link>
                        </div>
                    </>
                </TransitionGroup>
            </div>

            <CustomModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                planData={coveragePlans[selectedPlan]}
                saveCoveragePlan={props.saveCoveragePlan}
                setCoveragePlan={setCoveragePlan}
            />
        </>
    );
}


export default CarPlan;
