import { otpValidationSchema } from '../../constants/formikSchemaValidation';
import { isClient } from '../../utils';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import './otp.scss';
import { initialOTPValue } from '../../constants/formikValue';
interface Props {
    isVerify: boolean;
    email: string;
    handleVerifyCloseModal: Function
}

const onKeyPressFn = (event) => {
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    form.elements[index + 1]?.focus();
    event.preventDefault();
}

const regex = /^[0-9]$/;

const OTPComponent = ({isVerify, email, handleVerifyCloseModal, goBack}: Props) => {
    const history = useHistory();
    const isClientUser = isClient();
    return (
        <>
            <Formik
                initialValues={initialOTPValue}
                validationSchema={otpValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    if(handleVerifyCloseModal) {
                        handleVerifyCloseModal();
                    }
                    setSubmitting(false);
                    if (isClientUser) {
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
                    setFieldValue
                }) => (
                        <form className="input-data">
                            {!isVerify && <span onClick={goBack} className="icon-back-arrow font-icon"></span>}
                            {isVerify?  <h4>Verify your email address</h4>: <h4>OTP VERIFICATION</h4>}
                            <p>We just emailed a six-digit code to <span className="mail-link">{email}</span></p>
                            <p>Please enter the code below to sign in.</p>
                            <div className="input-container">
                                <div className="form-group">
                                    <div className="otp-password">
                                        <div className="input-list">
                                            <input
                                                type="text"
                                                className={`form-control ${isVerify?'':'otp-login-padding'}`}
                                                name="field1"
                                                onChange={e => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    if (regex.test(value.toString())) {
                                                    setFieldValue("field1", value);
                                                    onKeyPressFn(e)
                                                    }
                                                }}
                                                value={values.field1}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className={`form-control ${isVerify?'':'otp-login-padding'}`}
                                                name="field2"
                                                onChange={e => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    if (regex.test(value.toString())) {
                                                    setFieldValue("field2", value);
                                                    onKeyPressFn(e)
                                                    }
                                                }}
                                                value={values.field2}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className={`form-control ${isVerify?'':'otp-login-padding'}`}
                                                name="field3"
                                                onChange={e => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    if (regex.test(value.toString())) {
                                                    setFieldValue("field3", value);
                                                    onKeyPressFn(e)
                                                    }
                                                }}
                                                value={values.field3}
                                                maxLength="1"
                                            />
                                        </div>
                                        <span className="seprator"></span>
                                        <div className="input-list">
                                            <input
                                                type="text"
                                                className={`form-control ${isVerify?'':'otp-login-padding'}`}
                                                name="field4"
                                                onChange={e => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    if (regex.test(value.toString())) {
                                                    setFieldValue("field4", value);
                                                    onKeyPressFn(e)
                                                    }
                                                }}
                                                value={values.field4}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className={`form-control ${isVerify?'':'otp-login-padding'}`}
                                                name="field5"
                                                onChange={e => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    if (regex.test(value.toString())) {
                                                    setFieldValue("field5", value);
                                                    onKeyPressFn(e)
                                                    }
                                                }}
                                                value={values.field5}
                                                maxLength="1"
                                            />
                                            <input
                                                type="text"
                                                className={`form-control ${isVerify?'':'otp-login-padding'}`}
                                                name="field6"
                                                onChange={e => {
                                                    e.preventDefault();
                                                    const { value } = e.target;
                                                    if (regex.test(value.toString())) {
                                                    setFieldValue("field6", value);
                                                    onKeyPressFn(e)
                                                    }
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
                            <button type="submit" className="button-primary" onClick={handleSubmit}>Sign In</button>}
                        </form>)}
            </Formik>
        </>
    )
}

export default OTPComponent;