import { useState, useEffect } from 'react';
import CarPlan from '../car-plan';
import CarDetail from '../car-detail';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import { saveVehicle } from '../../../actions/onboarding/vehicle.action';

interface Props {
    dispatch: Dispatch,
    drivers: T
}

let naviagteFlag = false;

const AddVehicle = (props: Props) => {
    let [vehicleInfo, setvehicleInfo] = useState(null);
    let [coveragePlan, setcoveragePlan] = useState(null);
    useEffect(() => {
        if(coveragePlan) {
        const data = { vehicleInfo, coveragePlan}
        props.dispatch(saveVehicle(data));
            if(naviagteFlag) {
                setSteps(1);
                window.scrollTo(0, 0);
            } else {
                history.push('/car-detail-success')
            }
        setvehicleInfo(null);
        setcoveragePlan(null);
    }
    }, [coveragePlan]);
    const history = useHistory();
    // let [steps, setSteps] = useState(1)
    let [steps, setSteps] = useState(2)
    const saveVehicleInfo = (vehicle) => {
        setvehicleInfo(vehicle);
        setSteps(steps+1);
        window.scrollTo(0, 0);
    }
    const saveCoveragePlan = (plan, newFlag) => {
        setcoveragePlan(plan);
        naviagteFlag = newFlag;
    }
    const prevState = () => {
        setSteps(steps -1)
    }
    return (<>
            {steps === 1 && <CarDetail drivers={props.drivers} vehicle={vehicleInfo}  saveVehicleInfo={saveVehicleInfo} />}
            {steps === 2 && <CarPlan coveragePlan={coveragePlan} prevState={prevState} saveCoveragePlan={saveCoveragePlan} />}
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        drivers: state.drivers
    }
}

export default connect(mapStateToProps)(AddVehicle)
