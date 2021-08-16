import React, { useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import './tab-navigator.css';
import Edit from '../../assets/images/homepage/edit.svg'
import User from '../../assets/images/homepage/user.svg'
import Default from '../../assets/images/homepage/car-default.png'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Driver, Vehicle } from '../../constants/types';


interface Props {
    dispatch: Dispatch,
    drivers: Array<Driver>,
    vehicles: Array<Vehicle>
}

const TabNavigator = (props: Props) => {
    const [showBox, setShowBox] = useState(false);
    const [showVehicleBox, setshowVehicleBox] = useState(false);
    const location = useLocation();
    return (
        <div className="tab-navigator">
            <div className="tabs">
                <div className="tab">
                    <div className={`tab-link-area ${location.pathname === '/new-car/preferences'?'tab-selected':'' }`}>
                        <div className="icon">
                            <span className="icon-preference font-icon">
                                <span className="path1 font-icon"></span>
                                <span className="path2 font-icon"></span>
                                <span className="path3 font-icon"></span>
                            </span>
                            <div className="selected-step"></div>
                        </div>
                        <div className="steps-content">
                            <h6>Step 1</h6>
                            <div className="steps-txt">
                                <h4>Preferences</h4>
                                <p>Set your service priorities and we will help you find the suitable deals.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-link-area ${location.pathname === '/driver-detail'?'tab-selected':'' }`}>
                        <div className="icon">
                            <span className="icon-detail font-icon">
                                <span className="path1 font-icon"></span>
                                <span className="path2 font-icon"></span>
                            </span>
                            <div className="selected-step"></div>
                        </div>
                        <div className="steps-content">
                            <h6>Step 2</h6>
                            <div className="steps-txt">
                                <div className="details-added">
                                    <h4>Driver details</h4>
                                    <div className="added-txt" onClick={() => {
                                        setShowBox(!showBox)
                                    }}>
                                        <p>{props.drivers.length} driver added</p>
                                        <span className="icon-forward-arrow font-icon"></span>
                                    </div>
                                </div>
                                <p>We would be requiring the driver’s license details and any accident/violation occured on their account.</p>
                            </div>
                            {showBox &&
                                <div className="detail-dropdown">
                                    {props.drivers.map(driver => (
                                        <div className="list">
                                            <div className="left-content">
                                                <img src={User} alt="user-icon"></img>
                                                <div className="user-name">
                                                    <h6>{driver.firstName}</h6>
                                                    <span>{driver.licenseNumber}</span>
                                                </div>
                                            </div>
                                            <div className="right-content">
                                                <img src={Edit} alt="edit-icon"></img>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="list">
                                        <div className="left-content">
                                            <img src={User} alt="user-icon"></img>
                                            <div className="user-name">
                                                <h6>Adrian</h6>
                                                <span>0123456789-002</span>
                                            </div>
                                        </div>
                                        <div className="right-content">
                                            <img src={Edit} alt="edit-icon"></img>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`tab-link-area ${location.pathname === '/car-detail'?'tab-selected':'' }`}>
                        <div className="icon">
                            <span className="icon-vehicle font-icon">
                                <span className="path1 font-icon"></span>
                                <span className="path2 font-icon"></span>
                                <span className="path3 font-icon"></span>
                            </span>
                            <div className="selected-step"></div>
                        </div>
                        <div className="steps-content">
                            <h6>Step 3</h6>
                            <div className="steps-txt">
                                <div className="details-added">
                                    <h4>Vehicle</h4>
                                    <div className="added-txt" onClick={() => {
                                        setshowVehicleBox(!showVehicleBox)
                                    }}>
                                        <p>{props.vehicles.length} vehicles added</p>
                                        <span className="icon-forward-arrow font-icon"></span>
                                    </div>
                                </div>
                                <p>We would like to know the vehicles you own and you can select your coverage accordingly.</p>
                            </div>
                            {showVehicleBox &&
                                <div className="detail-dropdown vehicle-added-dropdown">
                                    {props.vehicles.map(vehicle => (
                                        <div className="list">
                                            <div className="left-content">
                                                <img src={Default} alt="user-icon"></img>
                                                <div className="user-name">
                                                    <h6>{vehicle.model} - {vehicle.make}</h6>
                                                    <span>Coverage: Best</span>
                                                </div>
                                            </div>
                                            <div className="right-content">
                                                <img src={Edit} alt="edit-icon"></img>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className="tab-link-area">
                        <div className="icon">
                            <span className="icon-quotes font-icon">
                                <span className="path1 font-icon"></span>
                                <span className="path2 font-icon"></span>
                                <span className="path3 font-icon"></span>
                            </span>
                            <div className="selected-step"></div>
                        </div>
                        <div className="steps-content">
                            <h6>Step 4</h6>
                            <div className="steps-txt">
                                <p>Success! Get your quotes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-text-mini">
                    <div className="steps-txt">
                        <h4>Preferences</h4>
                        <p>Set your service priorities and we will help you find the suitable deals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        drivers: state.drivers,
        vehicles: state.vehicles
    }
}
export default withRouter(connect(mapStateToProps)(TabNavigator));
