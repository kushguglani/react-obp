import React, { Component } from 'react';
import {connect} from 'react-redux';


import AmountDetails from './telco/amountDetails';
import DataUsageDetails from './telco/dataUsageDetails';
import DataConsumedDetails from './telco/dataConsumedDetails';
import MonthlyDailyUsage from './telco/monthlyDailyUsage';
import LeftMenuBar from '../leftMenuBar';

class TelcoDashboard extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="main">
                <p className="paragraphDash">{this.props.productName}</p>
                <AmountDetails />
                <DataUsageDetails />
            </div>
            </React.Fragment>
        );
    }
}
function initMapStateToProps(state){
    return{
        productName:state.storedState.productName
    }
}
export default connect(initMapStateToProps) (TelcoDashboard);