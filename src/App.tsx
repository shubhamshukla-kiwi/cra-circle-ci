import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { API_ENDPOINT } from './lib/constants/api';
import HomePage from './containers/home/home';
import Login from './containers/login/login';
import Dashboard from './containers/dashboard/dashboard';
import ComingSoon from './containers/coming-soon/coming-soon';
import SignUp from './containers/sign-up/sign-up'

import NewCar from './containers/new-car/new-car';
import NewCarCongratulations from './containers/new-car-congratulations/new-car-congratulations';
import Oops from './containers/oops/oops';
import Privacy from './containers/privacy/privacy';
import Tos from './containers/tos/tos';
import Otp from './containers/otp/otp';
import DriverDetail from './containers/driver-detail/driver-detail';
import MoreDriverDetail from './containers/driver-detail/more-driver-detail';
import MoreDriverDetailA from './containers/driver-detail/more-driver-detail-a';
import CarDetail from './containers/car-detail/car-detail';
import CarPlan from './containers/car-detail/car-plan';
import CarDetailSuccess from './containers/car-detail/car-detail-success';
import AgentAddCard from './containers/agent-add-card/agent-add-card';
import DashboardEmpty from './containers/dashboard/dashboard-empty';
import AgentSignUp from './containers/agent-sign-up/agent-sign-up';
import AgentDashboard from './containers/agent-dashboard/agent-dashboard';
import AgentPayment from './containers/agent-payment/agent-payment';


import PropsRoute from './lib/helpers/props-route';
import { ZipCodeProvider} from './contexts/ZipCodeContext/ZipCodeContext'
import ROUTES from './routes';

import './App.css';

const childFactoryCreator = (classNames: string) => (child: React.ReactElement) =>
  React.cloneElement(child, {
    classNames,
  });
  interface IRecipeState {
    transitionKey?: boolean;
    currentKey?: string;
    transitionClassName: string;
  }
  
  interface IRecipeProps {
    location: object
    dispatch: Function
  }
class App extends Component<IRecipeProps, IRecipeState> {
  constructor(props: IRecipeProps) {
    super(props);
    this.state = {
      transitionKey: false,
      currentKey: this.props.location.pathname,
      transitionClassName: 'fade',
    };
    localStorage.setItem('API_ENDPOINT', API_ENDPOINT);
  }

  componentWillReceiveProps(nextProps: IRecipeProps) {
    this.setState({ currentKey: nextProps.location.pathname });
    if (
      this.props.location.pathname === '/' &&
      nextProps.location.pathname === '/new-car/drivers'
    ) {
      this.setState({ transitionClassName: 'slide-left' });
    } else if (
      this.props.location.pathname === '/new-car/drivers' &&
      nextProps.location.pathname === '/'
    ) {
      this.setState({ transitionClassName: 'slide-right' });
    } else if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState({ transitionClassName: 'fade' });
    }
  }
  validateRoutes() {
    const routes = ROUTES.map((route) => (
      <Route key={route} exact path={route} render={() => null} />
    ));
    return (
      <Switch location={this.props.location}>
        {routes}
        <Redirect to="/oops" />
      </Switch>
    );
  }

  render() {
    return (
      <div className="app-body">
      <ZipCodeProvider>
        <div className="gradient-overlay" />
        <TransitionGroup
          className="app-body-transition-group"
          childFactory={childFactoryCreator(this.state.transitionClassName)}
        >
          <CSSTransition
            key={this.props.location.pathname.split('/')[1]}
            timeout={1000}
            classNames={this.state.transitionClassName}
          >
            <div className="switch-container">
              {this.validateRoutes()}
              <Switch location={this.props.location}>
                <PropsRoute
                  exact
                  path="/"
                  component={HomePage}
                  fetchZip={()=> {}}
                  setEmail={()=> {}}
                />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new-car" component={NewCar} />
                <Route path="/coming-soon" component={ComingSoon} />
                {/* <Route path="/confirm/:token" component={ConfirmEmail} /> */}
                <Route
                  exact
                  path="/congratulations"
                  component={NewCarCongratulations}
                />
                <Route exact path="/oops" component={Oops} />
                <PropsRoute exact path="/tos" component={Tos} static />
                <Route exact path="/privacy" component={Privacy} />
                <Route path="/otp" component={Otp} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/driver-detail" component={DriverDetail} />
                <Route path="/more-driver-detail" component={MoreDriverDetail} />
                <Route path="/more-driver-detail-a" component={MoreDriverDetailA} />
                <Route path="/car-detail" component={CarDetail} />
                <Route path="/car-plan" component={CarPlan} />
                <Route path="/car-detail-success" component={CarDetailSuccess} />
                <Route path="/agent-add-card" component={AgentAddCard} />
                <Route path="/dashboard-empty" component={DashboardEmpty} />
                <Route path="/agent-sign-up" component={AgentSignUp} />
                <Route path="/agent-dashboard" component={AgentDashboard} />
                <Route path="/agent-payment" component={AgentPayment} />
                </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
        </ZipCodeProvider>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(App));
