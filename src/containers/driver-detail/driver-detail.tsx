import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import './driver-detail.css';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import driverImg from '../../assets/images/homepage/signup-3.png';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';


class DriverDetail extends Component {
  constructor(props) {
      super(props);
      this.state = {
        stateSelect: ''
      }
  }
  setValue(e){
    let {value} = e.target;
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
