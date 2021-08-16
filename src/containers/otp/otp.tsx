import React from 'react';
import OtpModal from '../../components/otp-modal/otp-modal';
import OnboardingHeader from '../../components/onboarding-header/onboarding-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

export const Otp = () => (
  <div className="login">
    <OnboardingHeader />
    <OtpModal />
    <OnboardingFooter />
  </div>
);

export default Otp;
