import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTelcoDashboardData, changeLinkAccount } from '../action/'
import accountImg from '../images/icons/accountImg.png';
import manageAccountImg from '../images/icons/manageAccountImg.png';
import Routing from './routing';
import Accounts from './main/menuBar/account';


class LeftMenuBar extends Component {
    leftBarClick = (cid, pid, productName) => {
        console.log("click");
        console.log(cid, pid);
        if (cid === "Link1") {
            this.props.changeLinkAccount(true);
        }
        else if(cid === "Manage1"){
            console.log("Viw Account page");
        }
        else {
            this.props.getTelcoDashboardData(cid, pid, productName)
        }
    }
    render() {
        // let activeClassName = classNames({
        //     "active_product": true, // call the function directly instead of saving in state
        // });
        // let u
        let accounts;
        if (this.props.fetchAccounts ) {
            accounts = this.props.fetchAccounts.map(curr => <p className={curr.productName ===this.props.productName ? "active_product":""} key={curr.productId} onClick={() => this.leftBarClick(curr.customerID, curr.productId, curr.productName)}>{curr.productName}
            </p>
            )
        }
        else {
            accounts = <Accounts activeProduct={this.props.productName} data={this.props.accounts} leftBarClick={this.leftBarClick} />
        }
        console.log(accounts);
        return (
            <div className="sidenav">
                <label><img alt="Account Icon" src={accountImg} />ACCOUNTS</label>
                <div className="LeftManuBarData">
                    {accounts}
                </div>
                <label> <img alt="Manage Account Icon" src={manageAccountImg} />MANAGE ACCOUNTS</label>
                <Accounts activeProduct={this.props.productName} data={this.props.manageAccounts} leftBarClick={this.leftBarClick} />
                <Routing />
            </div>
        );
    }
}
function initMapStateToProps(state) {
    console.log(state.storedState);
    return {
        accounts: state.storedState.accounts,
        manageAccounts: state.storedState.manageAccounts,
        fetchAccounts: state.storedState.accountsFetch[0],
        productName: state.storedState.productName
    }
}
function initMapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTelcoDashboardData,
        changeLinkAccount
    }, dispatch)
}

// export default LeftMenuBar;
export default connect(initMapStateToProps, initMapDispatchToProps)(LeftMenuBar);