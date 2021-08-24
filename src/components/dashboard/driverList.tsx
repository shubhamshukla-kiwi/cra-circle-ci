import userDefaultIcon from '../../../src/assets/images/homepage/default-user.png';

interface Props {

}

const DriverList = (props: Props) => {
    return (
        <div className="user-list-container">
            <h4 className="user-title">1 driver added</h4>
            <ul className="user-list">
                <li>
                        {/* eslint-disable-next-line */}
                        <a className="user-link">
                        <img alt="Brand icon" src={userDefaultIcon} />
                        <div className="profile-content">
                            <h5>Adrian</h5>
                            <p className="profile-address">0123456789-002</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default DriverList
