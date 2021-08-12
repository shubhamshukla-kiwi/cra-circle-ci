import _ from 'lodash';
import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import TabNavigator from '../../components/tab-navigator/tab-navigator';
import OnboardHeader from '../../components/onboard-header/onboard-header';
import carImg from '../../assets/images/homepage/signup-2.png';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import './car-detail.css';

// const childFactoryCreator = (classNames) => (child) =>
//   React.cloneElement(child, {
//     classNames,
//   });

class CarDetail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.routes = [
  //     '/new-car/vehicles',
  //     '/new-car/vehicles/details',
  //     '/new-car/vehicles/package',
  //     '/new-car/vehicles/confirm',
  //   ];
  //   const initialTransitionKey = this.routes.includes(
  //     this.props.location.pathname
  //   )
  //     ? this.props.location.pathname
  //     : this.routes[0];
  //   this.state = {
  //     activeScreen: 'newCar',
  //     goingTo: 'agent-details',
  //     transitionClassName: 'slide-left',
  //     transitionKey: initialTransitionKey,
  //     transitioning: false,
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
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

  //   if (this.props.image !== nextProps.image) {
  //   }

  //   if (
  //     this.props.cars.requested &&
  //     !nextProps.cars.requested &&
  //     nextProps.cars.error === null
  //   ) {
  //     if (this.state.goingTo === 'agent-details') {
  //       this.props.moveForward();
  //     } else {
  //       this.setState({
  //         activeScreen: 'newCar',
  //         currentCar: Car.createBlank(),
  //       });
  //     }
  //   }

  //   if (this.props.cars.cars.length != nextProps.cars.cars.length) {
  //     this.props.dispatch(setCurrentCar(nextProps.cars.cars.length - 1));
  //   }
  // }

  // handleUpdateCar(event) {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       updateCar({
  //         id: this.props.cars.cars[this.props.cars.currentCar].data.id,
  //         change: { name: event.target.name, value: event.target.value },
  //       })
  //     );
  //   }
  // }

  // handleUpdateModel(event) {
  //   if (this.props.fieldsEditable) {
  //     var model = this.props.models.models.find(
  //       (model) => model.id === event.target.value
  //     );
  //     const make =
  //       model && model.relationships.make && model.relationships.make.data
  //         ? this.props.makes.find(
  //             (make) => make.id === model.relationships.make.data.id
  //           )
  //         : null;
  //     model ? (model.relationships.make = make) : null;
  //     this.props.dispatch(
  //       updateCarModel({
  //         id: this.props.cars.cars[this.props.cars.currentCar].data.id,
  //         model: model,
  //       })
  //     );
  //     this.props.dispatch(
  //       updateCar({
  //         id: this.props.cars.cars[this.props.cars.currentCar].data.id,
  //         change: { name: 'car_model_id', value: event.target.value },
  //       })
  //     );
  //   }
  // }

  // handleAddCar() {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       postUserCarRequest({
  //         driver_id: this.props.drivers.drivers[0].data.id,
  //         quote_token: this.props.rfqs.rfqs.attributes.token,
  //       })
  //     );
  //   }
  // }

  // handleCancelCar() {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       deleteUserCarRequest({
  //         item: this.props.cars.cars[this.props.cars.currentCar],
  //         quote_token: this.props.rfqs.rfqs.attributes.token,
  //       })
  //     );
  //   }
  // }

  // handleUpdateUserCarRequest() {
  //   if (this.props.fieldsEditable) {
  //     this.props.dispatch(
  //       updateUserCarRequest({
  //         item: this.props.cars.cars[this.props.cars.currentCar],
  //         quote_token: this.props.rfqs.rfqs.attributes.token,
  //       })
  //     );
  //   }
  // }

  // moveFromPackage() {
  //   this.setState({ activeScreen: 'confirm' });
  // }

  // get currentCar() {
  //   return this.props.cars.cars[this.props.cars.currentCar];
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

  render() {
    // const circleRoutes = [
    //   '/new-car/vehicles',
    //   '/new-car/vehicles/details',
    //   '/new-car/vehicles/package',
    // ];
    // const pageNumber = circleRoutes.indexOf(this.props.location.pathname);

    return (
      <div className="car-detail-dashboard">
        <div className="new-car-container">
          <div className="onboard-container">
            <OnboardHeader />
            <div className="navigation-section">
              <TabNavigator />
              <div className="detail-dashboard car-details-wrapper">
                <TransitionGroup className="car-detail-transition-group">
                  <div className="header-container-row">
                    <img src={carImg} alt="icon"></img>
                    <h4>
                      Add Vehicle
                    </h4>
                  </div>
                  <form>
                    <div className="form-row">
                      <div className="form-group">
                        <select>
                          <option value=""></option>
                          <option selected value="1">2019</option>
                          <option value="2">2020</option>
                        </select>
                        <label>Vehcile Year</label>
                      </div>
                      <div className="form-group">
                        <select>
                          <option value=""></option>
                          <option selected value="1">Audi</option>
                          <option value="2">BMW</option>
                        </select>
                        <label>Vehicle Make</label>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <select>
                          <option></option>
                          <option selected value="1">A4</option>
                          <option value="2">A3</option>
                        </select>
                        <label>Vehicle Model</label>
                      </div>
                      <div className="form-group">
                        <select>
                          <option value=""></option>
                          <option selected value="1">More than 7,500 mi.</option>
                          <option value="2">More than 10,500 mi.</option>
                        </select>
                        <label>Average Annual Milage</label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Primary Driver</label>
                      <select>
                        <option selected value="">Adrian Dawson</option>
                        <option value="">Ile David</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Ownership Status</label>
                      <select>
                        <option selected value="">Own</option>
                        <option value="">Auto</option>
                        <option value="">Other</option>
                      </select>
                    </div>
                    <div className="btn-selection">
                        <Link className="button-transparent" to="/">Save & add another vehicle</Link>
                        <Link className="button-primary" to="/car-plan">Next</Link>
                    </div>
                  </form>
                </TransitionGroup>
              </div>
            </div>
            <OnboardingFooter />
          </div>
        </div>
      </div>
      // <div className="car-detail-container">
      //   <VehicleIcon className="section-graphic" />
      //   <div
      //     className={pageNumber > -1 ? 'progress-circle-row stage' : 'hidden'}
      //   >
      //     {circleRoutes.map((route, index) => (
      //       <div
      //         key={circleRoutes[index]}
      //         className={
      //           pageNumber >= index
      //             ? 'circle driver-progress-circle circle-active'
      //             : 'circle driver-progress-circle'
      //         }
      //         onClick={() => {
      //           if (pageNumber > index) this.props.history.push(route);
      //         }}
      //       />
      //     ))}
      //   </div>

      //   {/* <div className={'car-image-banner ' + (carComplete ? 'open' : '')}>
      //     <img alt="" src={carComplete ? Car.getImage(this.currentCar) : null} className="car-image"/>
      //   </div> */}

      //   <TransitionGroup
      //     childFactory={childFactoryCreator(this.state.transitionClassName)}
      //     className="driver-detail-transition-group"
      //   >
      //     <CSSTransition
      //       classNames={this.state.transitionClassName}
      //       key={this.state.transitionKey}
      //       onEnter={this.handleTransitionEnter}
      //       timeout={1000}
      //     >
      //       <Switch location={this.props.location}>
      //         <PropsRoute
      //           cancelCar={this.handleCancelCar.bind(this)}
      //           cars={this.props.cars.cars}
      //           component={CarDetailModel}
      //           currentCar={this.props.cars.currentCar}
      //           exact
      //           path="/new-car/vehicles"
      //           transitioning={this.state.transitioning}
      //           updateCar={this.handleUpdateCar.bind(this)}
      //           updateCarModel={this.handleUpdateModel.bind(this)}
      //           updateCarRequest={this.handleUpdateUserCarRequest.bind(this)}
      //         />
      //         <PropsRoute
      //           cars={this.props.cars.cars}
      //           component={CarDetailAdditional}
      //           currentCar={this.props.cars.currentCar}
      //           fieldsEditable={this.props.fieldsEditable}
      //           path="/new-car/vehicles/details"
      //           transitioning={this.state.transitioning}
      //           updateCar={this.handleUpdateCar.bind(this)}
      //           updateCarRequest={this.handleUpdateUserCarRequest.bind(this)}
      //         />
      //         <PropsRoute
      //           cars={this.props.cars.cars}
      //           component={PackageDetail}
      //           currentCar={this.props.cars.currentCar}
      //           fieldsEditable={this.props.fieldsEditable}
      //           path="/new-car/vehicles/package"
      //           transitioning={this.state.transitioning}
      //           updateCar={this.handleUpdateCar.bind(this)}
      //         />
      //         <PropsRoute
      //           addCar={this.handleAddCar.bind(this)}
      //           cars={this.props.cars.cars}
      //           component={CarDetailConfirm}
      //           currentCar={this.props.cars.currentCar}
      //           path="/new-car/vehicles/confirm"
      //           transitioning={this.state.transitioning}
      //           updateCar={this.handleUpdateCar.bind(this)}
      //         />
      //       </Switch>
      //     </CSSTransition>
      //   </TransitionGroup>
      // </div>

    );
  }
}

// function mapStateToProps(state) {
//   return {
//     makes: state.makes,
//     models: state.models,
//     image: state.image,
//     cars: state.cars,
//     drivers: state.drivers,
//     rfqs: state.rfqs,
//   };
// }

export default CarDetail;
