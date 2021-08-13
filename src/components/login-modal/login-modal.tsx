import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import OnboardingLeft from '../onboarding-left/onboarding-left';
import { saveEmail } from '../../actions';
import { isClient } from '../../utils';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        var email;
        this.props.email ? (email = this.props.email) : (email = '');
        this.state = {
            password: '',
            password2: '',
            email: email,
            activeScreen: this.props.activeScreen,
            allowSwitch: this.props.allowSwitch,
            failedLogin: false,
            failedRegister: false,
        };
        this.saveData = this.saveData.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    saveData() {
    this.props.dispatch(saveEmail(this.state.email))
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handlePassword2Change(event) {
        this.setState({ password2: event.target.value });
    }

    handleLoginEnter(event) {
        if (event.key === "Enter") {
            this.props.handleLogin(this.state.email, this.state.password);
        }
    }

    handleRegisterEnter(event) {
        if (event.key === "Enter") {
            this.props.handleRegister(this.state.email, this.state.password);
        }
    }

    switchScreens() {
        if (this.state.allowSwitch) {
            switch (this.state.activeScreen) {
                case 'login':
                    this.setState({ activeScreen: 'register', password: '', password2: '' });
                    break;
                case 'register':
                    this.setState({ activeScreen: 'login' });
                    break;
                default:
            }
        }
    }

    passwordValid() {
        if (this.state.password === this.state.password2) {
            return true;
        } else {
            return false;
        }
    }

    getErr() {
        if (this.props.login.err !== undefined) {
            return this.props.login.err[0].detail.split(';').map(error => {
                return <text>{error}</text>
            })
        }
        if (this.props.register.err !== undefined) {
            return this.props.register.err[0].detail.split(';').map(error => {
                return <text>{error}</text>
            })
        }
    }

    render() {
        const isClientUser = isClient();
        return (
            <div
                className="login-modal screen-container"
                data-screen={this.state.activeScreen}
            >
                <div className="login-screen">
                    <OnboardingLeft />
                    <div className="right-content">
                        <div className="input-data">
                            <h4>Sign in</h4>
                            <p>Hi, welcome to seekr</p>
                            <p>Enter your email address and you can use OTP or password to sign in.</p>
                            <div className="input-container">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        value={this.state.email}
                                        onChange={this.handleEmailChange.bind(this)}
                                        type="email"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            {isClientUser && <Link onClick={this.saveData} className="button-primary" to="/otp">
                                Sign In via OTP
                            </Link>}
                            {!isClientUser && <Link onClick={this.saveData} className="button-primary" to="/agent/otp">
                                Sign In via OTP
                            </Link>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(LoginModal));
