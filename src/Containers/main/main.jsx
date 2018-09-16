import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LinkAccount from './linkAccount';
import TelcoDashboard from './telcoDashboard';
import DefaultMain from './defaultMain';
import { changeLinkAccount,getTelcoDashboardData,changeLinkAccountDashboard } from '../../action/'

class main extends Component {

  activeLinkAccount = (status) => {
    this.setState({
      linkAccountPage: status
    })
  }
  render() {
    console.log(this.props.account);  
    let productId = this.props.account[0].productId;
    if (this.props.linkAccountPage) {
      return <LinkAccount showDashboard={this.props.changeLinkAccountDashboard} />
    }
    else if (this.props.accountsFetch[0]) {
      return <TelcoDashboard showDefault={this.props.changeLinkAccount} />
    } else {
      return <DefaultMain showLinkAccount={this.props.changeLinkAccount} />
    }
    return null;
  }
}

function initMapSateToProps(state) {
  return {
    account: state.storedState.accounts,
    accountsFetch: state.storedState.accountsFetch,
    linkAccountPage: state.storedState.linkAccountPage,
    productName:state.storedState.productName
  }
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeLinkAccount,
    getTelcoDashboardData,
    changeLinkAccountDashboard
  }, dispatch)
}

export default connect(initMapSateToProps, initMapDispatchToProps)(main);