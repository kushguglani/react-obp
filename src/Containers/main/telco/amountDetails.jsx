import React, { Component } from 'react';
import {connect} from 'react-redux';

class AmountDetails extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="telcoBox">
                    <p className="ammount_content"> Ammount Due : {this.props.ammountDue} </p>
            <p className="dueOn"> Due On: {this.props.usageEndDate} </p>
                    <button className="btn-full btn-green">Pay Now</button>
                    <button className="btn-full btn-blue">View Bill</button>
                    <span className="verLine"></span>
                    <p className="best_plan">View Best Plans for Me</p><br/>
            </div>
            </React.Fragment>
        );
    }
}

function initMapStateToProps(state){
    return{
        productName:state.storedState.productName,
        ammountDue:state.storedState.telcoDashboard.usageServices[0].usageProducts[0].usage.billedAmount,
        usageEndDate: state.storedState.telcoDashboard.usageServices[0].usageProducts[0].usage.usageEndDate
        
    }
}
export default connect(initMapStateToProps) (AmountDetails);