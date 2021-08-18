import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Formik, ErrorMessage, FieldArray } from 'formik';
import './driver-detail.css';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import { TextField, MenuItem } from '@material-ui/core';
import { moreDriverDetailValidationSchema } from '../../constants/formikSchemaValidation';
import { initialDriverDetailValues } from '../../constants/formikValue';
import { Dispatch } from 'redux';
import { saveDriverDetailInfo } from '../../actions/onboarding/driver.action';
import { connect } from 'react-redux';

interface Props {
    dispatch: Dispatch
}

const questionAnswerList = [
    {
        question: 'Has the driver lived at the current address for less than 1 year?',
        helperText: '',
        text: true,
        textLabel: 'If so, what was the previous address?',
        answer: null,
        metaAnswer: '',
        metaAnswerSelect: null,
        options: []
    },
    {
        question: 'Did the driver obtain their license in the last 3 years?',
        helperText: '',
        text: true,
        textLabel: 'If so, what was the previous address?',
        answer: null,
        metaAnswer: '',
        metaAnswerSelect: null,
        options: []
    },
    {
        question: 'Profession, Student, or Veteran Discounts?',
        helperText: 'Some insurance companies offer discounts to student, veterans, and some professions.',
        text: false,
        options: ['22', '23', '234', '56'],
        optionLabel: 'If yes, at what age?',
        answer: null,
        metaAnswerSelect: null,
        metaAnswer: ''
    }
]

export const MoreDriverDetail = (props: Props) => {
    const history = useHistory();
    const { id }= useParams();
    return (
        <div className="driver-detail-dashboard">
            <div className="new-car-container">
                <div className="onboard-container">
                    <OnboardHeader />
                    <div className="navigation-section">
                        <TabNavigator />
                        <div className="detail-dashboard moredriver-details-wrapper">
                            <TransitionGroup className="driver-detail-transition-group">
                                <>
                                    <div className="header-container-row">
                                        <span className="icon-back-arrow font-icon"></span>
                                        <h4>tell us a bit more about adrian!</h4>
                                    </div>
                                    <Formik
                                        initialValues={initialDriverDetailValues}
                                        validationSchema={moreDriverDetailValidationSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            const data = {index: id, data: values}
                                            props.dispatch(saveDriverDetailInfo(data))
                                            history.push(`/driver-violations/${id}`)
                                        }}
                                        render={({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => {
                                            return (<form>
                                                <FieldArray
                                                    name="driverDetail"
                                                    render={({ insert, remove, push }) => (
                                                        <>
                                                            {values.driverDetail.map((item, index) => (
                                                                <div className="detail-list"
                                                                    key={index}>
                                                                    <h4>{questionAnswerList[index].question}</h4>
                                                                    {questionAnswerList[index].helperText && <h6>{questionAnswerList[index].helperText}</h6>}
                                                                    <div className="select-data">
                                                                        <div className="form-group custom-radio-btn">
                                                                            <input
                                                                                type="radio"
                                                                                id={`driverDetail.${index}-yes`}
                                                                                value='Yes'
                                                                                name={`driverDetail.${index}.answer`}
                                                                                onChange={handleChange}
                                                                                checked={values.driverDetail[index].answer === 'Yes'}
                                                                            />
                                                                            <label htmlFor={`driverDetail.${index}-yes`}>Yes</label>
                                                                        </div>

                                                                        <div className="form-group custom-radio-btn">
                                                                            <input
                                                                                id={`driverDetail.${index}-no`}
                                                                                type="radio"
                                                                                onChange={handleChange}
                                                                                value='No'
                                                                                name={`driverDetail.${index}.answer`}
                                                                                checked={values.driverDetail[index].answer === 'No'}
                                                                            />
                                                                            <label htmlFor={`driverDetail.${index}-no`}>No</label>
                                                                        </div>
                                                                    </div>
                                                                    <span className="error-msg"><ErrorMessage name={`driverDetail.${index}.answer`} /></span>
                                                                    {questionAnswerList[index].text && <div className="form-group">
                                                                        <TextField
                                                                            type="text"
                                                                            name={`driverDetail.${index}.metaAnswer`}
                                                                            className={`form-control`}
                                                                            onChange={handleChange}
                                                                            InputProps={{ disableUnderline: true }}
                                                                            label={questionAnswerList[index].textLabel}
                                                                        />
                                                                    </div>}
                                                                    {!questionAnswerList[index].text && <div className="form-group">
                                                                        <label>{questionAnswerList[index].optionLabel}</label>
                                                                        <TextField
                                                                            select
                                                                            defaultValue=""
                                                                            name={`driverDetail.${index}.metaAnswerSelect`}
                                                                            onChange={handleChange}
                                                                            InputProps={{ disableUnderline: true }}>
                                                                            {questionAnswerList[index].options.map((option) => (
                                                                                <MenuItem key={option} value={option}>
                                                                                    {option}
                                                                                </MenuItem>
                                                                            ))}
                                                                        </TextField>
                                                                        <span className="error-msg"><ErrorMessage name={`driverDetail.${index}.metaAnswerSelect`} /></span>
                                                                    </div>}
                                                                </div>
                                                            ))}</>)}
                                                />
                                                <Link onClick={handleSubmit} className="button-primary" to="/more-driver-detail-a">Next</Link>
                                            </form>)
                                        }}
                                    />
                                </>
                            </TransitionGroup>
                        </div>
                    </div>
                    <OnboardingFooter />
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps)(MoreDriverDetail);
