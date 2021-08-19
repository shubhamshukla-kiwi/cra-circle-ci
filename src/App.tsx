import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

import { API_ENDPOINT } from './lib/constants/api';
import HomePage from './containers/home/home';
import Login from './containers/login/login';
import ComingSoon from './containers/coming-soon/coming-soon';
import SignUp from './containers/sign-up/sign-up'

import NewQuote from './containers/new-quote/new-quote';
import NewCarCongratulations from './containers/new-car-congratulations/new-car-congratulations';
import Oops from './containers/oops/oops';
import Privacy from './containers/privacy/privacy';
import Tos from './containers/tos/tos';
import Otp from './containers/otp/otp';
import CarDetailSuccess from './containers/car-detail/car-detail-success';
import AgentAddCard from './containers/agent-add-card/agent-add-card';
import DashboardEmpty from './containers/dashboard/dashboard-empty';
import AgentSignUp from './containers/agent-sign-up/agent-sign-up';
import AgentDashboard from './containers/agent-dashboard/agent-dashboard';
import AgentPayment from './containers/agent-payment/agent-payment';


import PropsRoute from './lib/helpers/props-route';
import { ZipCodeProvider} from './contexts/ZipCodeContext/ZipCodeContext'
import ROUTES from './routes';

import './App.scss';
import ProtectedRoute from './components/common/protectedRoute';
import ScrollToTop from './components/common/scrollToTop';
import AddDriver from './containers/driver-detail/add-driver/add-driver';
import AddVehicle from './containers/car-detail/add-vehicle/addVehicle';
import { createTheme, MuiThemeProvider } from '@material-ui/core';

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

  const theme = createTheme({
    overrides: {
      MuiSelect: {
        select: {
          "&:focus": {
            "background-color": "#fff"
          }
        }
      }
    }
  });
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
      <MuiThemeProvider theme={theme}>  
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
              <ScrollToTop />
              <Switch location={this.props.location}>
                <PropsRoute
                  exact
                  path="/"
                  component={HomePage}
                  fetchZip={()=> {}}
                  setEmail={()=> {}}
                />
                <Route path="/login" component={Login} />
                <Route
                      path="/new-quote"
                      render={({ match: { url } }) => (
                        <>
                          <Route path={`${url}/`} component={NewQuote} exact />
                          <Route path={`${url}/drivers`} component={AddDriver} />
                          <Route path={`${url}/vehicles`} component={AddVehicle} />
                        </>
                      )}
                    />
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
                <Route path="/sign-up" component={SignUp} />
                <Route path="/car-detail-success" component={CarDetailSuccess} />
                <Route path="/agent-add-card" component={AgentAddCard} />
                <ProtectedRoute path="/dashboard" component={DashboardEmpty} />
                <Route path="/agent-sign-up" component={AgentSignUp} />
                <Route path="/agent-dashboard" component={AgentDashboard} />
                <Route path="/agent-payment" component={AgentPayment} />
                </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
        </MuiPickersUtilsProvider>
        </MuiThemeProvider>
        </ZipCodeProvider>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(App));
