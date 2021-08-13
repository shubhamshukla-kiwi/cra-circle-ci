import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { API_ENDPOINT } from './lib/constants/api';
import Login from './containers/login/login';

import AgentAddCard from './containers/agent-add-card/agent-add-card';
import AgentSignUp from './containers/agent-sign-up/agent-sign-up';
import AgentDashboard from './containers/agent-dashboard/agent-dashboard';
import AgentPayment from './containers/agent-payment/agent-payment';
import Otp from './containers/otp/otp';


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
class AgentApp extends Component<IRecipeProps, IRecipeState> {
  constructor(props: IRecipeProps) {
    super(props);
    this.state = {
      transitionKey: false,
      currentKey: this.props.location.pathname,
      transitionClassName: 'fade',
    };
    localStorage.setItem('API_ENDPOINT', API_ENDPOINT);
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
                <Route path="/agent/agent-add-card" component={AgentAddCard} />
                <Route exact path="/agent" component={AgentSignUp} />
                <Route path="/agent/login" component={Login} />
                <Route path="/agent/agent-dashboard" component={AgentDashboard} />
                <Route path="/agent/agent-payment" component={AgentPayment} />
                <Route path="/agent/otp" component={Otp} />
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

export default withRouter(connect(mapStateToProps)(AgentApp));
