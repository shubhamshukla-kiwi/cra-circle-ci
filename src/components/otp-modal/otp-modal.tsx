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

