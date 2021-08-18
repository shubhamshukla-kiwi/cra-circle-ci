import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Formik, ErrorMessage, FieldArray } from 'formik';
import './driver-detail.css';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import cross from '../../assets/images/homepage/cross.svg';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import { DatePicker } from '@material-ui/pickers';
import { MenuItem, TextField } from '@material-ui/core';
import { driverViolationSchema } from '../../constants/formikSchemaValidation';
import { connect } from 'react-redux';
import { saveDriverViolationsInfo } from '../../actions/onboarding/driver.action';

interface Props {

}

const initialDriverDetailValues = {
    noViolation: '',
    violations: [{
        addNew: false,
        labelTitle: 'Mention any accident occured',
        category: '',
        year: null
    }, {
        addNew: false,
        labelTitle: 'Has there been a violation?',
        category: '',
        year: null
    }, {
        addNew: false,
        labelTitle: 'Any other incident?',
        category: '',
        year: null
    },]
}

export class Violation {
    constructor() {
        this.labelTitle = '';
        this.year = null;
        this.category = '';
        this.addNew = true;
    }
}

const comapnies = [
    {
        value: 'CA',
        image: 'https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/24/twitter-icon.png',
        label: 'CA',
    },
    {
        value: 'AUS',
        image: 'https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/24/twitter-icon.png',
        label: 'AUS',
    }
];

const DriverViolations = (props: Props) => {
    const history = useHistory();
    const { id }= useParams();
    return (
        <div className="driver-detail-dashboard">
            <div className="new-car-container">
                <div className="onboard-container">
                    <OnboardHeader />
                    <div className="navigation-section">
                        <TabNavigator />
                        <div className="detail-dashboard driver-incident-details-wrapper">
                            <TransitionGroup className="driver-detail-transition-group">
                                <>
                                    <div className="header-container-row">
                                        <span className="icon-back-arrow font-icon"></span>
                                        <h4>Accidents/Moving Violations</h4>
                                    </div>
                                    <Formik
                                        initialValues={initialDriverDetailValues}
                                        validationSchema={driverViolationSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            const data = {index: id, data: values}
                                            props.dispatch(saveDriverViolationsInfo(data))
                                            history.push(`/car-detail`)
                                        }}
                                        render={({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => {
                                            return (
                                                <form>
                                                    <div className="check-driver-details">
                                                        <p>Check if Adrian has had no violations in the past 5 years</p>
                                                        <div className="form-group custom-radio-btn">
                                                            <input
                                                                type="checkbox"
                                                                name="noViolation"
                                                                onChange={handleChange}
                                                                value={values.noViolation}
                                                                id="check"
                                                            />
                                                            <label htmlFor="check"></label>
                                                        </div>
                                                    </div>
                                                    <FieldArray
                                                        name="violations"
                                                        render={({ insert, remove, push }) => (
                                                            <>
                                                                {values.violations.map((item, index) => (
                                                                    <div className="detail-list" key={index}>
                                                                        <div className="header-top">
                                                                            {!item.addNew && <h4>{item.labelTitle}</h4>}
                                                                            {item.addNew && <TextField
                                                                                type="text"
                                                                                name={`driverDetail.${index}.labelTitle`}
                                                                                className={`form-control`}
                                                                                placeholder='Add other information'
                                                                                onChange={(event) => {
                                                                                    setFieldValue(`violations.${index}.labelTitle`, event.target.value)
                                                                                }}
                                                                                InputProps={{ disableUnderline: true }}
                                                                                value={values.violations[index].labelTitle}
                                                                            />}
                                                                            <span className="more-txt" onClick={() => push(new Violation())}>Add more</span>
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <div className="form-group calendar-col">
                                                                                <DatePicker
                                                                                    className={`form-control ${errors.violations && errors.violations[index] && errors.violations[index].year ? 'error' : ''}`}
                                                                                    label="Year"
                                                                                    name={`violations.${index}.year`}
                                                                                    onChange={(value) => {
                                                                                        setFieldValue(`violations.${index}.year`, value)
                                                                                    }}
                                                                                    InputProps={{ disableUnderline: true }}
                                                                                    value={values.violations[index].year}
                                                                                    format="MM/dd/yyyy"
                                                                                />
                                                                                <span className="error-msg"><ErrorMessage name={`violations.${index}.year`} /></span>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <TextField
                                                                                    select
                                                                                    className={`form-control ${errors.violations && errors.violations[index] && errors.violations[index].category ? 'error' : ''}`}
                                                                                    label="Category"
                                                                                    name={`violations.${index}.category`}
                                                                                    onChange={handleChange}
                                                                                    value={values.violations[index].category}
                                                                                    InputProps={{ disableUnderline: true }}>
                                                                                    {comapnies.map((option) => (
                                                                                        <MenuItem key={option.value} value={option.value}>
                                                                                            {option.label}
                                                                                        </MenuItem>
                                                                                    ))}
                                                                                </TextField>
                                                                                <span className="error-msg"><ErrorMessage name={`violations.${index}.category`} /></span>
                                                                            </div>
                                                                            <div onClick={() => remove(index)} className="delete-spn">
                                                                                <img alt="delete" src={cross}></img>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        )}
                                                    />
                                                    <div className="btn-selection">
                                                        <Link onClick={handleSubmit} className="button-transparent" to="/">Save & add another driver</Link>
                                                        <Link onClick={handleSubmit} className="button-primary" to="/car-detail">Proceed to next step</Link>
                                                    </div>
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

export default connect(mapStateToProps)(DriverViolations);
