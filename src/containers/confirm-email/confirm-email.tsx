import React, {Component} from 'react';

import {connect} from 'react-redux';
import './confirm-email.css';
import {withRouter, Redirect} from 'react-router-dom';
import LoginModal from '../../components/login-modal/login-modal'
import Loading from '../../components/loading/loading'

import logo from './../../assets/images/seekr-logo.png'

class ConfirmEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 'loading',
        }
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
                    token={this.props.match.params.token}
                    handleLogin={this.requestLogin.bind(this)}
                    handleRegister={this.requestRegister.bind(this)}
                    activeScreen={"register"}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(ConfirmEmail))
