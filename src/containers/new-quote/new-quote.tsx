import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AgentDetail from '../agent-detail/agent-detail';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

import './new-quote.css';


interface Props {
  
}

const NewQuote = (props: Props) => {
  return (
    <div className="new-car-container">
      {/* <Header /> */}
      <div className="onboard-container">
        
          <OnboardHeader />
          <div className="navigation-section">
          <TabNavigator/>
          <AgentDetail />
          </div>
          <OnboardingFooter />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
}

export default withRouter(connect(mapStateToProps)(NewQuote));
