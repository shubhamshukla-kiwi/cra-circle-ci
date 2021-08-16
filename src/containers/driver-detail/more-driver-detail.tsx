import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage, FieldArray } from 'formik';
import './driver-detail.css';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import { TextField, MenuItem } from '@material-ui/core';

interface Props {
    
}

const questionAnswerList = [
    {
        question: 'Has the driver lived at the current address for less than 1 year?',
        helperText: '', text: true,
        textLabel: 'If so, what was the previous address?'
    },
    {
        question: 'Did the driver obtain their license in the last 3 years?',
        helperText: '', text: true,
        textLabel: 'If so, what was the previous address?'
    },
    {
        question: 'Profession, Student, or Veteran Discounts?',
        helperText: 'Some insurance companies offer discounts to student, veterans, and some professions.', text: false,
        options: ['22','23','234','56'], optionLabel: 'If yes, at what age?'
    }
]

export const MoreDriverDetail = (props: Props) => {
    return (
        <div className="driver-detail-dashboard">
            <div className="new-car-container">
                <div className="onboard-container">
                    <OnboardHeader />
                    <div className="navigation-section">
                        <TabNavigator />
                        <div className="detail-dashboard moredriver-details-wrapper">
                            <TransitionGroup className="driver-detail-transition-group">
                                <div className="header-container-row">
                                <span className="icon-back-arrow font-icon"></span>
                                    <h4>tell us a bit more about adrian!</h4>
                                </div>
                            <Formik
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false);
                                this.setState({userData: values});
                                this.handleOpenModal();
                            }}
                            render={({ values, errors, touched, handleChange, setFieldValue }) => {
                                return (<form>
                                    <FieldArray
                                    name="friends"
                                    render={({ insert, remove, push }) => (
                                        <>
                                    {questionAnswerList.map((item => (
                                        <div className="detail-list">
                                        <h4>{item.question}</h4>
                                        {item.helperText && <h6>{item.helperText}</h6>}
                                        <div className="select-data">
                                            <div className="form-group custom-radio-btn">
                                                <input type="radio" id="yes" name="radio-group" checked/>
                                                <label htmlFor="yes">Yes</label>
                                            </div>
                                            <div className="form-group custom-radio-btn">
                                                <input type="radio" id="no" name="radio-group"/>
                                                <label htmlFor="no">No</label>
                                            </div>
                                        </div>
                                        {item.text && <div className="form-group">
                                            <label>If so, what was the previous address?</label>
                                            <TextField
                                                    type="text"
                                                    className={`form-control ${!errors.address ? '' : 'error'}`}                                                    name="address"
                                                    onChange={handleChange}
                                                    InputProps={{ disableUnderline: true }}
                                                    label="Address"
                                                     />
                                        <span className="error-msg"><ErrorMessage name="address" /></span>
                                        </div>}
                                        {!item.text && <div className="form-group">
                                            <label>If yes, at what age?</label>
                                            <TextField
                                                    select
                                                    label="State/Province"
                                                    name="state"
                                                    onChange={handleChange}
                                                    InputProps={{ disableUnderline: true }}>
                                                    {item.options.map((option) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                <span className="error-msg"><ErrorMessage name="state" /></span>
                                        </div>}
                                    </div>
                                    )))}</>)}
                                    />
                                    <Link className="button-primary" to="/more-driver-detail-a">Next</Link>
                                </form>)
                            }}
                            />
                            </TransitionGroup>
                        </div>
                    </div>
                    <OnboardingFooter />
                </div>
            </div>

        </div>
    );
}



export default MoreDriverDetail;
