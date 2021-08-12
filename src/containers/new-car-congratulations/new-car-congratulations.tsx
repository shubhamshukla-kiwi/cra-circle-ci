import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import cupcake from '../../assets/images/cupcake.png';
import logo from './../../assets/images/seekr-logo.png';

import './new-car-congratulations.css';

class NewCarCongratulations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      load: false,
    };

    setTimeout(() => {
      this.setState({ load: true });
    }, 1.2);

    setTimeout(() => {
      this.setState({ load: true });
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 4500);
    }, 1200);
  }

  setRedirect() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 6.8);
  }

  loadBar() {
    setTimeout(() => {
      this.setState({ load: true });
    }, 1.2);
  }

  render() {
    const load = this.state.load ? 'load' : null;
    return (
      <div className="congratulations-container">
        <img className="loginLogo" src={logo} alt="logo" />
        {this.state.redirect ? <Redirect to="/dashboard" /> : null}
        <img alt="" src={cupcake} className="cupcake" />
        <h1>Well done!</h1>
        <p>We are searching for 10 agents that best fit your preferences</p>
        <div className="loading-bar-container">
          <div className={`loading-bar ${load}`} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
    rfqs: state.rfqs,
  };
}

export default connect(mapStateToProps)(NewCarCongratulations);
