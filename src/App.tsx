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
import NewQuoteCongratulations from './containers/new-quote-congratulations/new-quote-congratulations';
import Oops from './containers/oops/oops';
import Privacy from './containers/privacy/privacy';
import Tos from './containers/tos/tos';
import NewQuoteSuccess from './containers/car-detail/new-quote-success';

import PropsRoute from './lib/helpers/props-route';
import { ZipCodeProvider} from './contexts/ZipCodeContext/ZipCodeContext'
import {clientRoutes} from './routes';

import './App.scss';
import ProtectedRoute from './components/common/protectedRoute';
import ScrollToTop from './components/common/scrollToTop';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import Dashboard from './containers/dashboard/dashboard';
import { isLoggedIn } from './utils';
import ConfirmEmail from './containers/confirm-email/confirm-email';

const childFactoryCreator = (classNames: string) => (child: React.ReactElement) =>
  React.cloneElement(child, {
    classNames,
  });
  interface IRecipeState {
    transitionKey?: boolean;
    currentKey?: string;
    transitionClassName: string;
    isLoggedIn: boolean;
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
      isLoggedIn: isLoggedIn()
    };
    localStorage.setItem('API_ENDPOINT', API_ENDPOINT);
  }

  validateRoutes() {
    const routes = clientRoutes.map((route) => (
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
                <ProtectedRoute path="/new-quote" component={NewQuote} />
                <Route path="/coming-soon" component={ComingSoon} />
                <Route path="/confirm/:token" component={ConfirmEmail} />
                <ProtectedRoute
                  exact
                  path="/congratulations"
                  component={NewQuoteCongratulations}
                />
                <Route exact path="/oops" component={Oops} />
                <PropsRoute exact path="/tos" component={Tos} static />
                <Route exact path="/privacy" component={Privacy} />
                <Route path="/sign-up" component={SignUp} />
                <ProtectedRoute path="/quote-success" component={NewQuoteSuccess} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
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
