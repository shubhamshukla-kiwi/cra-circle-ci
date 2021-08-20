import { useState, useEffect } from 'react';
import CarPlan from '../car-plan';
import CarDetail from '../car-detail';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import { saveVehicle, editVehicle } from '../../../actions/onboarding/vehicle.action';

interface Props {
    dispatch: Dispatch,
    drivers: T
}

let naviagteFlag = false;
let enableSetData = false;

const AddVehicle = (props: Props) => {
    let [vehicleInfo, setvehicleInfo] = useState(null);
    let [coveragePlan, setcoveragePlan] = useState(null);
    let [index, setIndex] = useState(null);
    const history = useHistory();
    let [steps, setSteps] = useState(1)
    useEffect(() => {
        if (coveragePlan && enableSetData) {
            const data = { vehicleInfo, coveragePlan };
            if(index != null) {
                const editData = {data: data, index: index}
                props.dispatch(editVehicle(editData));
            } else {
                props.dispatch(saveVehicle(data));
            }
            if (!naviagteFlag) {
                setSteps(1);
                window.scrollTo(0, 0);
            } else {
                history.push('/quote-success')
            }
            setvehicleInfo(null);
            setcoveragePlan(null);
            setIndex(null);
            enableSetData=false;
        }
    }, [coveragePlan, enableSetData]);

    useEffect(() => {
        if (props.passedData && props.passedData.vehicleInfo && props.passedData.index != null) {
            setvehicleInfo(props.passedData.vehicleInfo);
            setcoveragePlan(props.passedData.coveragePlan);
            setIndex(props.passedData.index);
            setSteps(1);
            enableSetData = false;
        }
    }, [props.passedData]);

    const saveVehicleInfo = (vehicle) => {
        setvehicleInfo(vehicle);
        setSteps(steps + 1);
        window.scrollTo(0, 0);
    }
    const saveCoveragePlan = (plan, newFlag) => {
        enableSetData = true;
        naviagteFlag = newFlag;
        setcoveragePlan(plan);
    }
    const prevState = () => {
        setSteps(steps - 1)
    }
    return (
        <>
            {steps === 1 && <CarDetail index={index} drivers={props.drivers} vehicle={vehicleInfo} saveVehicleInfo={saveVehicleInfo} />}
            {steps === 2 && <CarPlan index={index} coveragePlan={coveragePlan} prevState={prevState} saveCoveragePlan={saveCoveragePlan} />}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        drivers: state.drivers
    }
}

export default connect(mapStateToProps)(AddVehicle)
