import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import {
    addLinkAccount,
    fetchTelcoAccount,
    getTelcoDashboardData
} from '../../action/';
import LeftMenuBar from '../leftMenuBar';

class linkAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: "",
            linkError: undefined
        }
    }
    customerIdChange = (event) => {
        this.setState({
            customerId: event.target.value
        })

    }
    addTelcoLinkAccount = () => {
        console.log("qwerty");
        this.setState({ spinner: true });
        this.props.addLinkAccount(this.state.customerId, this.props.email).then(res => {
            console.log(res);
            if (res.data.error) {
                this.setState({ spinner: false, linkError: res.data.error });
                console.log(res);
            }
            else {
                this.setState({ spinner: false, linkError: "" });
                // this.props.fetchTelcoAccount(this.props.email,)
                this.props.fetchTelcoAccount(this.props.email,this.props.userName).then(res=>{
                    let fetchAccounts = this.props.fetchAccounts[0];
                    console.log(fetchAccounts.customerID);
                    this.props.getTelcoDashboardData(fetchAccounts.customerID,fetchAccounts.productId,fetchAccounts.productName);

                })
            }
        })
        // this.props.fetchTelcoAccount(this.props.email,this.props.userName).then(res=>{
        //     this.props.getTelcoDashboardData(this.props.fetchAccounts.customerID,this.props.fetchAccounts.productId,this.props.fetchAccounts.productName);

        // })
        //     .catch(err => {
        //         console.log(err);
        //     })

    }
    render() {

        let spinnerLoader = classNames({
            loader: this.state.spinner
        });

        let errorClassName = classNames({
            noMessage: !(this.state.linkError),
            showErrorMessage: this.state.linkError
        });
        return (

            <React.Fragment>
                <div className="main">
                    <p className="paragraphDash">Link Account</p>
                    <div className="box">

                        <div className="inputFields">
                            <input
                                name='customerId'
                                type="text"
                                placeholder="Customer ID"
                                value={this.state.customerId}
                                onChange={this.customerIdChange}
                            /><br />
                            <label className={errorClassName}>{this.state.linkError}</label>
                            <button className="btn-full btn-green" onClick={this.addTelcoLinkAccount}> Submit </button>
                            &nbsp;&nbsp;&nbsp;
                                <button className="btn-full btn-blue" onClick={()=>this.props.showDefault(false)}>
                                    Cancel
                            </button>
                                <div className={spinnerLoader}></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
function initMapStateToProps(state) {
    console.log(state);
    return {
        email: state.storedState.email,
        userName: state.storedState.userName,
        fetchAccounts: state.storedState.accountsFetch[0]
    }
}
function initMapDispatchToProps(dispatch) {
    return bindActionCreators({
        addLinkAccount,
        fetchTelcoAccount,
        getTelcoDashboardData,
    }, dispatch)
}

export default connect(initMapStateToProps, initMapDispatchToProps)(linkAccount);