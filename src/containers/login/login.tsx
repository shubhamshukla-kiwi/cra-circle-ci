import { connect } from 'react-redux';
import React, { Component } from 'react';

import LoginModal from '../../components/login-modal/login-modal';
import OnboardingHeader from '../../components/onboarding-header/onboarding-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      failedLogin: false,
      failedRegister: false,
      password: '',
      zip: '',
    };
  }

  cartalk() { }

  requestLogin(email, password) {
    this.props.dispatch(loginRequest({ email, password }));
  }

  requestRegister(email, password) {
    this.props.dispatch(registerRequest({ email, password }));
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleZipChange(event) {
    this.setState({ zip: event.target.value });
  }

  render() {
    return (
      <div className="login">
        <OnboardingHeader />
        <LoginModal
          activeScreen="login"
          allowSwitch={false}
          handleLogin={this.requestLogin.bind(this)}
          handleRegister={this.requestRegister.bind(this)}
          user_title="CUSTOMER"
        />
        <OnboardingFooter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.login.loggedIn,
    login: state.login,
    loginRequested: state.login.loginRequested,
    register: state.register,
  };
}

export default connect(mapStateToProps)(Login);
