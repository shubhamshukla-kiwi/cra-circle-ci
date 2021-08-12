import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import './driver-detail.css';

class DriverDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDriver: null,
    };
  }

  render() {
    return (
      <div className="choose-driver">
        {this.props.drivers.length === 1 ? (
          <Redirect to="/new-car/drivers" />
        ) : null}
        <div className="row">
          <text className="driver-instructions instructions blue-text">
            Would you like to use an existing driver?
          </text>
        </div>
        <div className="driver-list">
          {this.props.drivers.map((driver, index) => {
            return (
              <div
                className="driver"
                key={index}
                onClick={() => {
                  this.props.chooseExistingDriver();
                }}
              >
                <text>
                  {driver.data.attributes.first_name}{' '}
                  {driver.data.attributes.last_name}
                </text>
                <text className="button">Use Me</text>
              </div>
            );
          })}
        </div>
        <Link
          to="/new-car/drivers"
          className="create-new-driver"
          onClick={() => {
            this.props.createNewDriver();
          }}
        >
          <text>Create new driver</text>
        </Link>
      </div>
    );
  }
}

export default DriverDetail;
