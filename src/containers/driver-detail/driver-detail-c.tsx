import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import React, { Component } from 'react';

import {
  toggleAccidentVerificationCheckbox,
  toggleNoAccidentsCheckbox,
} from '../../actions/drivers';
import Checkbox from '../../components/checkbox/checkbox';
import ConditionalLink from '../../components/conditional-link/conditional-link.js';
import LoadingCircle from '../../components/loading-circle/loading-circle.js';
import MultiSelect from '../../components/multi-select/multi-select.js';
import Rfq from '../../lib/models/quote';

import './driver-detail.css';

class DriverDetailC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accidentDetails: null,
      accidentType: null,
      year: null,
    };
  }

  componentDidMount() {
    localStorage.setItem('formProgressPathname', window.location.pathname);
  }

  handleAccidentTypeChange(event) {
    this.setState({ accidentType: event.target.value });
  }

  handleAccidentDetailsChange(event) {
    this.setState({ accidentDetails: event.target.value });
  }

  handleVerifyCheckbox() {
    this.props.dispatch(
      toggleAccidentVerificationCheckbox({
        driver: this.props.currentDriver,
      })
    );
  }

  handleNoAccidentsCheckbox() {
    this.props.dispatch(
      toggleNoAccidentsCheckbox({
        driver: this.props.currentDriver,
      })
    );
  }

  multiSelectClassName() {
    let className = '';
    if (this.props.drivers[this.props.currentDriver].data.noAccidentsCheckbox) {
      className = 'prevent';
    }
    if (
      this.props.drivers[this.props.currentDriver].data
        .accidentVerificationCheckbox &&
      this.currentDriverAccidents.length > 0
    ) {
      className = 'prevent';
    }
    return className;
  }

  removeAccident(accident) {
    this.props.removeAccident(accident);
  }

  addAccident(type, details, year) {
    this.props.addAccident(type, details, year);
    this.setState({
      accidentType: 'accidentType',
      accidentDetails: 'accidentDetails',
      year: 'year',
    });
  }

  get formDone() {
    return (
      this.props.drivers[this.props.currentDriver].data
        .accidentVerificationCheckbox &&
      (this.currentDriverAccidents.length > 0 ||
        this.props.drivers[this.props.currentDriver].data.noAccidentsCheckbox)
    );
  }

  handleYearChange(event) {
    const { value: year } = event.target;
    this.setState({ year });

    if (year) {
      this.addAccident(
        this.props.accident_info.accidents[this.state.accidentType].attributes
          .name,
        this.props.accident_info.accidents[this.state.accidentType].attributes
          .options[this.state.accidentDetails],
        year
      );
    }
  }

  get currentDriverAccidents() {
    return this.props.accidents.accidents.filter(
      (accident) =>
        parseInt(accident.data.attributes.rfq_driver_id) ===
        parseInt(this.props.drivers[this.props.currentDriver].data.id)
    );
  }

  yearsSelector() {
    var yearsArray = [];

    const currentYear = moment().format('YYYY');

    for (var i = currentYear - 5; i <= currentYear; i++) yearsArray.push(i);

    const years = yearsArray.reverse().map((i) => (
      <option key={i} value={i}>
        {i}
      </option>
    ));

    const selector = (
      <select
        className={
          this.state.accidentDetails === 'accidentDetails'
            ? 'prevent selector years-selector'
            : 'selector years-selector'
        }
        value={this.state.year}
        placeholder="Year"
        onChange={this.handleYearChange.bind(this)}
        key="years"
      >
        {years}
      </select>
    );
    return selector;
  }

  accidentType() {
    return (
      <select
        className="incident-selector selector"
        key="details"
        onChange={this.handleAccidentTypeChange.bind(this)}
        placeholder="Add Accident or Violation"
        value={this.state.accidentType}
      >
        {this.props.accident_info.requested
          ? ''
          : this.props.accident_info.accidents.map((accident, index) => {
              return (
                <option key={accident.attributes.name} value={index}>
                  {accident.attributes.name}
                </option>
              );
            })}
      </select>
    );
  }

  accidentDetails() {
    return (
      <select
        className={
          this.state.accidentType === 'accidentType'
            ? 'incident-selector selector prevent'
            : 'incident-selector selector'
        }
        placeholder="Accident Details"
        value={this.state.accidentDetails}
        onChange={this.handleAccidentDetailsChange.bind(this)}
        key="accidents"
      >
        {this.props.accident_info.requested
          ? ''
          : this.props.accident_info.accidents[this.state.accidentType]
          ? this.props.accident_info.accidents[
              this.state.accidentType
            ].attributes.options.map((option, index) => {
              return (
                <option key={index} value={index}>
                  {option}
                </option>
              );
            })
          : ''}
      </select>
    );
  }

  accidents() {
    return this.currentDriverAccidents.map((accident, index) => {
      const accidentType = accident.data.attributes.accident_type;
      const accidentDetails = `: ${accident.data.attributes.accident_detail}`;
      const accidentYear = `${accident.data.attributes.year} `;
      return (
        <div className="row incident-row" key={index}>
          <p className="incident-text">
            <span className="year-text">{accidentYear}</span>
            {accidentType}
            {accidentDetails}
          </p>
          {!Rfq.submitted(this.props.rfq) && (
            <div
              className="trash-can"
              onClick={() => this.removeAccident(accident)}
            >
              <i className="fas fa-trash-alt"></i>
            </div>
          )}
        </div>
      );
    });
  }

  verifyCheckbox = () => {
    if (
      this.props.drivers[this.props.currentDriver].data.noAccidentsCheckbox ||
      this.currentDriverAccidents.length > 0
    ) {
      return false;
    }
    return true;
  };

  render() {
    const trans = this.props.transitioning ? 'prevent' : '';
    const driver =
      this.props.drivers[this.props.currentDriver].data.attributes.first_name ||
      'this driver';
    const multiSelectClass = this.multiSelectClassName();
    return (
      <div className="c-screen">
        <div className="header-container">
          <h1>Accidents/Moving Violations</h1>
          {Rfq.submitted(this.props.rfq) ? (
            <p>
              Below are any accidents and/or moving violations you listed for{' '}
              {driver}:
            </p>
          ) : (
            <p>
              Please add any accidents or moving violations {driver} has had in
              the past 5 years
            </p>
          )}
        </div>
        {Rfq.submitted(this.props.rfq) ? (
          <div className="accident-form-container">
            <div className="input-container">{this.accidents()}</div>
          </div>
        ) : (
          <div className="accident-form-container">
            <div
              className={
                'input-container ' +
                (Rfq.submitted(this.props.rfq) ? 'prevent' : '')
              }
            >
              {this.accidents()}
              <div
                className={
                  this.state.choosingAccident
                    ? 'row accident-row'
                    : 'closed row accident-row'
                }
              >
                <MultiSelect
                  className={multiSelectClass}
                  disabled={multiSelectClass === 'prevent' ? true : false}
                >
                  {this.accidentType()}
                  {this.accidentDetails()}
                  {this.yearsSelector()}
                </MultiSelect>
              </div>
            </div>
            {!this.currentDriverAccidents.length && (
              <Checkbox
                disabled={this.currentDriverAccidents.length > 0}
                className="no-accidents-checkbox"
                value={
                  this.props.drivers[this.props.currentDriver].data
                    .noAccidentsCheckbox
                }
                onChange={() => this.handleNoAccidentsCheckbox()}
              >
                <p>{`${driver} has had no violations in the past 5 years.`}</p>
              </Checkbox>
            )}
            <Checkbox
              disabled={this.verifyCheckbox()}
              value={
                this.props.drivers[this.props.currentDriver].data
                  .accidentVerificationCheckbox
              }
              onChange={() => this.handleVerifyCheckbox()}
            >
              <p>
                I verify that I have answered these questions truthfully to the
                best of my ability
              </p>
            </Checkbox>
          </div>
        )}
        <div className="row navigation-button-row">
          <Link to="/new-car/drivers/more-info" className={trans}>
            <button className="button-secondary">Back</button>
          </Link>
          {Rfq.submitted(this.props.rfq) ? (
            <Link to="/new-car/drivers/confirm" className={trans}>
              <button className="button-primary">
                {this.props.drivers.requested ? <LoadingCircle /> : 'Continue'}
              </button>
            </Link>
          ) : (
            <ConditionalLink
              to="/new-car/drivers/confirm"
              disabled={!this.formDone}
            >
              <button className="button-primary">
                {this.props.drivers.requested ? <LoadingCircle /> : 'Done'}
              </button>
            </ConditionalLink>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    accident_info: state.accident_info,
    accidents: state.accidents,
    rfq: state.rfqs.rfqs,
  };
}

export default connect(mapStateToProps)(DriverDetailC);
