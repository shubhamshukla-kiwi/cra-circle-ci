import React, {Component} from 'react';
import {connect} from 'react-redux';
import './details-drawer.css';

import {closeDrawer} from '../../actions/drawers.js'
import white_arrow from '../../assets/images/white_arrow.png'

class DetailsDrawer extends Component {

    componentWillReceiveProps(props) {
    }

    closeDrawer() {
        this.props.dispatch(closeDrawer());
    }


    render() {

        return (
            <div className={this.props.drawerState.open ? "details-drawer open" : "details-drawer"}>
                <div className={this.props.drawerState.open ? "whitespace open" : "whitespace"}
                     onClick={() => this.closeDrawer()}></div>
                <div className={this.props.drawerState.open ? "content open" : "content"}>
                    {this.props.children}
                    <div className={this.props.drawerState.open ? "header-container open" : "header-container"}>
                        <div className="header">
                            <div onClick={() => this.closeDrawer()} className="details-drawer-back-button button"><img
                                alt="" src={white_arrow}/></div>
                            <text>{this.props.drawerState.drawerType}</text>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        drawerState: state.drawerState,
    }
}

export default connect(mapStateToProps)(DetailsDrawer);
