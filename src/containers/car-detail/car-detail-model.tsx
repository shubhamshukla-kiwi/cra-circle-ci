import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import React, { Component } from 'react';

import defaultMakeLogo from '../../assets/images/default_make_logo.png';
import { fetchMakes, fetchModels } from '../../actions/cars';
import { setFirstCarCreated } from '../../actions/main-form';
import Car from '../../lib/models/car';
import Driver from '../../lib/models/driver';
import Rfq from '../../lib/models/quote';
import MultiSelect from '../../components/multi-select/multi-select.js';
import CustomSelect from '../../components/custom-select/custom-select.js';
import ConditionalLink from '../../components/conditional-link/conditional-link.js';

import './car-detail.css';

class CarDetailModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCar: this.props.currentCar,
    };

    this.refList = {
      multiselect: null,
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchMakes());
    this.makeDriverSelectRequired();
  }

  componentDidMount() {
    localStorage.setItem('formProgressPathname', window.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    this.makeDriverSelectRequired();

    if (
      this.props.cars[this.props.currentCar].data.attributes.year !==
        nextProps.cars[nextProps.currentCar].data.attributes.year ||
      this.props.cars[this.props.currentCar].data.attributes.make !==
        nextProps.cars[nextProps.currentCar].data.attributes.make
    ) {
      if (nextProps.cars[nextProps.currentCar].data.attributes.year) {
        this.props.dispatch(
          fetchMakes({
            year: nextProps.cars[nextProps.currentCar].data.attributes.year,
          })
        );
      }
    }

    if (
      this.props.cars[this.props.currentCar].data.attributes.year !==
        nextProps.cars[nextProps.currentCar].data.attributes.year ||
      this.props.cars[this.props.currentCar].data.attributes.make !==
        nextProps.cars[nextProps.currentCar].data.attributes.make ||
      (nextProps.cars[nextProps.currentCar].data.attributes.make &&
        nextProps.models.models[0] === undefined &&
        nextProps.fieldsEditable)
    ) {
      if (
        nextProps.cars[nextProps.currentCar].data.attributes.make &&
        nextProps.cars[nextProps.currentCar].data.attributes.year
      ) {
        this.props.dispatch(
          fetchModels({
            make: nextProps.cars[nextProps.currentCar].data.attributes.make,
            year: nextProps.cars[nextProps.currentCar].data.attributes.year,
          })
        );
      }
    }
    if (this.props.models.requested && !nextProps.models.requested) {
      this.refList.multiselect && this.refList.multiselect.open();
    }
  }

  componentWillUnmount() {
    this.props.updateCarRequest();
  }

  makeDriverSelectRequired() {
    const attrs = this.props.cars[this.props.currentCar].data.attributes;
    if (!attrs.year || !attrs.year || !attrs.make) {
      if (attrs.rfq_driver_id !== '') {
        const obj = { target: { name: 'rfq_driver_id', value: '' } };
        this.props.updateCar(obj);
      }
    }
  }

  carFormDone() {
    const attrs = this.props.cars[this.props.currentCar].data.attributes;
    const done =
      attrs.rfq_driver_id &&
      attrs.year &&
      attrs.make &&
      attrs.car_model_id &&
      !this.props.transitioning;

    return done;
  }

  handleMakeImgError(e) {
    if (e.target) {
      e.target.src = defaultMakeLogo;
    }
  }

  handleCarSubmit() {
    if (!this.props.formProgress.firstCarCreated) {
      this.props.dispatch(setFirstCarCreated());
    }
  }

  get firstCar() {
    return !this.props.cars.find(
      (car) =>
        car.data.id !== this.props.cars[this.props.currentCar].data.id &&
        Car.complete(car, this.props.packages.packages)
    );
  }

  makesSelector() {
    const selector = (
      <select
        className="selector make-selector"
        name="make"
        value={this.props.cars[this.props.currentCar].data.attributes.make}
        placeholder="Vehicle Make"
        onChange={(e) => this.props.updateCar(e)}
      >
        {Object.entries(this.props.makes).map(([, make]) => {
          return (
            <option key={make.id} value={make.id}>
              <div className="make-option">
                <div className="make-img-container">
                  <img
                    className="make-img"
                    src={make.attributes.image_url}
                    onError={this.handleMakeImgError}
                  />
                </div>
                <span className="make-text">{make.attributes.name}</span>
              </div>
            </option>
          );
        })}
      </select>
    );
    return selector;
  }

  yearsSelector() {
    var years = [];
    for (var i = moment().year(); i > 1964; i--) {
      years.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    const selector = (
      <select
        className="selector years-selector"
        name="year"
        value={this.props.cars[this.props.currentCar].data.attributes.year}
        placeholder="Vehicle Year"
        onChange={(e) => this.props.updateCar(e)}
      >
        {years}
      </select>
    );
    return selector;
  }

  modelSelector() {
    const models = Object.entries(this.props.models.models).map(
      ([, model]) => {
        return (
          <option key={model.id} value={model.id}>
            {model.attributes.name}
          </option>
        );
      }
    );
    const selector = (
      <select
        className="selector model-selector"
        name="car_model_id"
        value={
          this.props.cars[this.props.currentCar].data.attributes.car_model_id
        }
        placeholder="Vehicle Model"
        onChange={(e) => this.props.updateCarModel(e)}
      >
        {models}
      </select>
    );
    return selector;
  }

  driverSelector() {
    return this.props.drivers.map((driver) => (
      <option value={driver.data.id} key={driver.data.id}>
        {Driver.getFullDisplayName(driver)}
      </option>
    ));
  }

  onDriverChange = (e) => {
    this.props.updateCar(e);
  };

  render() {
    const prevent = this.props.transitioning ? 'prevent' : '';
    return (
      <div className="new-car-screen">
        <div className="header-container">
          <h1>
            {this.firstCar
              ? 'Add Vehicle to be Insured'
              : 'Add Additional Vehicle'}
          </h1>
          <p>
            Year, make, and model of your vehicle affects your insurance quotes
          </p>
        </div>
        <div
          className={
            'input-container ' +
            (Rfq.submitted(this.props.rfq) ? 'prevent' : '')
          }
        >
          <MultiSelect
            ref={(ref) => {
              this.refList.multiselect = ref;
            }}
            disabled={Rfq.submitted(this.props.rfq) ? true : false}
          >
            {this.yearsSelector()}
            {this.makesSelector()}
            {this.modelSelector()}
          </MultiSelect>
          <CustomSelect
            name="rfq_driver_id"
            placeholder="Primary Driver"
            value={
              this.props.cars[this.props.currentCar].data.attributes
                .rfq_driver_id
            }
            onChange={this.onDriverChange}
          >
            {this.driverSelector()}
          </CustomSelect>
        </div>
        <div className="row navigation-button-row">
          {this.firstCar ? (
            <Link
              to="/new-car/drivers/confirm"
              className={'button-secondary ' + prevent}
            >
              <button className="button-secondary">Back to drivers</button>
            </Link>
          ) : (
            <Link
              to="/new-car/vehicles/confirm"
              className={'button-secondary ' + prevent}
            >
              <button
                className="button-secondary"
                onClick={() => {
                  this.props.cancelCar();
                }}
              >
                Cancel
              </button>
            </Link>
          )}
          <ConditionalLink
            to="/new-car/vehicles/details"
            disabled={!this.carFormDone()}
            onClick={() => this.handleCarSubmit()}
          >
            <button
              className={
                'button-primary ' + (this.carFormDone() ? '' : 'prevent')
              }
            >
              Next
            </button>
          </ConditionalLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    makes: state.makes,
    models: state.models,
    image: state.image,
    drivers: state.drivers.drivers,
    packages: state.packages,
    formProgress: state.formProgress,
    rfq: state.rfqs.rfqs,
  };
}

export default connect(mapStateToProps)(CarDetailModel);
