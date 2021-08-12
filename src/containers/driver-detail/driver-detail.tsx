import _ from 'lodash';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import './driver-detail.css';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import driverImg from '../../assets/images/homepage/signup-3.png';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
// TODO: Refactor -- see car-detail.js, tab-navigator.js
// const childFactoryCreator = (classNames) => (child) =>
//   React.cloneElement(child, {
//     classNames,
//   });

class DriverDetail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.routes = [
  //     '/new-car/drivers',
  //     '/new-car/drivers/more-info',
  //     '/new-car/drivers/accidents',
  //     '/new-car/drivers/confirm',
  //   ];
  //   const initialTransitionKey = this.routes.includes(
  //     this.props.location.pathname
  //   )
  //     ? this.props.location.pathname
  //     : this.routes[0];
  //   this.state = {
  //     accidentDetails: 'accidentDetails',
  //     accidentType: 'accidentType',
  //     choosingAccident: false,
  //     choosingViolation: false,
  //     goingTo: 'car-detail',
  //     transitionClassName: 'slide-left',
  //     transitionKey: initialTransitionKey,
  //     transitioning: false,
  //     violationDetails: 'violationDetails',
  //     violationType: 'violationType',
  //     year2: 'year',
  //     year: 'year',
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   // TODO: Refactor -- see car-detail.js, tab-navigator.js
  //   if (this.props.location.pathname !== nextProps.location.pathname) {
  //     const transitionKey = this.routes.includes(nextProps.location.pathname)
  //       ? nextProps.location.pathname
  //       : this.state.transitionKey;
  //     const transitionClassName =
  //       this.routes.indexOf(this.props.location.pathname) <
  //       this.routes.indexOf(nextProps.location.pathname)
  //         ? 'slide-left'
  //         : 'slide-right';
  //     this.setState({ transitionClassName, transitionKey });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {}

  // handleChooseExistingDriver() {}

  // handleCreateNewDriver() {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       postUserDriverRequest(this.props.rfqs.rfqs.attributes.token)
  //     );
  //   }
  // }

  // handleUpdateDriver(event) {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       updateDriver({
  //         id: this.props.drivers.drivers[this.props.drivers.currentDriver].data
  //           .id,
  //         change: {
  //           name: event.target.name,
  //           value: event.target.value,
  //         },
  //       })
  //     );
  //   }
  // }

  // handleResetDriver(driver) {
  //   Object.keys(driver.data.attributes).forEach((key) => {
  //     this.props.dispatch(
  //       updateDriver({
  //         id: driver.data.id,
  //         change: {
  //           name: key,
  //           value: driver.data.attributes[key],
  //         },
  //       })
  //     );
  //   });
  // }

  // handleUpdateUserDriverRequest() {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       updateUserDriverRequest({
  //         quote_token: this.props.rfqs.rfqs.attributes.token,
  //         item: this.props.drivers.drivers[this.props.drivers.currentDriver],
  //       })
  //     );
  //   }
  // }

  // handleCancelDriver() {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       deleteUserDriverRequest({
  //         quote_token: this.props.rfqs.rfqs.attributes.token,
  //         item: this.props.drivers.drivers[this.props.drivers.currentDriver],
  //       })
  //     );
  //   }
  // }

  // handleGetLatLongRequest() {
  //   if (this.props.fieldsEditable) {
  //     const address = this.props.drivers.drivers[
  //       this.props.drivers.currentDriver
  //     ].data.attributes.address;
  //     const city = this.props.drivers.drivers[this.props.drivers.currentDriver]
  //       .data.attributes.city;
  //     const state = this.props.drivers.drivers[this.props.drivers.currentDriver]
  //       .data.attributes.state;
  //     this.props.dispatch(
  //       getLatLongRequest({
  //         address,
  //         city,
  //         state,
  //         key: this.props.lat_long.key,
  //         currentDriver: this.props.drivers.currentDriver,
  //         quote_token: this.props.rfqs.rfqs.attributes.token,
  //       })
  //     );
  //   }
  // }

  // handleAddAccident(accident_type, accident_detail, year) {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       postUserAccidentRequest({
  //         data: {
  //           attributes: {
  //             year,
  //             accident_detail,
  //             accident_type,
  //             rfq_driver_id: parseInt(
  //               this.props.drivers.drivers[this.props.drivers.currentDriver]
  //                 .data.id
  //             ),
  //             rfq_id: parseInt(this.props.rfqs.rfqs.id),
  //           },
  //           type: 'rfq_accident',
  //         },
  //         rfq_token: this.props.rfqs.rfqs.attributes.token,
  //       })
  //     );
  //   }
  // }

  // handleRemoveAccident(accident) {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       deleteUserAccidentRequest({
  //         accident: accident,
  //         rfq_token: this.props.rfqs.rfqs.attributes.token,
  //       })
  //     );
  //   }
  // }

  // handleTransitionEnter = () => {
  //   this.setState({ transitioning: true });
  //   setTimeout(
  //     function () {
  //       this.setState({ transitioning: false });
  //     }.bind(this),
  //     1000
  //   );
  // };

  // handleTransitionExited = () => {
  //   this.setState({ transitioning: false });
  // };
  // handleInputChange(event) {
  //   this.props.updateDriver(event);
  // }
  constructor(props) {
      super(props);
      this.state = {
        stateSelect: ''
      }
  }
  setValue(e){
    console.log(e);
    let {value} = e.target;
    console.log(value);
this.setState({
  stateSelect: value,

});
  }
  render() {
    // const circleRoutes = [
    //   '/new-car/drivers',
    //   '/new-car/drivers/more-info',
    //   '/new-car/drivers/accidents',
    // ];
    // const pageNumber = circleRoutes.indexOf(this.props.location.pathname);
    return (
      <div className="driver-detail-dashboard">
        <div className="new-car-container">
          <div className="onboard-container">
            <OnboardHeader />
            <div className="navigation-section">
              <TabNavigator />
              <div className="detail-dashboard driver-details-wrapper">
                <TransitionGroup className="driver-detail-transition-group">
                  <div className="header-container-row">
                    <img src={driverImg} alt="icon"></img>
                    <h4>
                      Add Primary Driver
                    </h4>

                  </div>
                  <form>
                    <div className="form-row">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=" "
                        />
                        <label>First Name</label>

                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Driver’s License Number</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">

                      <select>
                          <option value="" selected>Select</option>
                          <option value="1">Oregon</option>
                          <option value="2">Boston</option>
                          <option value="3">Ohaio</option>
                          <option value="4">New York</option>
                          <option value="5">Washington</option>
                        </select>
                        <label>State</label>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group calendar-col">
                        <label>Date of Birth</label>
                        <input
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        <select>
                          <option selected value="">Select</option>
                          <option value="">Male</option>
                          <option value="">Female</option>
                          <option value="">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Current Insurance Company</label>
                      <select>
                        <option selected value="">Select</option>
                        <option value="">Auto-Owners Insurance</option>
                        <option value="">Auto-Owners Insurance</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                    <Link className="button-primary" to="/more-driver-detail">Next</Link>
                  </form>
                </TransitionGroup>
              </div>
              
            </div>
            <OnboardingFooter />
          </div>
        </div>
        {/* <div
          className={pageNumber > -1 ? 'progress-circle-row stage' : 'hidden'}
        >
          {circleRoutes.map((route, index) => (
            <div
              key={circleRoutes[index]}
              className={
                pageNumber >= index
                  ? 'circle driver-progress-circle circle-active'
                  : 'circle driver-progress-circle'
              }
              onClick={() => {
                if (pageNumber > index) this.props.history.push(route);
              }}
            />
          ))}
        </div> */}
        {/* <TransitionGroup
          className="driver-detail-transition-group"
          childFactory={childFactoryCreator(this.state.transitionClassName)}
        >
          <CSSTransition
            key={this.state.transitionKey}
            timeout={1000}
            classNames={this.state.transitionClassName}
            onEnter={this.handleTransitionEnter}
            // onExited={this.handleTransitionExited}
          >
            <Switch location={this.props.location}>
              <PropsRoute
                exact
                path={'/new-car/drivers'}
                component={DriverDetailA}
                currentDriver={this.props.drivers.currentDriver}
                drivers={this.props.drivers.drivers}
                company_info={this.props.company_info}
                zip={this.props.zip}
                getLatLong={this.handleGetLatLongRequest.bind(this)}
                updateDriver={this.handleUpdateDriver.bind(this)}
                cancelDriver={this.handleCancelDriver.bind(this)}
                updateUserDriverRequest={this.handleUpdateUserDriverRequest.bind(
                  this
                )}
                resetCurrentDriver={this.handleResetDriver.bind(this)}
                transitioning={this.state.transitioning}
              />
              <PropsRoute
                exact
                path={'/new-car/drivers/more-info'}
                component={DriverDetailB}
                currentDriver={this.props.drivers.currentDriver}
                drivers={this.props.drivers.drivers}
                fieldsEditable={this.props.fieldsEditable}
                drivers={this.props.drivers.drivers}
                updateDriver={this.handleUpdateDriver.bind(this)}
                cancelDriver={this.handleCancelDriver.bind(this)}
                updateUserDriverRequest={this.handleUpdateUserDriverRequest.bind(
                  this
                )}
                rfq_token={this.props.rfqs.rfqs.attributes.token}
                transitioning={this.state.transitioning}
              />
              <PropsRoute
                exact
                path={'/new-car/drivers/accidents'}
                component={DriverDetailC}
                currentDriver={this.props.drivers.currentDriver}
                drivers={this.props.drivers.drivers}
                addAccident={this.handleAddAccident.bind(this)}
                removeAccident={this.handleRemoveAccident.bind(this)}
                transitioning={this.state.transitioning}
              />
              <PropsRoute
                exact
                path={'/new-car/drivers/confirm'}
                component={DriverDetailConfirm}
                createNewDriver={this.handleCreateNewDriver.bind(this)}
                drivers={this.props.drivers.drivers}
                transitioning={this.state.transitioning}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup> */}
      </div>
    );
  }
}



export default DriverDetail;
