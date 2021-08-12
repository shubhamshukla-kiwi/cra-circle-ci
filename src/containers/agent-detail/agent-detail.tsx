import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import PreferencesIcon from '../../components/svgs/preferences-icon';
import PropsRoute from '../../lib/helpers/props-route';

import AgentPreferences from './agent-preferences';
import './agent-detail.css';

// const childFactoryCreator = (classNames) => (child) =>
//   React.cloneElement(child, {
//     classNames,
//   });

class AgentDetail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.routes = ['/new-car/preferences', '/new-car/preferences/confirm'];
  //   const initialTransitionKey = this.routes.includes(
  //     this.props.location.pathname
  //   )
  //     ? this.props.location.pathname
  //     : this.routes[0];
  //   this.state = {
  //     transitionClassName: 'slide-left',
  //     transitionKey: initialTransitionKey,
  //   };
  // }

  // componentDidMount() {
  //   localStorage.setItem('formProgressPathname', window.location.pathname);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.location.pathname !== nextProps.location.pathname) {
  //     const transitionKey = this.routes.includes(nextProps.location.pathname)
  //       ? nextProps.location.pathname
  //       : this.state.transitionKey;
  //     const transitionClassName =
  //       this.routes.indexOf(this.props.location.pathname) <
  //       this.routes.indexOf(nextProps.location.pathname)
  //         ? 'slide-left'
  //         : 'slide-right';
  //     this.setState({ transitionClassName, transitionKey });
  //   }
  // }

  render() {
    // const circleRoutes = [
    //   '/new-car/preferences',
    //   '/new-car/preferences/confirm',
    // ];

    return (
      <div className="detail-dashboard">
        {/* <PreferencesIcon className="section-graphic" /> */}
        <TransitionGroup
          // childFactory={childFactoryCreator(this.state.transitionClassName)}
          className="agent-detail-transition-group"
        >
          {/* <CSSTransition
            // classNames={this.state.transitionClassName}
            key={this.state.transitionKey}
            timeout={1000}
          >
            <Switch location={this.props.location}>
              <PropsRoute
                component={AgentPreferences}
                currentDriver={this.props.drivers.currentDriver}
                dispatch={this.props.dispatch}
                drivers={this.props.drivers}
                fieldsEditable={this.props.fieldsEditable}
                path="/new-car/preferences"
                rfqs={this.props.rfqs}
              />
            </Switch>
          </CSSTransition> */}
          <AgentPreferences />
        </TransitionGroup>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     drivers: state.drivers,
//     login: state.login,
//     rfqs: state.rfqs,
//   };
// }

export default AgentDetail;
