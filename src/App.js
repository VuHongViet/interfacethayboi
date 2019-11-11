import React, { Component } from "react";

import HeaderContainer from "./containers/HeaderContainer";
import Main_Page_Index from "./components/Main_Page_Index";
import { Provider } from "react-redux";
import configStore from "./redux/configStore";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { BrowserRouter, Route, Link } from "react-router-dom";
const store = configStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Row
            type="flex"
            justify="center"
            style={{ background: "#f4f4f4", height: "100vh" }}
          >
            <Col xs={24} sm={22} md={18}>
              <HeaderContainer />
              <Main_Page_Index />
            </Col>
          </Row>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
