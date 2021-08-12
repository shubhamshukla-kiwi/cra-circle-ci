import React from 'react';
import AgentSignupModal from '../../components/agent-sign-up-modal/agent-sign-up-modal';
import OnboardingHeader from '../../components/onboarding-header/onboarding-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';


export const AgentSignUp = () => (
  <div className="login signup-section agent-signup-section">
    <OnboardingHeader
      showSignin={true}
    />
    <AgentSignupModal />
    <OnboardingFooter />
  </div>

);

export default AgentSignUp;
