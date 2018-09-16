import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Doughnut, Bar } from 'react-chartjs-2';

class DataUsageDetails extends Component {
    render() {
        const applicationUsageData = this.props.applicationUsage;
        let data = {
            datasets: [{
                data: Object.values(applicationUsageData),

                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
            }],
            labels: Object.keys(applicationUsageData)
        };
        let dataConsumed = {
            datasets: [{
                data: [this.props.UsageData,this.props.totalData-this.props.UsageData],

                backgroundColor: ['#ff6384', '#36a2eb'],
            }],
            labels: ["Consumed","Remaning"]
        };
        const dailyUsageData = this.props.dailyUsage;
        
        let barData = {
            datasets: [{    
            label: 'Daily Usage In Mb',
                data: Object.values(dailyUsageData).map(curr=>{
                    return curr.dataUsage
                }),

            }],
            labels: Object.values(dailyUsageData).map(curr=>{
                return curr.date
            })
        };
        return (
            <React.Fragment>
                <div className="halfGrpah ">
                <p>Data Usage by Application</p>
                    <Doughnut ref='chart' data={data} />
                </div>
                <div className="halfGrpah clearfix">
                <p>Data Consumed</p>
                    <Doughnut ref='chart' data={dataConsumed} />
                </div>
                <div className="fullGrpah clearfix">
                    <Bar ref='chart' data={barData} />
                </div>
            </React.Fragment>
        );
    }
}

function initMapStateToProps(state) {
    return {
        productName: state.storedState.productName,
        applicationUsage: state.storedState.telcoDashboard.usageServices[0].usageProducts[0].usage.applicationUsage,
        dailyUsage: state.storedState.telcoDashboard.usageServices[0].usageProducts[0].usage.dailyUsage,
        totalData: state.storedState.telcoDashboard.usageServices[0].usageProducts[0].usage.allocatedData,
        UsageData: state.storedState.telcoDashboard.usageServices[0].usageProducts[0].usage.dataUsage
        

    }
}
export default connect(initMapStateToProps)(DataUsageDetails);