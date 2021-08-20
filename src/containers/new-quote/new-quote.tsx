import { connect } from 'react-redux';
import { Switch, withRouter, Route, useRouteMatch, useHistory } from 'react-router-dom';

import AgentDetail from '../agent-detail/agent-detail';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import AddDriver from '../driver-detail/add-driver/add-driver';
import AddVehicle from '../car-detail/add-vehicle/addVehicle';

import './new-quote.css';
import { useState } from 'react';


interface Props {
  
}

const NewQuote = (props: Props) => {
  let { path } = useRouteMatch();
  const history = useHistory();
  let [passedData, setPassedData] = useState(null);
  const getData = (data, index, route) => {
        setPassedData({...data, index: index});
        history.push(route);
  }
  return (<>
    <div className="new-car-container">
      {/* <Header /> */}
      <div className="onboard-container">
          <OnboardHeader />
          <div className="navigation-section">
          <TabNavigator getData={getData}/>
          <Switch>
              <Route path={path} exact>
                <AgentDetail />
                </Route>
              <Route path={`${path}/drivers`}>
                <AddDriver passedData={passedData} />
                </Route>
              <Route path={`${path}/vehicles`}  >   
                <AddVehicle passedData={passedData} />
              </Route>          
          </Switch>
          </div>
          <OnboardingFooter />
      </div>
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
}

export default withRouter(connect(mapStateToProps)(NewQuote));
