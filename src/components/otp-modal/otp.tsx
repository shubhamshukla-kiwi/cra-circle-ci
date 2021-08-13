import React, { Dispatch } from 'react'
import { Link } from 'react-router-dom';
import { otpValidationSchema } from '../../constants/app.const';
import { isClient } from '../../utils';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface Props {
    isVerify: boolean;
    dispatch: Dispatch;
    email: string;
}

const onKeyPressFn = (event) => {
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    form.elements[index + 1]?.focus();
    event.preventDefault();
}

const OTPComponent = ({isVerify, dispatch, email}: Props) => {
    const history = useHistory();
    const isClientUser = isClient();
    return (
        <>
            <Formik
                initialValues={{
                    field1: '',
                    field2: '',
                    field3: '',
                    field4: '',
                    field5: '',
                    field6: '',
                }}
                validationSchema={otpValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    if (isClientUser) {
                        // dispatch(registerRequest(userData))
                        history.push("/dashboard");
                    } else {
                        history.push('/agent/agent-dashboard')
                    }

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <form className="input-data">
                            {!isVerify && <span className="icon-back-arrow font-icon"></span>}
                            {isVerify?  <h4>Verify your email address</h4>: <h4>OTP VERIFICATION</h4>}
                            <p>We just emailed a six-digit code to <span className="mail-link">{email}</span></p>
                            <p>Please enter the code below to sign in.</p>
                            <div className="input-container">
                                <div className="form-group">
                                    <div className="otp-password">
                                        <div className="input-list">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field1"
                                                onChange={e => {
                                                    handleChange(e)
                                                    onKeyPressFn(e)
                                                }}
                                                value={values.field1}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field2"
                                                onChange={e => {
                                                    handleChange(e)
                                                    onKeyPressFn(e)
                                                }}
                                                value={values.field2}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field3"
                                                onChange={e => {
                                                    handleChange(e)
                                                    onKeyPressFn(e)
                                                }}
                                                value={values.field3}
                                                maxLength="1"
                                            />
                                        </div>
                                        <span className="seprator"></span>
                                        <div className="input-list">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field4"
                                                onChange={e => {
                                                    handleChange(e)
                                                    onKeyPressFn(e)
                                                }}
                                                value={values.field4}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field5"
                                                onChange={e => {
                                                    handleChange(e)
                                                    onKeyPressFn(e)
                                                }}
                                                value={values.field5}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field6"
                                                onChange={e => {
                                                    handleChange(e)
                                                    onKeyPressFn(e)
                                                }}
                                                value={values.field6}
                                                maxLength="1"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="code-txt">Trouble receiving code? <span>Send again</span></div>
                            </div>
                            {isVerify ? <button type="submit" className="button-primary" onClick={handleSubmit}>Verify</button>:
                            <Link className="button-primary" to="/">Sign In</Link>}
                        </form>)}
            </Formik>
        </>
    )
}
function mapStateToProps (state) {
    return {
        email: state.login.email
      }
}
export default connect(mapStateToProps)(OTPComponent);