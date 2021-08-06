import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import { API_ENDPOINT } from './lib/constants/api';
import HomePage from './containers/home/home';
import PropsRoute from './lib/helpers/props-route';
import ROUTES from './routes';

import './App.css';

const childFactoryCreator = (classNames: string) => (child: any) =>
  React.cloneElement(child, {
    classNames,
  });
  interface IRecipeState {
    transitionKey?: boolean;
    currentKey?: string;
    transitionClassName: string;
  }
  
  interface IRecipeProps {
    location: any
    dispatch: Function
  }
class App extends Component<IRecipeProps, IRecipeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      transitionKey: false,
      currentKey: this.props.location.pathname,
      transitionClassName: 'fade',
    };
    localStorage.setItem('API_ENDPOINT', API_ENDPOINT);
  }

  componentWillReceiveProps(nextProps: any) {
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
                </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(App));
