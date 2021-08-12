import React, { Component } from 'react';
import OnboardingLeft from '../onboarding-left/onboarding-left';
import { Link } from 'react-router-dom';

class OtpModal extends Component {

    render() {

        return (
            <div className="otp-wrap screen-container">
                <div className="login-screen">
                    <OnboardingLeft />
                    <div className="right-content">
                        <div className="input-data">
                            <span className="icon-back-arrow font-icon"></span>
                            <h4>OTP VERIFICATION</h4>
                            <p>We just emailed a six-digit code to <span className="mail-link">adrian****90@yahoo.com</span></p>
                            <p>Please enter the code below to sign in.</p>
                            <div className="input-container">
                                <div className="form-group">
                                    <div className="otp-password">
                                        <div className="input-list">
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                        <span className="seprator"></span>
                                        <div className="input-list">
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                            <input
                                                type="number"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="code-txt">Trouble receiving code? <span>Send again</span></div>
                            </div>
                            <Link className="button-primary" to="/">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default OtpModal;

