import userDefaultIcon from '../../../src/assets/images/homepage/default-user.png';

interface Props {

}

const VehicleList = (props: Props) => {
    return (
        <div className="user-list-container">
            <h4 className="user-title">2 vehicles added</h4>
            <ul className="user-list">
                <li>
                    <a className="user-link">
                        <img alt="Brand icon" src={userDefaultIcon} />
                        <div className="profile-content">
                            <h5>Fiat - Abarth</h5>
                            <p className="profile-address">Coverage: Best</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="user-link">
                        <img alt="Brand icon" src={userDefaultIcon} />
                        <div className="profile-content">
                            <h5>Fiat - Abarth</h5>
                            <p className="profile-address">Coverage: Best</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default VehicleList
