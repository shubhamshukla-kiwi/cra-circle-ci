import React from 'react';
import OnboardingLeft from '../onboarding-left/onboarding-left';
import { connect } from 'react-redux';
import OTPComponent from './otp';

interface Props {
    email : string
}

const OtpModal = (props: Props) => {
    return (
        <div className="otp-wrap screen-container">
                <div className="login-screen">
                    <OnboardingLeft />
                    <div className="right-content">
                        <OTPComponent isVerify={false} />
                        {/* <div className="input-data">
                            <span className="icon-back-arrow font-icon"></span>
    <p>We just emailed a six-digit code to <span className="mail-link">{props.email}</span></p>
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
                        </div> */}
                    </div>
                </div>
            </div>)
}
function mapStateToProps(state) {
    return {
      email: state.login.email
    }
  }
  
export default connect(mapStateToProps)(OtpModal);

