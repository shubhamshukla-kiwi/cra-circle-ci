import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from './../../assets/images/seekr-logo.png'
import dashboardMenu from './../../assets/images/homepage/dashboard-menu.svg'
import Dropdown from './../../assets/images/homepage/dropdown.png'
import profileDefault from './../../assets/images/homepage/edit-profile.png';
import './header.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');
class Header extends Component {

    // const [showBox, setShowBox] = React.useState();
    constructor(props) {
        super(props);
        this.state = {
            showBox: false,
            showSelectBox: false,
            showModal: false,
            showEditModal: false,

        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleEditOpenModal = this.handleEditOpenModal.bind(this);
        this.handleEditCloseModal = this.handleEditCloseModal.bind(this);
        this.logout = this.logout.bind(this);
    }


    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleEditOpenModal() {
        this.setState({ showEditModal: true });
    }

    handleEditCloseModal() {
        this.setState({ showEditModal: false });
    }

    logout() {
        localStorage.clear();
    }

    render() {
        return (
            <div className={this.props.show ? "show header-component" : "header-component"}>
                <div className="header">
                    <div className="header-inner">
                        <div className="top-left">
                            <img className="menu" src={dashboardMenu} alt="menu" onClick={() => props.setShow()}></img>
                            <Link to="/" className="logo-container">
                                {/* <img src={logo} alt="logo" style={{width: 33}}/> */}
                                {/* <p className="text-dark">seekr.</p> */}
                                <img src={logoWhite} alt="logo" style={{ width: 124 }} />
                            </Link>
                        </div>
                        <div className="top-right">
                            <div className="email-txt" onClick={() => {
                                // setShowBox(!this.state.showBox)
                                this.setState({
                                    showBox: !this.state.showBox
                                })
                            }}>
                                adrian992yahoo.com
                                <span className="icon-down-arrow font-icon"></span>
                            </div>
                            {this.state.showBox &&
                                <div className="dropdown">
                                    <ul>
                                        <li onClick={() => {
                                            this.setState({
                                                showBox: false
                                            })
                                            this.handleEditOpenModal()
                                        }}>
                                            <a href="#">Edit Profile</a>
                                        </li>
                                        <li onClick={() => {
                                            this.setState({
                                                showBox: false
                                            })
                                            this.handleOpenModal()
                                        }}>
                                            <a href="#">Add Card</a>
                                        </li>
                                        <li>
                                            <a href="/agent-payment">My Payments</a>
                                        </li>
                                        <li>
                                            <a href="#">Change Password</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms of Services</a>
                                        </li>
                                        <li onClick={this.logout} className="sign-out">
                                            <a href="/">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        {/* {
                            this.props.login.loggedIn && this.props.login.id ?
                                (
                                    <div className="header-info">
                                        {this.props.drivers && this.props.drivers.drivers.length &&
                                        <p>Hello, {this.props.drivers.drivers[0].data.attributes.first_name}</p>}
                                        <Link
                                            to='/'
                                            className="logout header-link"
                                            onClick={() => {
                                                this.handleLogOut();
                                            }}>
                                            <p>LOGOUT</p>
                                        </Link>
                                    </div>
                                ) : (
                                    <Link to="/login"><p>Login</p></Link>
                                )
                        } */}

                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={false}
                    className="add-card-modal"
                >
                    <h5>Add Card</h5>
                    <form>
                        <div className="form-group">
                            <label>Name on card</label>
                            <input
                                type="name"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Card Number</label>
                            <input
                                type="number"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Date of expiry (MM/YY)</label>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="footer-modal">
                            <a href="#" className="delete-btn">Delete</a>
                            <button className="button-primary">Update</button>
                        </div>
                    </form>
                    <button className="close-icon" onClick={this.handleCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
                </ReactModal>
                <ReactModal
                    isOpen={this.state.showEditModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleEditCloseModal}
                    shouldCloseOnOverlayClick={false}
                    className="edit-profile-modal"
                >
                    <div className="modal-header">
                        <h5>Edit Profile</h5>
                        <div className="select-wrap">
                            <div className="status-txt" onClick={() => {
                                // setShowBox(!this.state.showBox)
                                this.setState({
                                    showSelectBox: !this.state.showSelectBox
                                })
                            }}>
                                Status
                                <img src={Dropdown} alt="dropdown"></img>
                            </div>
                            <span className="status-data">Available</span>
                            {this.state.showSelectBox &&
                                <div className="dropdown">
                                    <ul>
                                        <li>
                                            <a href="#">Available</a>
                                        </li>
                                        <li>
                                            <a href="#">Offline, on Vacation</a>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="modal-content">
                        <form>
                            <div className="add-image">
                                <img src={profileDefault} alt="user"></img>
                                <span>Change</span>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="name"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label>State/Province</label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Zipcode</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Tell us about yourself</label>
                                <input
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <select>
                                    <option value="">Select</option>
                                    <option value="1">Cubicles insurance.co</option>
                                    <option value="2">Cubicles insurance.co</option>
                                </select>
                                <label>Company name</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a href="#" className="cancel-btn"  onClick={this.handleEditCloseModal}>Cancel</a>
                        <button className="button-primary">Update</button>
                    </div>
                    
                </ReactModal>
            </div>
        );
    }
}



export default Header;
