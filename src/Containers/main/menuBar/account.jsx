import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class account extends Component {
  constructor(props) {
    super(props);
  }
  navBarAccountClick = () => {
    console.log("here");
    // <Redirect to="/dashboard/link"/>
  }
  render() {
    console.log(this.props.data);
    return (
      <React.Fragment>
        {this.props.data.map(curr => {
          return <p className={curr.productName ===this.props.activeProduct ? "active_product":""} key={curr.productId} onClick={()=>this.props.leftBarClick(curr.productId)}>{curr.productName
          }</p>
        })}
      </React.Fragment>
    );
  }
}

export default account;