import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { openDrawer } from '../../actions/drawers.js';
import { userRequestContactRequest } from '../../actions/quotes';
import AgentList from '../agent-list/agent-list.js';
import Cdate from '../../lib/helpers/Cdate.js';
import ContactMe from '../contact-me/contact-me';
import DealIcon from '../../components/svgs/deal-icon';
import DetailsDrawer from '../details-drawer/details-drawer.js';
import InsurerSummary from '../../components/insurer-summary/insurer-summary.js';

import './customer-dashboard-main.css';

class CustomerDashboardMain extends Component {
  constructor(props) {
    super(props);
    var future_state;
    if (this.props.rfqs.rfqs.attributes.available_at) {
      var endTime = Cdate.timestampFromTimestamp(
        this.props.rfqs.rfqs.attributes.available_at
      );
      var startTime = endTime - 86400;

      var currentTime = Math.floor(Date.now() / 1000);
      var seconds = endTime - currentTime;
      const hours = Math.floor(seconds / 3600);

      const minutes = Math.floor((seconds - hours * 3600) / 60);
      const promiseDate = Cdate.shortDateFromTimestamp(
        this.props.rfqs.rfqs.attributes.available_at
      ).replace(' ', '. ');

      if (seconds < 0) {
        future_state = {
          days: false,
          hours: hours,
          minutes: minutes,
          currentTime: seconds,
          startTime: startTime,
          endTime: endTime,
          contactMe: true,
          promiseDate: promiseDate,
        };
      } else if (seconds > 86400) {
        future_state = {
          days: true,
          time: Cdate.fullTimeFromTimestamp(
            this.props.rfqs.rfqs.attributes.available_at
          ),
          contactMe: false,
          hours: hours,
          minutes: minutes,
          currentTime: seconds,
          startTime: startTime,
          endTime: endTime,
          promiseDate: promiseDate,
        };
      } else {
        future_state = {
          days: false,
          hours: hours,
          minutes: minutes,
          currentTime: seconds,
          startTime: startTime,
          endTime: endTime,
          contactMe: false,
          promiseDate: promiseDate,
        };
      }
    }

    this.state = {
      ...future_state,
      active: true,
      drawer: '',
      selected_quote: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rfqs.rfqs.attributes.available_at) {
      this.setTimeLeft(nextProps.rfqs.rfqs.attributes.available_at);
    }
  }

  setTimeLeft(available_at) {
    var endTime = Cdate.timestampFromTimestamp(available_at);
    var startTime = endTime - 86400;

    var currentTime = Math.floor(Date.now() / 1000);
    var seconds = endTime - currentTime;
    const hours = Math.floor(seconds / 3600);

    const minutes = Math.floor((seconds - hours * 3600) / 60);

    if (seconds < 0) {
      this.setState({
        days: false,
        hours: hours,
        minutes: minutes,
        currentTime: seconds,
        startTime: startTime,
        endTime: endTime,
        contactMe: true,
      });
    } else if (seconds > 86400) {
      this.setState({
        days: true,
        time: Cdate.fullTimeFromTimestamp(available_at),
        contactMe: false,
        hours: hours,
        minutes: minutes,
        currentTime: seconds,
        startTime: startTime,
        endTime: endTime,
      });
    } else {
      this.setState({
        days: false,
        hours: hours,
        minutes: minutes,
        currentTime: seconds,
        startTime: startTime,
        endTime: endTime,
        contactMe: this.state.contactMe,
      });
    }
  }

  handleContactMe(quote) {
    this.setState({ drawer: 'contact', selected_quote: quote });
    this.props.dispatch(openDrawer('REQUEST TO BE CONTACTED'));
  }

  handleContactMeRequest(quote) {
    this.props.dispatch(userRequestContactRequest(quote));
  }

  handleSelectInsurer() {
    this.setState({ drawer: 'insurer' });
    this.props.dispatch(openDrawer('INSURER_SUMMARY'));
  }

  toggleHelp() {
    this.setState({ active: !this.state.active });
  }

  drawer() {
    switch (this.state.drawer) {
      case 'insurer':
        return <InsurerSummary />;
      case 'contact':
        return (
          <ContactMe
            quote={this.state.selected_quote}
            contactMe={this.handleContactMeRequest.bind(this)}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="customer-dashboard-main">
        {this.state.contactMe ? (
          <div className="header-container">
            <DealIcon className="section-graphic" />
            <h1>Hurray! Your quotes are here.</h1>
            <p>
              Take your time. Reach out to the agents whenever you are ready.
            </p>
          </div>
        ) : (
          <div className="header-container waiting">
            <h1>
              Your quotes will be here by <br /> end of day{' '}
              {this.state.promiseDate}
            </h1>
            <p>We&#39;ve submitted your information to agents.</p>
            <p>
              Once the agents have prepared their quotes, we’ll narrow it down
              to the best 5 based on your preferences. In the mean time, relax.
              We will contact you once your quotes are ready.
            </p>
          </div>
        )}
        <AgentList
          contactMe={this.state.contactMe}
          // contactMe={true}
          handleContactMe={this.handleContactMeRequest.bind(this)}
          handleSelectInsurer={this.handleSelectInsurer.bind(this)}
          startTime={this.state.startTime}
          endTime={this.state.endTime}
        />
        <DetailsDrawer>{this.drawer()}</DetailsDrawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginRequested: state.login.loginRequested,
    loggedIn: state.login.loggedIn,
    rfqs: state.rfqs,
  };
}

export default withRouter(connect(mapStateToProps)(CustomerDashboardMain));
