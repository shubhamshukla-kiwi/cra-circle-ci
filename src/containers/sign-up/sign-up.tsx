import React from 'react';
import SignupModal from '../../components/sign-up-modal/sign-up-modal';
import OnboardingHeader from '../../components/onboarding-header/onboarding-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

export const SignUp = () => (
  <div className="login signup-section">
    <OnboardingHeader
      showSignin={true}
    />
    <SignupModal />
    <OnboardingFooter />
  </div>

);

export default SignUp;
