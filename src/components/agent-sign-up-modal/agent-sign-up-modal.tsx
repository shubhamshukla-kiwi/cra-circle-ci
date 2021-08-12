import React, { Component } from 'react';
import OnboardingLeft from '../onboarding-left/onboarding-left';
import AgentVerifyEmail from '../agent-verify-email/agent-verify-email';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import uploadPhoto from './../../assets/images/homepage/upload-photo.svg';
import profileDefault from './../../assets/images/homepage/modal-profile.png';

ReactModal.setAppElement('#root');
class AgentSignupModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            showVerifyModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleVerifyModal = this.handleVerifyModal.bind(this);
        this.handleVerifyCloseModal = this.handleVerifyCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleVerifyModal() {
        this.setState({ showVerifyModal: true });
        this.handleCloseModal();
    }
    handleVerifyCloseModal() {
        this.setState({ showVerifyModal: false });
    }
    render() {

        return (
            <div className="signup-wrap screen-container">
                <div className="login-screen">
                    <OnboardingLeft />
                    <div className="right-content">
                        <div className="input-data">
                            <h4>Sign Up</h4>
                            <div className="input-container">
                                    <div className="add-profile-pic">
                                        <div className="add-image">
                                            <img src={uploadPhoto} alt="upload-photo"></img>
                                        </div>
                                        <span>Add Photo</span>
                                    </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input
                                            type="name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input
                                            type="name"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>State/Province</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Zipcode</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Tell us about yourself</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div class="form-group">
                                    <select>
                                        <option value="">Select</option>
                                        <option value="1">Cubicles insurance.co</option>
                                        <option value="2">Cubicles insurance.co</option>
                                    </select>
                                    <label>Company name</label>
                                </div>
                            </div>
                            <div className="custom-checkbox agree-txt">
                                <input type="checkbox" id="style-checkbox" />
                                <label for="style-checkbox">I agree to Seekr’s Terms of service & Privacy Policy.</label>
                            </div>
                            <button className="button-primary" onClick={this.handleOpenModal}>Create a new account</button>
                            <ReactModal
                                isOpen={this.state.showModal}
                                contentLabel="onRequestClose Example"
                                onRequestClose={this.handleCloseModal}
                                shouldCloseOnOverlayClick={false}
                                className="confirm-details-modal agent-confirm-details-modal"
                            >
                                <h4>Please confirm your details</h4>
                                <div className="user-details">
                                    <img src={profileDefault} alt="user"></img>
                                    <h5>Austin McGee</h5>
                                    <span>austinmcGee@gmail.com</span>
                                    <p>1759 Odku Parkway</p>
                                    <p>Delaware, Pacwopkeb</p>
                                </div>
                                <div className="about-me">
                                    <h6>About me</h6>
                                    <p>Enthusiastic about helping people find the best quote. Entre…</p>
                                </div>
                                <div className="co-logo">
                                    <img src=""></img>
                                    <span>Cubicles insurance.co</span>
                                </div>
                                <div className="button-wrap">
                                    <Link to="/sign-up">Make an edit</Link>
                                    <button className="button-primary" onClick={this.handleVerifyModal}>Yes, Confirm</button>
                                </div>
                                <button className="close-icon" onClick={this.handleCloseModal}><span class="icon-cross"><span class="path2"></span></span></button>
                            </ReactModal>

                        </div>
                    </div>
                </div>
                <AgentVerifyEmail
                    showVerifyModal={this.state.showVerifyModal}
                    handleVerifyCloseModal={this.handleVerifyCloseModal}
                />
            </div>
        );
    }
}
export default AgentSignupModal;

