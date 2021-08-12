import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import MaskedInput from 'react-text-mask';
import React, { Component } from 'react';

import { parseBirthdate } from '../../utils';
import { setFirstDriverCreated } from '../../actions/main-form';
import ConditionalLink from '../../components/conditional-link/conditional-link.js';
import CustomSelect from '../../components/custom-select/custom-select.js';
import Driver from '../../lib/models/driver';
import Rfq from '../../lib/models/quote';
import stateAbbrs from '../../assets/data/states_abbrs.json';
import Validator from '../../lib/helpers/validator';

import './driver-detail.css';

class DriverDetailA extends Component {
  currentDriverSnapshot = null;

  constructor(props) {
    super(props);
    this.state = {
      birthdateValid: true,
      emailValid: true,
    };
  }

  componentWillMount() {
    this.currentDriverSnapshot = Object.assign(
      {},
      this.props.drivers[this.props.currentDriver]
    );
  }

  componentDidMount() {
    localStorage.setItem('formProgressPathname', window.location.pathname);
  }

  componentWillUnmount() {
    this.props.updateUserDriverRequest();
  }

  handleInputChange(event) {
    this.props.updateDriver(event);
  }

  handleDateChange(event) {
    this.props.updateDriver(event);
  }

  handleSubmitDriver() {
    if (!this.props.formProgress.firstDriverCreated) {
      this.props.dispatch(setFirstDriverCreated());
    }
  }

  validateEmail = () => {
    if (
      Validator.validateEmail(
        this.props.drivers[this.props.currentDriver].data.attributes.email
      )
    ) {
      this.setState({ emailValid: true });
    } else {
      this.setState({ emailValid: false });
    }
  };

  validateBD = () => {
    const birthdate = this.props.drivers[this.props.currentDriver].data
      .attributes.birthdate;
    const mainValidation = Validator.validateBirthdate(
      this.props.drivers[this.props.currentDriver].data.attributes.birthdate
    );

    const homeOwnershipStatus = this.props.drivers[this.props.currentDriver]
      .data.attributes.home_ownership_status;

    const minimumAge = homeOwnershipStatus === 'Own' ? 18 : 16;

    const dateFormat = 'mm/dd/yyyy'.toUpperCase(); // Transformed to uppercase so moment can translate correctly
    const { diff: age } = parseBirthdate(birthdate, dateFormat);
    const ageIsValid = age >= minimumAge && age <= 99;

    if (mainValidation && ageIsValid) {
      this.setState({ birthdateValid: true });
    } else {
      this.setState({ birthdateValid: false });
    }
  };

  get finished() {
    const attrs = this.props.drivers[this.props.currentDriver].data.attributes;

    const home_ownership =
      this.props.currentDriver === 0 ? attrs.home_ownership_status : true;

    if (!this.state.emailValid || !this.state.birthdateValid) return false;
    const addressFinished =
      attrs.email && attrs.address && attrs.city && attrs.state && attrs.zip;
    const restFinished =
      attrs.first_name &&
      attrs.last_name &&
      attrs.gender &&
      attrs.license_number &&
      attrs.license_state &&
      attrs.birthdate &&
      attrs.current_insurance &&
      home_ownership &&
      !this.props.transitioning;
    return this.firstDriver ? addressFinished && restFinished : restFinished;
  }

  get firstDriver() {
    const firstDriver = this.props.drivers.find((driver) => driver);
    if (!firstDriver) {
      return true;
    }
    return (
      firstDriver.data.id ===
      this.props.drivers[this.props.currentDriver].data.id
    );
  }

  firstNameInput() {
    return (
      <input
        className="driver-detail-text-input"
        type="text"
        name="first_name"
        placeholder="First Name"
        autoComplete="off"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes
            .first_name
        }
        onChange={this.handleInputChange.bind(this)}
      />
    );
  }

  lastNameInput() {
    return (
      <input
        className="driver-detail-text-input"
        type="text"
        name="last_name"
        placeholder="Last Name"
        autoComplete="off"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes.last_name
        }
        onChange={this.handleInputChange.bind(this)}
      />
    );
  }

  emailInput() {
    const valid = this.state.emailValid ? 'valid' : 'invalid';
    return (
      <input
        className={`driver-detail-text-input email-input ${valid}`}
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="off"
        onBlur={this.validateEmail.bind(this)}
        value={
          this.props.drivers[this.props.currentDriver].data.attributes.email ||
          this.props.defaultEmail
        }
        onChange={this.handleInputChange.bind(this)}
      />
    );
  }

  addressInput() {
    return (
      <input
        className="driver-detail-text-input"
        type="text"
        name="address"
        placeholder="Address"
        autoComplete="off"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes.address
        }
        onChange={this.handleInputChange.bind(this)}
      />
    );
  }

  address2Input() {
    return (
      <input
        className="driver-detail-text-input"
        type="text"
        name="address2"
        placeholder="Address 2"
        autoComplete="off"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes.address2
        }
        onChange={this.handleInputChange.bind(this)}
      />
    );
  }

  homeOwnership() {
    return (
      <CustomSelect
        className="driver-detail-text-input home-ownership"
        type="text"
        name="home_ownership_status"
        placeholder="Home Ownership"
        autoComplete="off"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes
            .home_ownership_status
        }
        onChange={this.handleInputChange.bind(this)}
      >
        <option key={'Own'} value={'Own'}>
          {'Own'}
        </option>
        <option key={'Rent'} value={'Rent'}>
          {'Rent'}
        </option>
        <option key={'Other'} value={'Other'}>
          {'Other'}
        </option>
      </CustomSelect>
    );
  }

  cityInput() {
    return (
      <input
        className="driver-detail-text-input city-input"
        type="text"
        name="city"
        placeholder="City"
        disabled={true}
        value={
          this.props.drivers[this.props.currentDriver].data.attributes.city
        }
        onChange={this.handleInputChange.bind(this)}
        disabled={true}
      />
    );
  }

  stateAbbrs() {
    return stateAbbrs.map((state) => (
      <option key={state.abbreviation} value={state.abbreviation}>
        {state.abbreviation}
      </option>
    ));
  }

  stateInput() {
    return (
      <CustomSelect
        className="driver-detail-text-input state-input"
        name="state"
        placeholder="State"
        disabled={true}
        autoComplete="off"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes.state
        }
        onChange={this.handleInputChange.bind(this)}
        filterType="go-to"
        disabled={true}
      >
        {this.stateAbbrs()}
      </CustomSelect>
    );
  }

  zipInput() {
    return (
      <MaskedInput
        className="driver-detail-text-input zip-input"
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        type="text"
        name="zip"
        disabled={true}
        placeholder="Zip"
        value={this.props.drivers[this.props.currentDriver].data.attributes.zip}
        onChange={this.handleInputChange.bind(this)}
        disabled={true}
      />
    );
  }

  licenseNumberInput() {
    return (
      <input
        className="driver-detail-text-input"
        type="text"
        name="license_number"
        placeholder="Driver's License Number"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes
            .license_number
        }
        onChange={this.handleInputChange.bind(this)}
      />
    );
  }

  licenseStateInput() {
    return (
      <CustomSelect
        className="driver-detail-text-input state-input"
        name="license_state"
        placeholder="State"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes
            .license_state
        }
        onChange={this.handleInputChange.bind(this)}
      >
        {this.stateAbbrs()}
      </CustomSelect>
    );
  }

  birthdateInput() {
    const birthdate = Driver.getBirthdate(
      this.props.drivers[this.props.currentDriver].data.attributes.birthdate
    );

    const value = birthdate === 'birthdate' ? null : birthdate;
    const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy');
    const valid = this.state.birthdateValid ? 'valid' : 'invalid';

    return (
      <MaskedInput
        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
        pipe={autoCorrectedDatePipe}
        keepCharPositions
        placeholderChar={'_'}
        type="text"
        name="birthdate"
        className={`driver-select date-select ${valid}`}
        placeholder="Birthdate (MM/DD/YYYY)"
        value={value}
        onChange={this.handleDateChange.bind(this)}
        onBlur={this.validateBD.bind(this)}
      />
    );
  }

  genders() {
    return [
      <option key="male" value="male">
        Male
      </option>,
      <option key="female" value="female">
        Female
      </option>,
      <option key="nonbinary" value="nonbinary">
        Non-binary
      </option>,
    ];
  }

  genderSelect() {
    return (
      <CustomSelect
        className="selector gender-select"
        name="gender"
        placeholder="Gender"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes.gender
        }
        onChange={this.handleInputChange.bind(this)}
      >
        {this.genders()}
      </CustomSelect>
    );
  }

  insuranceCompanies() {
    // const companies = [
    //   {name: "Other"},
    //   {name: "21st Century"},
    //   {name: "AAA"},
    //   {name: "Allstate"},
    //   {name: "American Family"},
    //   {name: "Amica Mutual"},
    //   {name: "Country Financial"},
    //   {name: "Esurance"},
    //   {name: "Farmers"},
    //   {name: "Geico"},
    //   {name: "Liberty Mutual"},
    //   {name: "Mercury"},
    //   {name: "MetLife"},
    //   {name: "MetroMile"},
    //   {name: "Nationwide"},
    //   {name: "Pemco"},
    //   {name: "Safeco"},
    //   {name: "State Farm"},
    //   {name: "The Hanover"},
    //   {name: "The Hartford"},
    //   {name: "Travelers"},
    //   {name: "USAA"}
    // ]
    const companies = this.props.company_info.companies;
    return companies.map((company) => {
      return (
        <option key={company.attributes.name} value={company.attributes.name}>
          {company.attributes.name}
        </option>
      );
    });
  }

  driverSelect() {
    return (
      <CustomSelect
        className="driver-select"
        id="current-insurance"
        name="current_insurance"
        placeholder="Current Insurance Company"
        autoComplete="off"
        value={
          this.props.drivers[this.props.currentDriver].data.attributes
            .current_insurance
        }
        onChange={this.handleInputChange.bind(this)}
      >
        {this.insuranceCompanies()}
      </CustomSelect>
    );
  }

  render() {
    return (
      <div className="a-screen">
        <div className="header-container">
          <h1>
            {this.firstDriver ? 'Add Primary Driver' : 'Add Additional Driver'}
          </h1>
        </div>
        <div
          className={
            'input-container ' +
            (Rfq.submitted(this.props.rfq) ? 'prevent' : '')
          }
        >
          <form>
            <div className="row">
              {this.firstNameInput()}
              {this.lastNameInput()}
            </div>
            {this.firstDriver && (
              <div>
                <div className="row">{this.emailInput()}</div>
                <div className="row">{this.addressInput()}</div>
                <div className="row">
                  {this.address2Input()}
                  {this.homeOwnership()}
                </div>
              </div>
            )}
          </form>
          {this.firstDriver && (
            <div className="row">
              {this.cityInput()}
              {this.stateInput()}
              {this.zipInput()}
            </div>
          )}
        </div>
        <div className="header-container">
          <h1>License & Insurance</h1>
        </div>
        <div
          className={
            'input-container ' +
            (Rfq.submitted(this.props.rfq) ? 'prevent' : '')
          }
        >
          <div className="row">
            {this.licenseNumberInput()}
            {this.licenseStateInput()}
          </div>
          <div className="row">
            {this.birthdateInput()}
            {this.genderSelect()}
          </div>
          <div className="row">{this.driverSelect()}</div>
        </div>

        <div className="row">
          {Rfq.submitted(this.props.rfq) ? (
            <Link to="/new-car/drivers/more-info" className="button-primary">
              <button className="button-primary">Next</button>
            </Link>
          ) : (
            <div>
              {!this.firstDriver && (
                <Link
                  to="/new-car/drivers/confirm"
                  className="button-secondary"
                >
                  <button
                    className="button-secondary"
                    onClick={() => {
                      this.props.cancelDriver();
                    }}
                  >
                    Cancel
                  </button>
                </Link>
              )}

              <ConditionalLink
                to="/new-car/drivers/more-info"
                disabled={!this.finished}
                onClick={() => this.handleSubmitDriver()}
              >
                <button className="button-primary">Next</button>
              </ConditionalLink>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formProgress: state.formProgress,
    defaultEmail: state.email.email,
    rfq: state.rfqs.rfqs,
  };
}

export default connect(mapStateToProps)(DriverDetailA);
