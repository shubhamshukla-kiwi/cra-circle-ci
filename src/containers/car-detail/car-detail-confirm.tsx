import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { confirmCarSeen } from '../../actions/cars';
import {
  openConfirmationDrawer,
  closeConfirmationDrawer,
} from '../../actions/drawers';
import { updateUserRfqRequest } from '../../actions/rfqs';
import LoadingCircle from '../../components/loading-circle/loading-circle.js';
import Rfq from '../../lib/models/quote';

import './car-detail.css';

class CarDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCar: this.props.currentCar,
    };
  }

  componentDidMount() {
    this.props.dispatch(
      confirmCarSeen({
        car: this.props.currentCar,
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
    localStorage.setItem('formProgressPathname', window.location.pathname);
  }

  finish() {
    let attributes = this.props.rfq.attributes;
    attributes.email = this.props.drivers[0].data.attributes.email;

    this.props.dispatch(
      updateUserRfqRequest({
        token: this.props.rfq.attributes.token,
        attributes: attributes,
      })
    );
  }

  nextButtons() {
    if (Rfq.submitted(this.props.rfq)) {
      return (
        <div className="botton-container-vertical">
          <Link to="/new-car/quotes/confirm">
            <button className="button-primary">View my quotes!</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="botton-container-vertical">
        <Link to="/new-car/vehicles">
          <button
            className="button-secondary"
            onClick={() => {
              this.props.addCar();
            }}
          >
            {this.props.cars.requested ? (
              <LoadingCircle />
            ) : (
              'Add Another Vehicle'
            )}
          </button>
        </Link>
        <Link to="/new-car/quotes/confirm">
          <button
            className="button-primary"
            onClick={() => {
              this.finish();
            }}
          >
            {this.props.cars.requested ? (
              <LoadingCircle />
            ) : (
              'Continue to Quotes'
            )}
          </button>
        </Link>
      </div>
    );
  }

  render() {
    const carsLength =
      this.props.formProgress.firstCarCreated || Rfq.submitted(this.props.rfq)
        ? this.props.cars.cars.length
        : 0;
    const carText = carsLength === 1 ? 'vehicle' : 'vehicles';
    return (
      <div className="confirm-driver-container">
        <div className="header-container">
          <h1>
            You have entered {carsLength} {carText}
          </h1>
          {Rfq.submitted(this.props.rfq) ? (
            <p>
              You may review your information by selecting from the menu below
            </p>
          ) : null}
        </div>
        {this.nextButtons()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    makes: state.makes,
    models: state.models,
    image: state.image,
    cars: state.cars,
    formProgress: state.formProgress,
    drivers: state.drivers.drivers,
    rfq: state.rfqs.rfqs,
  };
}

export default connect(mapStateToProps)(CarDetail);
