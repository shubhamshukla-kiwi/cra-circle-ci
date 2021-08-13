import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components"
import Header from '../../components/header/header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactModal from 'react-modal';
import DefaultVehicle from '../../assets/images/homepage/dashboard-vehicle.png';
import DefaultProfile from '../../assets/images/homepage/dashboard-profile.png';
import Timer from '../../assets/images/homepage/timer.svg';
import Completed from '../../assets/images/homepage/completed.svg';
import DownloadBtn from '../../assets/images/homepage/download-btn.svg';
import Pending from '../../assets/images/homepage/pending.svg';

ReactModal.setAppElement('#root');
class AgentDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showSelectBox: false,
            showModal: false,
            showPendingModal: false,
            showConnectionModal: false,
            showArchivedModal: false,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handlePendingOpenModal = this.handlePendingOpenModal.bind(this);
        this.handlePendingCloseModal = this.handlePendingCloseModal.bind(this);
        this.handleConnectionOpenModal = this.handleConnectionOpenModal.bind(this);
        this.handleConnectionCloseModal = this.handleConnectionCloseModal.bind(this);
        this.handleArchivedOpenModal = this.handleArchivedOpenModal.bind(this);
        this.handleArchivedCloseModal = this.handleArchivedCloseModal.bind(this);
    }


    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handlePendingOpenModal() {
        this.setState({ showPendingModal: true });
    }

    handlePendingCloseModal() {
        this.setState({ showPendingModal: false });
    }

    handleConnectionOpenModal() {
        this.setState({ showConnectionModal: true });
    }

    handleConnectionCloseModal() {
        this.setState({ showConnectionModal: false });
    }

    handleArchivedOpenModal() {
        this.setState({ showArchivedModal: true });
    }

    handleArchivedCloseModal() {
        this.setState({ showArchivedModal: false });
    }
    render() {
        return (
            <div className="agent-container">
                <div className="dashboard-container agent-dashboard">
                    <Header
                        show={this.state.show}
                        setShow={() => this.setState({ show: !this.state.show })}
                    />
                    <Row className="row">
                        <div className="dashboard-header">
                            <div className="profile-image">
                                <img src={DefaultProfile} alt="default-profile"></img>
                                <div className="logo-image">
                                    <img src={DefaultVehicle} alt="logo-default"></img>
                                </div>
                            </div>
                            <div className="status-wrap" onClick={() => {
                                // setShowBox(!this.state.showBox)
                                this.setState({
                                    showSelectBox: !this.state.showSelectBox
                                })
                            }}>
                                <div className="status-action">
                                    <label>Status:</label>
                                    <span>Active</span>
                                </div>
                                {this.state.showSelectBox &&
                                <div className="dropdown">
                                    <ul>
                                        <li>
                                            <a href="#">Active</a>
                                        </li>
                                        <li>
                                            <a href="#">In-active</a>
                                        </li>
                                    </ul>
                                </div>
                            }
                            </div>
                            <div className="top-head">
                                <h5>Augustus Edwards</h5>
                                <div className="rating-star">
                                    <span className="font-icon icon-stars"></span>
                                    4.8
                                </div>
                            </div>
                            <p>Get connection requests from customers who like your profile and connect
                                with them on phone, email or message.</p>
                        </div>
                    </Row>
                    <Row className="tab-wrapper">
                        <Tabs>
                            <div className="tab-list-wrap">
                                <TabList>
                                    <Tab>Quote Requests</Tab>
                                    <Tab>Pending Requests</Tab>
                                    <Tab>Connections <div className="unread"><span>01</span></div></Tab>
                                    <Tab>Archived</Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <Row>
                                    <CardWrapper>
                                        <Card>
                                            <CardHeader>
                                                <h5>Adrian Dawson <span className="font-icon icon-forward-arrow"></span></h5>
                                                <span>Requesting for Quote</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <button className="button-primary" onClick={this.handleOpenModal}>Create Quote</button>
                                            </CardFooter>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <h5>Adrian Dawson <span className="font-icon icon-forward-arrow"></span></h5>
                                                <span>Requesting for Quote</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <button className="button-primary">Create Quote</button>
                                            </CardFooter>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <h5>Adrian Dawson <span className="font-icon icon-forward-arrow"></span></h5>
                                                <span>Requesting for Quote</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <button className="button-primary">Create Quote</button>
                                            </CardFooter>
                                        </Card>
                                    </CardWrapper>
                                </Row>
                            </TabPanel>
                            <TabPanel>
                                <Row>
                                    <CardWrapper>
                                        <Card>
                                            <CardHeader>
                                                <h5>Adrian Dawson</h5>
                                                <span>Quote sent!</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Call (08:00-11:00 am)</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Phone:</label>
                                                    <span>038 039 0011</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="pending-txt">
                                                    <img src={Timer} alt="timer"></img>
                                                    <span className="duration">Pending since 2 days</span>
                                                </div>
                                                <div className="details-txt" onClick={this.handlePendingOpenModal}>
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <h5>Adrian Dawson</h5>
                                                <span>Quote sent!</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Email</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Email:</label>
                                                    <span>adrian992yahoo.com</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="pending-txt">
                                                    <img src={Timer} alt="timer"></img>
                                                    <span className="duration">Pending since 2 days</span>
                                                </div>
                                                <div className="details-txt">
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <h5>Adrian Dawson</h5>
                                                <span>Quote sent!</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Message</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Phone:</label>
                                                    <span>038 039 0011</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="pending-txt">
                                                    <img src={Timer} alt="timer"></img>
                                                    <span className="duration">Pending since 2 days</span>
                                                </div>
                                                <div className="details-txt">
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </CardWrapper>
                                </Row>
                            </TabPanel>
                            <TabPanel>
                                <Row>
                                    <CardWrapper>
                                        <Card>
                                            <CardHeader>
                                                <h5>Adrian Dawson <span className="pending-btn"></span></h5>
                                                <span>wants to connect</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Call (08:00-11:00 am)</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Phone:</label>
                                                    <span>038 039 0011</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="connection-status">
                                                    <span>Connected Today</span>
                                                </div>
                                                <div className="details-txt" onClick={this.handleConnectionOpenModal}>
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Card className="completed-card">
                                            <CardHeader>
                                                <h5>Adrian Dawson</h5>
                                                <span>wants to connect</span>
                                                <div className="completed-txt">
                                                    <img src={Completed} alt="completed"></img>
                                                    <span className="txt">Completed</span>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Email</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Email:</label>
                                                    <span>adrian992yahoo.com</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="connection-status">
                                                    <span>Connected on May 24</span>
                                                </div>
                                                <div className="details-txt">
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <h5>Adrian Dawson</h5>
                                                <span>wants to connect</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Message</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Phone:</label>
                                                    <span>038 039 0011</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="connection-status">
                                                    <span>Connected Today</span>
                                                </div>
                                                <div className="details-txt">
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </CardWrapper>
                                </Row>
                            </TabPanel>
                            <TabPanel>
                                <Row>
                                    <CardWrapper>
                                        <Card className="archived-card">
                                            <CardHeader>
                                                <h5>Adrian Dawson</h5>
                                                <span>Quote sent!</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Call (08:00-11:00 am)</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Phone:</label>
                                                    <span>038 039 0011</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="pending-txt">
                                                    <span className="duration">Archived</span>
                                                </div>
                                                <div className="details-txt" onClick={this.handleArchivedOpenModal}>
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Card className="archived-card">
                                            <CardHeader>
                                                <h5>Adrian Dawson</h5>
                                                <span>Quote sent!</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Email</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Email:</label>
                                                    <span>adrian992yahoo.com</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="pending-txt">
                                                    <span className="duration">Archived</span>
                                                </div>
                                                <div className="details-txt">
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Card className="archived-card">
                                            <CardHeader>
                                                <h5>Adrian Dawson</h5>
                                                <span>Quote sent!</span>
                                            </CardHeader>
                                            <CardContent>
                                                <List className="list-rw">
                                                    <label>Location:</label>
                                                    <span>Delaware, Pacwopkeb</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Driver:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Vehicle:</label>
                                                    <span>1</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Coverage:</label>
                                                    <span>Best</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Communication:</label>
                                                    <span>Message</span>
                                                </List>
                                                <List className="list-rw">
                                                    <label>Phone:</label>
                                                    <span>038 039 0011</span>
                                                </List>
                                            </CardContent>
                                            <CardFooter>
                                                <div className="pending-txt">
                                                    <span className="duration">Archived</span>
                                                </div>
                                                <div className="details-txt">
                                                    <span>See details</span>
                                                    <span className="font-icon icon-forward-arrow"></span>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </CardWrapper>
                                </Row>
                            </TabPanel>
                        </Tabs>
                    </Row>
                    {/* Quote Request Modal */}
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        shouldCloseOnOverlayClick={false}
                        className="agent-request-modal"
                    >
                        <h3>review the customer profile & create a quote for them</h3>
                        <span className="download-pdf-btn"><img src={DownloadBtn} alt="download"></img>Download PDF</span>
                        <div className="modal-wrapper">
                            <div className="left-wrap">
                                <div className="agent-details details-data">
                                    <div className="top-head">
                                        <div className="left-head">
                                            <h4>Adrian Dawson</h4>
                                            <span className="sub-heading">Delaware, Pacwopkeb</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="$"></input>
                                        <button className="button-primary">Set Quote</button>
                                    </div>
                                </div>
                                <div className="driver-details details-data">
                                    <h5>Driver</h5>
                                    <h6>Devin Pearson</h6>
                                    <div className="details-rw">
                                        <label>License Number:</label>
                                        <span>0123456789-002</span>
                                    </div>
                                    <div className="details-rw">
                                        <label>Current Insurance Company:</label>
                                        <span>Auto-Owners Insurance</span>
                                    </div>
                                    <div className="questions-rw">
                                        <p>Has the driver lived at the current address for less than 1 year?</p>
                                        <em>Yes, 1002 Tobro Avenue</em>
                                        <p>Did the driver obtain their license in the last 3 years?</p>
                                        <em>No</em>
                                        <p>Profession, Student, or Veteran Discounts?</p>
                                        <em>No</em>
                                        <p>Violations</p>
                                        <em>2019, Accident with property damage</em>
                                    </div>
                                </div>
                                <div className="vehicles-details details-data">
                                    <h5>vehicle</h5>
                                    <div className="vehicle-data">
                                        <img src={DefaultVehicle} alt="icon"></img>
                                        <div className="details-wrap">
                                            <h6>Audi, A4</h6>
                                            <span>More than 7,500 mi.</span>
                                            <span>Adrian Dawson</span>
                                            <span>Own, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-wrap details-data">
                                <h5>coverage: Best (customized)</h5>
                                <div className="price-listing">
                                    <div className="list">
                                        <label>Bodily Injury (BI)</label>
                                        <span>$250k/ $500K</span>
                                    </div>
                                    <div className="list">
                                        <label>Property Damage</label>
                                        <span>$100K</span>
                                    </div>
                                    <div className="list">
                                        <label>Unisured Motorist BI</label>
                                        <span>$250k/ $500K</span>
                                    </div>
                                    <div className="list">
                                        <label>Unisured Motorist Property Damage</label>
                                        <span>$20</span>
                                    </div>
                                    <div className="list">
                                        <label>Personal Injury Protection (PIP)</label>
                                        <span>$50K</span>
                                    </div>
                                    <div className="list">
                                        <label>Comprehensive Deductible</label>
                                        <span>$250</span>
                                    </div>
                                    <div className="list">
                                        <label>Collision Deductible</label>
                                        <span>N/A</span>
                                    </div>
                                    <div className="list">
                                        <label>Rental Car Coverage</label>
                                        <span>Yes</span>
                                    </div>
                                    <div className="list">
                                        <label>Emergency Road Services</label>
                                        <span>Yes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="close-icon" onClick={this.handleCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
                    </ReactModal>

                    {/* Pending Request Modal */}
                    <ReactModal
                        isOpen={this.state.showPendingModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handlePendingCloseModal}
                        shouldCloseOnOverlayClick={false}
                        className="agent-request-modal"
                    >
                        <h3>You have shared your quotation with adrian.</h3>
                        <div className="pending-rqt">
                            <img src={Pending} alt="pending"></img>
                            <span>Request pending</span>
                        </div>
                        <span className="download-pdf-btn"><img src={DownloadBtn} alt="download"></img>Download PDF</span>
                        <div className="modal-wrapper">
                            <div className="left-wrap">
                                <div className="agent-details details-data">
                                    <div className="top-head">
                                        <div className="left-head">
                                            <h4>Adrian Dawson</h4>
                                            <span className="sub-heading">Delaware, Pacwopkeb</span>
                                        </div>
                                        <div className="right-head">
                                            <span>Quote shared: $599.00</span>
                                        </div>
                                    </div>
                                    <div className="bottom-head">
                                        <div className="left-head">
                                            <h6><span className="required">*</span>No response from the customer?</h6>
                                            <p>You can move the profile to your archive.</p>
                                        </div>
                                        <button className="archive-btn">
                                            <span>Move to Archive</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="driver-details details-data">
                                    <h5>Driver</h5>
                                    <h6>Devin Pearson</h6>
                                    <div className="details-rw">
                                        <label>License Number:</label>
                                        <span>0123456789-002</span>
                                    </div>
                                    <div className="details-rw">
                                        <label>Current Insurance Company:</label>
                                        <span>Auto-Owners Insurance</span>
                                    </div>
                                    <div className="questions-rw">
                                        <p>Has the driver lived at the current address for less than 1 year?</p>
                                        <em>Yes, 1002 Tobro Avenue</em>
                                        <p>Did the driver obtain their license in the last 3 years?</p>
                                        <em>No</em>
                                        <p>Profession, Student, or Veteran Discounts?</p>
                                        <em>No</em>
                                        <p>Violations</p>
                                        <em>2019, Accident with property damage</em>
                                    </div>
                                </div>
                                <div className="vehicles-details details-data">
                                    <h5>vehicle</h5>
                                    <div className="vehicle-data">
                                        <img src={DefaultVehicle} alt="icon"></img>
                                        <div className="details-wrap">
                                            <h6>Audi, A4</h6>
                                            <span>More than 7,500 mi.</span>
                                            <span>Adrian Dawson</span>
                                            <span>Own, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-wrap details-data">
                                <h5>coverage: Best (customized)</h5>
                                <div className="price-listing">
                                    <div className="list">
                                        <label>Bodily Injury (BI)</label>
                                        <span>$250k/ $500K</span>
                                    </div>
                                    <div className="list">
                                        <label>Property Damage</label>
                                        <span>$100K</span>
                                    </div>
                                    <div className="list">
                                        <label>Unisured Motorist BI</label>
                                        <span>$250k/ $500K</span>
                                    </div>
                                    <div className="list">
                                        <label>Unisured Motorist Property Damage</label>
                                        <span>$20</span>
                                    </div>
                                    <div className="list">
                                        <label>Personal Injury Protection (PIP)</label>
                                        <span>$50K</span>
                                    </div>
                                    <div className="list">
                                        <label>Comprehensive Deductible</label>
                                        <span>$250</span>
                                    </div>
                                    <div className="list">
                                        <label>Collision Deductible</label>
                                        <span>N/A</span>
                                    </div>
                                    <div className="list">
                                        <label>Rental Car Coverage</label>
                                        <span>Yes</span>
                                    </div>
                                    <div className="list">
                                        <label>Emergency Road Services</label>
                                        <span>Yes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="close-icon" onClick={this.handlePendingCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
                    </ReactModal>

                    {/* Connection Modal */}
                    <ReactModal
                        isOpen={this.state.showConnectionModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleConnectionCloseModal}
                        shouldCloseOnOverlayClick={false}
                        className="agent-request-modal"
                    >
                        <h3>adrian selected your profile based on your quotation</h3>
                        <div className="submit-wrap">
                            <div className="custom-checkbox agree-txt">
                                <input type="checkbox" id="style-checkbox" checked/>
                                <label for="style-checkbox">I’ve had communication with the customer & Insurance sold.</label>
                            </div>
                        <button type="submit" className="primary-btn"><span>Submit</span></button>
                        </div>
                        <span className="download-pdf-btn"><img src={DownloadBtn} alt="download"></img>Download PDF</span>
                        <div className="modal-wrapper">
                            <div className="left-wrap">
                                <div className="agent-details details-data">
                                    <div className="top-head">
                                        <div className="left-head">
                                            <h4>Adrian Dawson</h4>
                                            <span className="sub-heading">Delaware, Pacwopkeb</span>
                                        </div>
                                        <div className="right-head">
                                            <span>Quote shared: $599.00</span>
                                        </div>
                                    </div>
                                    <div className="bottom-head">
                                        <div className="left-head">
                                            <span className="detail-txt">Communication: Call (08:00-11:00 am)</span>
                                            <span className="detail-txt">Phone: 038 039 0011</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="driver-details details-data">
                                    <h5>Driver</h5>
                                    <h6>Devin Pearson</h6>
                                    <div className="details-rw">
                                        <label>License Number:</label>
                                        <span>0123456789-002</span>
                                    </div>
                                    <div className="details-rw">
                                        <label>Current Insurance Company:</label>
                                        <span>Auto-Owners Insurance</span>
                                    </div>
                                    <div className="questions-rw">
                                        <p>Has the driver lived at the current address for less than 1 year?</p>
                                        <em>Yes, 1002 Tobro Avenue</em>
                                        <p>Did the driver obtain their license in the last 3 years?</p>
                                        <em>No</em>
                                        <p>Profession, Student, or Veteran Discounts?</p>
                                        <em>No</em>
                                        <p>Violations</p>
                                        <em>2019, Accident with property damage</em>
                                    </div>
                                </div>
                                <div className="vehicles-details details-data">
                                    <h5>vehicle</h5>
                                    <div className="vehicle-data">
                                        <img src={DefaultVehicle} alt="icon"></img>
                                        <div className="details-wrap">
                                            <h6>Audi, A4</h6>
                                            <span>More than 7,500 mi.</span>
                                            <span>Adrian Dawson</span>
                                            <span>Own, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-wrap details-data">
                                <h5>coverage: Best (customized)</h5>
                                <div className="price-listing">
                                    <div className="list">
                                        <label>Bodily Injury (BI)</label>
                                        <span>$250k/ $500K</span>
                                    </div>
                                    <div className="list">
                                        <label>Property Damage</label>
                                        <span>$100K</span>
                                    </div>
                                    <div className="list">
                                        <label>Unisured Motorist BI</label>
                                        <span>$250k/ $500K</span>
                                    </div>
                                    <div className="list">
                                        <label>Unisured Motorist Property Damage</label>
                                        <span>$20</span>
                                    </div>
                                    <div className="list">
                                        <label>Personal Injury Protection (PIP)</label>
                                        <span>$50K</span>
                                    </div>
                                    <div className="list">
                                        <label>Comprehensive Deductible</label>
                                        <span>$250</span>
                                    </div>
                                    <div className="list">
                                        <label>Collision Deductible</label>
                                        <span>N/A</span>
                                    </div>
                                    <div className="list">
                                        <label>Rental Car Coverage</label>
                                        <span>Yes</span>
                                    </div>
                                    <div className="list">
                                        <label>Emergency Road Services</label>
                                        <span>Yes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="close-icon" onClick={this.handleConnectionCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
                    </ReactModal>

                    {/* Archived Modal */}
                    <ReactModal
                        isOpen={this.state.showArchivedModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleArchivedCloseModal}
                        shouldCloseOnOverlayClick={false}
                        className="agent-request-modal"
                    >
                        <h3>You have shared your quotation with adrian.</h3>
                        <div className="archived-wrap">
                            <p>This profile was move to archive, as the request was in pending state for over 2 weeks.</p>
                        </div>
                        <span className="download-pdf-btn"><img src={DownloadBtn} alt="download"></img>Download PDF</span>
                        <div className="modal-wrapper">
                            <div className="left-wrap">
                                <div className="agent-details details-data">
                                    <div className="top-head">
                                        <div className="left-head">
                                            <h4>Adrian Dawson</h4>
                                            <span className="sub-heading">Delaware, Pacwopkeb</span>
                                        </div>
                                        <div className="right-head">
                                            <span>Quote shared: $599.00</span>
                                        </div>
                                    </div>
                                    <div className="bottom-head">
                                        <div className="left-head">
                                            <span className="archived-txt">
                                                Archived
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="driver-details details-data">
                                    <h5>Driver</h5>
                                    <h6>Devin Pearson</h6>
                                    <div className="details-rw">
                                        <label>License Number:</label>
                                        <span>0123456789-002</span>
                                    </div>
                                    <div className="details-rw">
                                        <label>Current Insurance Company:</label>
                                        <span>Auto-Owners Insurance</span>
                                    </div>
                                    <div className="questions-rw">
                                        <p>Has the driver lived at the current address for less than 1 year?</p>
                                        <em>Yes, 1002 Tobro Avenue</em>
                                        <p>Did the driver obtain their license in the last 3 years?</p>
                                        <em>No</em>
                                        <p>Profession, Student, or Veteran Discounts?</p>
                                        <em>No</em>
                                        <p>Violations</p>
                                        <em>2019, Accident with property damage</em>
                                    </div>
                                </div>
                                <div className="vehicles-details details-data">
                                    <h5>vehicle</h5>
                                    <div className="vehicle-data">
                                        <img src={DefaultVehicle} alt="icon"></img>
                                        <div className="details-wrap">
                                            <h6>Audi, A4</h6>
                                            <span>More than 7,500 mi.</span>
                                            <span>Adrian Dawson</span>
                                            <span>Own, 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-wrap details-data">
                                <h5>coverage: Best (customized)</h5>
                                <div className="price-listing">
                                    <div className="list">
                                        <label>Bodily Injury (BI)</label>
                                        <span>$250k/ $500K</span>
                                    </div>
                                    <div className="list">
                                        <label>Property Damage</label>
                                        <span>$100K</span>
                                    </div>
                                    <div className="list">
                                        <label>Unisured Motorist BI</label>
                                        <span>$250k/ $500K</span>
                                    </div>
                                    <div className="list">
                                        <label>Unisured Motorist Property Damage</label>
                                        <span>$20</span>
                                    </div>
                                    <div className="list">
                                        <label>Personal Injury Protection (PIP)</label>
                                        <span>$50K</span>
                                    </div>
                                    <div className="list">
                                        <label>Comprehensive Deductible</label>
                                        <span>$250</span>
                                    </div>
                                    <div className="list">
                                        <label>Collision Deductible</label>
                                        <span>N/A</span>
                                    </div>
                                    <div className="list">
                                        <label>Rental Car Coverage</label>
                                        <span>Yes</span>
                                    </div>
                                    <div className="list">
                                        <label>Emergency Road Services</label>
                                        <span>Yes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="close-icon" onClick={this.handleArchivedCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
                    </ReactModal>
                    <OnboardingFooter />
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {}
}

const Row = styled.div`

`
const List = styled.div`

`
const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0px 0px;
`
const Card = styled.div`
border-radius: 10px;
box-shadow: 0 32px 34px 0 rgb(0 0 0 / 12%);
background-color: #ffffff;
margin: 0px 15px 30px;
padding: 30px;
width: calc(33.33% - 30px);
position: relative;
@media (max-width: 992px){
    width: calc(50% - 30px);
}
@media (max-width: 768px){
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    padding: 20px;
}
&.completed-card{
    background-color: #edfff3;
}
&.archived-card{
    background-color: #ededed;
}
`
const CardHeader = styled.div`
  h5{
    font-size: 14px;
    font-family: 'Macho-Semi'!important;
    letter-spacing: 3px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    .font-icon{
        margin-left: 4px;
        font-size: 10px;
    }
  }
  span{
    font-size: 14px;
    margin-top: 0px;
    display: block;
  }
`
const CardContent = styled.div`
  margin-top: 21px;
  margin-bottom: 35px;
  label,span{
      font-family: 'Macho-Medium'!important;
  }
  span{
      padding-left: 3px;
  }
  @media (max-width: 768px){
    margin-top: 10px;
    margin-bottom: 20px;
  }
`
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  .duration{
    font-size: 14px;
    color: #ff5454;
  }
.pending-txt{
    display: flex;
    align-items: center;
    img{
        margin-top: 3px;
        margin-right: 3px;
    }
}
`
export default connect(mapStateToProps)(AgentDashboard)
