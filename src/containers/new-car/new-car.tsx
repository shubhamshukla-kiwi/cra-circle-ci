import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';


import AgentDetail from '../agent-detail/agent-detail';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

import './new-car.css';

class NewCar extends Component {
  constructor(props) {
    super(props);
    this.handleUnload = this.handleUnload.bind(this);
    this.state = {
      activeTab: 0,
      tabs: ['start', 'drivers', 'vehicles', 'preferences', 'quotes'],
      selectedDriver: null,
      fieldsEditable: true,
    };
    // this.props.dispatch(fetchMakes());
    // this.props.dispatch(getUserPackagesRequest());
    // this.props.dispatch(getAccidentsRequest());
    // this.props.dispatch(getUserQuestionsRequest());
    // this.props.dispatch(getCompaniesRequest());
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUnload);
  }

  handleUnload(e) {
    this.props.dispatch(
      droppedConnection({ token: this.props.rfqs.rfqs.attributes.token })
    );
    const confirmationMessage = '';
    e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    return confirmationMessage; // Gecko, WebKit, Chrome <34
  }

  handleSelectTab(tab) {
    this.setState({
      activeTab: this.state.tabs.findIndex((itab) => itab === tab),
    });
  }

  handleMoveForward() {
    this.setState({ activeTab: this.state.activeTab + 1 });
  }

  handleMoveBackward() {
    this.setState({ activeTab: this.state.activeTab - 1 });
  }

  handleSelectExisting(car) {
    // TODO: something is not right here
    // car-list component expects selectExisting() to accept driver as argument, not car
    this.setState({ car: car, activeTab: 1 });
  }

  handleResendEmailConfirmation() {
    this.props.dispatch(
      resendEmailConfirmationRequest({
        token: this.props.rfqs.rfqs.attributes.token,
      })
    );
  }

  fetchZip(zip) {
    this.props.dispatch(fetchZip({ zip }));
  }

  displayDrawerHidden() {
    return this.props.location.pathname.split('/')[2] === 'start';
  }

  render() {
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
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    drawerState: state.drawerState,
    drivers: state.drivers,
    loggedIn: state.login.loggedIn,
    login: state.login,
    loginRequested: state.login.loginRequested,
    quotes_request: state.quotes_request,
    rfqs: state.rfqs,
    session: state.session,
    zip: state.zip,
  };
}

export default withRouter(connect(mapStateToProps)(NewCar));
