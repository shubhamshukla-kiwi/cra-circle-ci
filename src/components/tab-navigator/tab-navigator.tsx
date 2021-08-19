import React, { useState } from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import './tab-navigator.css';
import Edit from '../../assets/images/homepage/edit.svg'
import User from '../../assets/images/homepage/user.svg'
import Default from '../../assets/images/homepage/car-default.png'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { History } from 'history';


interface Props {
    dispatch: Dispatch,
    drivers: T,
    vehicles: T,
    getData: Function
}
const goToStep = (route: string, historyRef: History) => {
    historyRef.push(route);
}
const TabNavigator = (props: Props) => {
    const [showBox, setShowBox] = useState(false);
    const [showVehicleBox, setshowVehicleBox] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const onPageClicked = (event: Event) => {
        setShowBox(false);
        setshowVehicleBox(false);
        event.stopPropagation();
    } 
    return (
        <div className="tab-navigator" onClick={onPageClicked}>
            <div className="tabs">
                <div className="tab">
                    <div className={`tab-link-area ${location.pathname === '/new-quote' || location.pathname === '/new-quote/preferences'?'tab-selected':'' }`}>
                        <div onClick={() => goToStep('/new-quote', history)} className="icon">
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
                    <div className={`tab-link-area ${location.pathname === '/new-quote/drivers'?'tab-selected':'' }`}>
                        <div onClick={() => goToStep('/new-quote/drivers', history)} className="icon">
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
                                    {props.drivers.length>0 && <div className="added-txt" onClick={(event: Event) => {
                                        setShowBox(!showBox);
                                        event.stopPropagation();
                                    }}>
                                        <p>{props.drivers.length} driver added</p>
                                        <span className="icon-forward-arrow font-icon"></span>
                                    </div>}
                                </div>
                                <p>We would be requiring the driver’s license details and any accident/violation occured on their account.</p>
                            </div>
                            {showBox &&
                                <div className="detail-dropdown">
                                    {props.drivers.map((driver, index) => (
                                        <div className="list" key={index}>
                                            <div className="left-content">
                                                <img src={User} alt="user-icon"></img>
                                                <div className="user-name">
                                                    <h6>{driver.driverInfo.firstName}</h6>
                                                    <span>{driver.driverInfo.licenseNumber}</span>
                                                </div>
                                            </div>
                                            <div className="right-content">
                                                <img onClick={() => props.getData(driver, index, '/new-quote/drivers')} src={Edit} alt="edit-icon"></img>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className={`tab-link-area ${location.pathname === '/new-quote/vehicles'?'tab-selected':'' }`}>
                        <div className="icon" onClick={() => {
                            if(props.drivers.length > 0) {
                                goToStep('/new-quote/vehicles', history)
                            }
                            }}>
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
                                    {props.vehicles.length>0 && <div className="added-txt" onClick={(event: Event) => {
                                        setshowVehicleBox(!showVehicleBox);
                                        event.stopPropagation();
                                    }}>
                                        <p>{props.vehicles.length} vehicles added</p>
                                        <span className="icon-forward-arrow font-icon"></span>
                                    </div>}
                                </div>
                                <p>We would like to know the vehicles you own and you can select your coverage accordingly.</p>
                            </div>
                            {showVehicleBox &&
                                <div className="detail-dropdown vehicle-added-dropdown">
                                    {props.vehicles.map((vehicle, index) => (
                                        <div className="list" key={index}>
                                            <div className="left-content">
                                                <img src={Default} alt="user-icon"></img>
                                                <div className="user-name">
                                                    <h6>{vehicle.vehicleInfo.model} - {vehicle.vehicleInfo.make}</h6>
                                                    {vehicle.coveragePlan && <span>Coverage: {vehicle.coveragePlan.planName}</span>}
                                                </div>
                                            </div>
                                            <div className="right-content" >
                                                <img onClick={() => props.getData(vehicle, index, '/new-quote/vehicles')} src={Edit} alt="edit-icon"></img>
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
