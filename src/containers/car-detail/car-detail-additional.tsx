import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import Car from '../../lib/models/car';
import ConditionalLink from '../../components/conditional-link/conditional-link.js';
import CustomSelect from '../../components/custom-select/custom-select.js';
import Rfq from '../../lib/models/quote';

import './car-detail.css';

class CarDetailAdditional extends Component {
  componentDidMount() {
    localStorage.setItem('formProgressPathname', window.location.pathname);
  }

  componentWillUnmount() {
    this.props.updateCarRequest();
  }

  detailFormDone() {
    const attrs = this.props.cars[this.props.currentCar].data.attributes;
    const done = !!(
      attrs.mileage &&
      attrs.ownership &&
      !this.props.transitioning
    );
    return done;
  }

  mileageSelector() {
    const selector = (
      <CustomSelect
        className="selector mileage-selector"
        value={this.props.cars[this.props.currentCar].data.attributes.mileage}
        placeholder="Average Annual Milage"
        name="mileage"
        onChange={(e) => this.props.updateCar(e)}
      >
        <option key={1} value={'0 - 7,500'}>
          0 - 7,500 mi.
        </option>
        <option key={8} value={'More than 7,500'}>
          More than 7,500 mi.
        </option>
      </CustomSelect>
    );
    return selector;
  }

  usageSelector() {
    const selector = (
      <CustomSelect
        className="selector usage-selector"
        name="ownership"
        value={this.props.cars[this.props.currentCar].data.attributes.ownership}
        placeholder="Ownership Status"
        onChange={(e) => this.props.updateCar(e)}
      >
        <option key="business" value="Owner">
          Owner
        </option>
        <option key="personal" value="Lease">
          Lease
        </option>
        <option key="personal" value="Loan">
          Loan
        </option>
      </CustomSelect>
    );
    return selector;
  }

  nextButtons() {
    const prevent = this.props.transitioning ? 'prevent' : '';
    if (Rfq.submitted(this.props.rfq)) {
      return (
        <div className="row navigation-button-row">
          <Link to="/new-car/vehicles" className={prevent}>
            <button className="button-secondary">Back</button>
          </Link>
          <Link to="/new-car/vehicles/package" className={prevent}>
            <button className="button-primary">Next</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="row navigation-button-row">
        <Link to="/new-car/vehicles" className={prevent}>
          <button className="button-secondary">Back</button>
        </Link>
        <ConditionalLink
          to="/new-car/vehicles/package"
          disabled={!this.detailFormDone()}
        >
          <button className="button-primary">Next</button>
        </ConditionalLink>
      </div>
    );
  }

  render() {
    return (
      <div className="car-info-screen">
        <div className="header-container">
          <h1>
            Tell us a bit more about your{' '}
            {Car.getDisplayName(this.props.cars[this.props.currentCar])}.
          </h1>
          <p>This information will help us with the accuracy of your quotes.</p>
        </div>
        <div
          className={
            'input-container ' +
            (Rfq.submitted(this.props.rfq) ? 'prevent' : '')
          }
        >
          <div className="row">{this.mileageSelector()}</div>
          <div className="row">{this.usageSelector()}</div>
        </div>
        {this.nextButtons()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rfq: state.rfqs.rfqs,
  };
}

export default connect(mapStateToProps)(CarDetailAdditional);
