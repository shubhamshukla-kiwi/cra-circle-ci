import React, {Component} from 'react';

import {connect} from 'react-redux';
import './confirm-email.css';
import {withRouter, Redirect} from 'react-router-dom';
import {confirmUserEmail, confirmUserEmailGetEmail} from '../../actions/user.js'
import {loginRequest} from '../../actions/login.js'
import LoginModal from '../../components/login-modal/login-modal.js'
import Loading from '../../components/loading/loading.js'

import logo from './../../assets/images/seekr-logo.png'

class ConfirmEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 'loading',
        }
        this.getEmail();
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.confirmUserEmailGetEmail.requested && nextProps.confirmUserEmailGetEmail.confirmed) {
            this.setState({delay: ''})
        }

        if ((this.props.confirmEmail.confirmed || nextProps.confirmEmail.confirmed) && (this.props.loggedIn || nextProps.loggedIn)) {
            this.setState({delay: 'success'})
        }
    }

    getEmail() {
        this.props.dispatch(confirmUserEmailGetEmail({token: this.props.match.params.token}));
    }


    requestLogin() {
        this.props.dispatch(loginRequest({email: this.props.email, password: this.state.password}));
    }

    requestRegister(email, password) {

        this.props.dispatch(confirmUserEmail({
            email: this.props.email,
            password: password,
            token: this.props.match.params.token
        }));
    }


    render() {
        if (this.state.delay === 'loading') {
            return (<Loading/>)
        } else if (this.state.delay === 'error') {
            return (
                <div>
                    <text>Sorry, something went wrong. Specifically: {this.props.confirmEmail.err.map(error => {
                        return (<text>{error.title}: {error.detail}</text>);
                    })}</text>
                </div>
            )
        }

        return (
            <div className="confirm-email-container">
                <img className="loginLogo" src={logo} alt="logo" />
                {this.state.delay === 'success' ? (<Redirect to='/congratulations'/>) : null}
                <LoginModal
                    email={this.props.confirmUserEmailGetEmail.attributes.email}
                    token={this.props.match.params.token}
                    handleLogin={this.requestLogin.bind(this)}
                    handleRegister={this.requestRegister.bind(this)}
                    activeScreen={"register"}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginRequested: state.login.loginRequested,
        loggedIn: state.login.loggedIn,
        confirmEmail: state.confirmEmail,
        confirmUserEmailGetEmail: state.confirmUserEmailGetEmail,
    }
}

export default withRouter(connect(mapStateToProps)(ConfirmEmail))
