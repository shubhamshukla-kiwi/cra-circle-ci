import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

ReactModal.setAppElement('#root');

class CustomModal extends Component {

    render() {

        return (
            <div>
                <ReactModal
                    isOpen={this.props.showModal}
                    className="custom-coverage-modal"
                >
                    <div className="custom-wrap">
                        <h4>Customize your basic coverage</h4>
                        <div className="input-data">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Bodily Injury (BI)</label>
                                    <select>
                                        <option selected value="">Select</option>
                                        <option value="">$250k/ $500K</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Property Damage</label>
                                    <select>
                                        <option selected value="">Select</option>
                                        <option value="">$250k/ $500K</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Unisured Motorist BI</label>
                                    <select>
                                        <option selected value="">Select</option>
                                        <option value="">$250k/ $500K</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Emergency Road Services</label>
                                    <select>
                                        <option selected value="">Select</option>
                                        <option value="">$250k/ $500K</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Personal Injury Protection (PIP)</label>
                                    <select>
                                        <option selected value="">Select</option>
                                        <option value="">$250k/ $500K</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Comprehensive Deductible</label>
                                    <select>
                                        <option selected value="">Select</option>
                                        <option value="">$250k/ $500K</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Collision Deductible</label>
                                    <select>
                                        <option selected value="">Select</option>
                                        <option value="">$250k/ $500K</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Rental Car Coverage</label>
                                    <select>
                                        <option selected value="">Select</option>
                                        <option value="">$250k/ $500K</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Unisured Motorist Property Damage</label>
                                <select>
                                    <option selected value="">Select</option>
                                    <option value="">$250k/ $500K</option>
                                </select>
                            </div>
                        </div>
                        <Link className="button-primary" to="/">
                            <span className="btn-txt">Save custom & send request for quotes</span>
                            <span className="icon-forward-arrow font-icon"></span>
                        </Link>
                    </div>
                    <button className="close-icon" onClick={this.props.handleCloseModal}><span className="icon-cross"><span className="path2"></span></span></button>
                </ReactModal>

            </div>
        );
    }
}
export default CustomModal;

