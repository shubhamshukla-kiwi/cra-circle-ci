import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import {
  closeConfirmationDrawer,
  openConfirmationDrawer,
} from '../../actions/drawers';
import { setAllDriversListedRadioButton } from '../../actions/main-form';
import { setDriverConfirmSeen } from '../../actions/drivers';
import ConditionalLink from '../../components/conditional-link/conditional-link.js';
import LoadingCircle from '../../components/loading-circle/loading-circle.js';
import RadioButton from '../../components/radio-button/radio-button';
import RadioGroup from '../../components/radio-group/radio-group';
import Rfq from '../../lib/models/quote';

import './driver-detail.css';

const radioStates = {
  affirmative: 'affirmative',
  negative: 'negative',
};

class DriverDetailConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDriver: null,
      driversComplete: false,
      incompleteDriver: null,
    };
  }

  componentDidMount() {
    this.props.dispatch(
      setDriverConfirmSeen({
        driver: this.props.drivers.currentDriver,
      })
    );
    if (window.innerWidth > 768) {
      this.props.dispatch(openConfirmationDrawer());
      setTimeout(
        function () {
          this.props.dispatch(closeConfirmationDrawer());
        }.bind(this),
        3000
      );
    }
    this.validateDrivers();
    localStorage.setItem('formProgressPathname', window.location.pathname);
  }

  validateDrivers() {
    const drivers = this.props.drivers.drivers;

    for (let i = 0; i < drivers.length; i++) {
      const attrs = drivers[i].data.attributes;
      const accidents = drivers[i].data.accidentVerificationCheckbox;
      if (
        !attrs.first_name ||
        !attrs.last_name ||
        !attrs.gender ||
        !attrs.license_number ||
        !attrs.license_state ||
        !attrs.birthdate ||
        !attrs.current_insurance ||
        (i === 0 && !attrs.home_ownership_status) ||
        !accidents
      ) {
        this.setState({
          driversComplete: false,
          incompleteDriver: i,
        });
      } else {
        this.setState({
          driversComplete: true,
          incompleteDriver: null,
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    const newDrivers = JSON.stringify(this.props.drivers.drivers);
    const drivers = JSON.stringify(prevProps.drivers.drivers);
    if (drivers != newDrivers) {
      this.validateDrivers();
    }
  }

  handleRadioChange(newRadioState) {
    this.props.dispatch(
      setAllDriversListedRadioButton({
        selectedOption: newRadioState,
      })
    );
  }

  handleAddDriverClick() {
    this.props.dispatch(
      setAllDriversListedRadioButton({
        selectedOption: null,
      })
    );
    this.props.createNewDriver();
  }

  nextButtons() {
    const selectedOption = this.props.allDriversListedRadioButton
      .selectedOption;
    const driversCompleted = this.state.driversComplete;
    const disabled = selectedOption && driversCompleted ? false : true;
    if (Rfq.submitted(this.props.rfq)) {
      return (
        <Link to="/new-car/quotes/confirm">
          <button className="button-primary">View my quotes!</button>
        </Link>
      );
    }
    switch (selectedOption) {
      case radioStates.negative:
        return (
          <Link to="/new-car/drivers">
            <button
              className="button-secondary"
              onClick={() => {
                this.handleAddDriverClick();
              }}
            >
              {this.props.drivers.requested ? (
                <LoadingCircle />
              ) : (
                'Add Another Driver'
              )}
            </button>
          </Link>
        );
        break;
      case radioStates.affirmative:
        return (
          <ConditionalLink to="/new-car/vehicles" disabled={disabled}>
            <button className="button-primary">
              {this.props.drivers.requested ? (
                <LoadingCircle />
              ) : disabled ? (
                `Driver ${this.state.incompleteDriver + 1} Incomplete`
              ) : (
                'Continue to Vehicles'
              )}
            </button>
          </ConditionalLink>
        );
        break;
      default:
        return null;
        break;
    }
  }

  render() {
    const driversLength =
      this.props.formProgress.firstDriverCreated ||
      Rfq.submitted(this.props.rfq)
        ? this.props.drivers.length
        : 0;
    const driverText = driversLength === 1 ? 'driver' : 'drivers';
    return (
      <div className="confirm-driver-container">
        <div className="header-container">
          <h1>
            You have entered {driversLength} {driverText}
          </h1>
          {Rfq.submitted(this.props.rfq) ? (
            <p>
              You may review your information by selecting from the menu below
            </p>
          ) : (
            <p>You may click on a driver to edit their details</p>
          )}
        </div>
        {!Rfq.submitted(this.props.rfq) && (
          <RadioGroup
            className="verification-container"
            name="verify"
            value={this.props.allDriversListedRadioButton.selectedOption}
            onChange={(newState) => this.handleRadioChange(newState)}
          >
            <RadioButton
              id="affirmative"
              value={radioStates.affirmative}
              text="I have listed every driver in the household who has access to my motor vehicle(s)."
            />
            <RadioButton
              id="negative"
              value={radioStates.negative}
              text="I have NOT listed every driver in the household who has access to my motor vehicle(s)."
            />
          </RadioGroup>
        )}
        <div className="botton-container-vertical">{this.nextButtons()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allDriversListedRadioButton: state.allDriversListedRadioButton,
    drivers: state.drivers,
    formProgress: state.formProgress,
    rfq: state.rfqs.rfqs,
  };
}

export default connect(mapStateToProps)(DriverDetailConfirm);
