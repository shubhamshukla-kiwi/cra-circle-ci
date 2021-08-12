import React, {Component} from 'react';
import onboarding from './../../assets/images/homepage/onboarding.png';

class OnboardingLeft extends Component {
  
    render() {
        
        return (
            <div className="image-container">
                <img src={onboarding} alt="onboarding-screen"></img>
            </div>
        );
    }
}
export default OnboardingLeft;

