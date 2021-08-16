import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { withRouter, Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import OnboardingLeft from '../onboarding-left/onboarding-left';
import { saveEmail } from '../../actions';
import { isClient } from '../../utils';
import { OTPLoginSchema } from '../../constants/formikSchemaValidation';
import { initialLoginValue } from '../../constants/formikValue';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.saveData = this.saveData.bind(this);
    }
    isClientUser = isClient();

    saveData(email) {
    this.props.dispatch(saveEmail(email))
    localStorage.setItem('isAuthenticated', true);
    }
    navigate = () => {
        if(this.isClientUser) {
            this.props.history.push('/otp');
        } else {
            this.props.history.push('/agent/otp');
        }
    }

    render() {
        return (
            <Formik
                initialValues={initialLoginValue}
                validationSchema={OTPLoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    this.saveData(values.email);
                    this.navigate();
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
            <div className="login-modal screen-container">
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
                                    <TextField
                                        label="Email Address"
                                        value={values.email}
                                        name="email"
                                        onChange={handleChange}
                                        InputProps={{ disableUnderline: true }}
                                        type="email"
                                        className={`form-control ${!errors.email ? '' : 'error'}`}
                                        />
                                 <span className="error-msg"><ErrorMessage name="email" /></span>
                                </div>
                            </div>
                            {this.isClientUser && <Link onClick={handleSubmit} className="button-primary" to="/otp">
                                Sign In via OTP
                            </Link>}
                            {!this.isClientUser && <Link onClick={handleSubmit} className="button-primary" to="/agent/otp">
                                Sign In via OTP
                            </Link>}
                        </div>
                    </div>
                </div>
            </div>)}
            </Formik>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(LoginModal));
