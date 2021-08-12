import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import OnboardingLeft from '../onboarding-left/onboarding-left';

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
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.login.requested === true &&
            this.props.login.loggedIn === false &&
            nextProps.login.requested === false &&
            nextProps.login.loggedIn === false
        ) {
            this.setState({ failedLogin: true });
        }

        if (
            this.props.register.registerRequested === true &&
            this.props.register.loggedIn === false &&
            nextProps.register.registerRequested === false &&
            nextProps.register.loggedIn === false
        ) {
            this.setState({ failedRegister: true });
        }
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
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
        const disabled = this.passwordValid() ? "" : "disabilly";
        const valid = this.passwordValid() ? "" : "invalid";
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
                            <Link className="button-primary" to="/otp">
                                Sign In via OTP
                            </Link>
                            <Link className="button-transparent" to="/password-login">
                                Sign In via Password
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginRequested: state.login.loginRequested,
        loggedIn: state.login.loggedIn,
        login: state.login,
        register: state.register,
    };
}

export default withRouter(connect(mapStateToProps)(LoginModal));
