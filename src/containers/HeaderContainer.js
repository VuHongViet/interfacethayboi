import React, { Component } from "react";
import HeaderComponent from "../components/Header/HeaderComponent";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as actionCreators from "../actions/taks";
class HeaderContainer extends Component {
  componentDidMount() {
    const { taksAction } = this.props;
    const { fetchListTask } = taksAction;
    fetchListTask();
  }
  render() {
    return <HeaderComponent />;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    taksAction: bindActionCreators(actionCreators, dispatch),
    click: bindActionCreators(actionCreators, dispatch)
  };
};
const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(HeaderContainer);
