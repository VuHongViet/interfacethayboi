import React, { Component } from "react";
import HeaderComponent from "./../components/HeaderComponent";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as actionCreators from "../actions/taks";
class HeaderContainer extends Component {
  componentDidMount() {}

  render() {
    const { action } = this.props;
    return <HeaderComponent />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    taksAction: bindActionCreators(actionCreators, dispatch)
  };
};
const withConnect = connect(
  mapDispatchToProps,
  null
);
export default compose(withConnect)(HeaderContainer);
