import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import OnboardingLeft from '../onboarding-left/onboarding-left';
import { isClient } from '../../utils';
import { OTPLoginSchema } from '../../constants/formikSchemaValidation';
import { initialLoginValue } from '../../constants/formikValue';
import OTPComponent from '../otp/otp';

interface Props {

}
const saveData = (email) => {
    localStorage.setItem('isAuthenticated', true);
}

const LoginModal = (props: Props) => {
    const [activeStep, setActiveStep] = useState(1);
    const [email, setEmail] = useState('');
    const isClientUser = isClient();
    return (
        <div className="login-modal screen-container">
                <div className="otp-wrap">
            <div className="login-screen">
                <OnboardingLeft />
                <div className="right-content">
                    {activeStep === 1 && <Formik
                        initialValues={{ ...initialLoginValue, ...{ email: email } }}
                        validationSchema={OTPLoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(false);
                            saveData(values.email);
                            setEmail(values.email)
                            setActiveStep(2)
                            // navigate(isClientUser, history);
                        }}
                    >
                        {({
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                        }) => (<div className="input-data">
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
                            {isClientUser && <Link onClick={handleSubmit} className="button-primary" to="/otp">
                                Sign In via OTP
                            </Link>}
                            {!isClientUser && <Link onClick={handleSubmit} className="button-primary" to="/agent/otp">
                                Sign In via OTP
                            </Link>}
                        </div>
                            )}
                    </Formik>}
                    {activeStep === 2 && <OTPComponent goBack={()=> {setActiveStep(1)}} email={email} isVerify={false} />}
                </div>
            </div>
            </div>
        </div>
    )
}

export default LoginModal;