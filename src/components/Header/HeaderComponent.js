import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Row,
  Col,
  Button,
  Input,
  Avatar,
  Icon,
  Badge,
  Menu,
  Dropdown
} from "antd";
import logo from "./../../image/logo/logo.png";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true
    };
  }

  render() {
    const { Search } = Input;

    const unAuthenticated = () => {
      return (
        <Col span={4} order={2}>
          <Col span={12}>
            <Button>Đăng Nhập</Button>
          </Col>
          <Col span={12}>
            <Button onClick={this.LoadGetData}>Đăng Kí</Button>
          </Col>
        </Col>
      );
    };
    const isAuthenticated = () => {
      return (
        <Col span={4}>
          <Row type="flex" justify="center" align="middle">
            <Col span={8} style={{ textAlign: "end" }}>
              <Dropdown overlay={menu()} trigger={["click"]}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Dropdown>
            </Col>
            <Col span={8} style={{ textAlign: "end" }}>
              <Badge
                count={25}
                style={{ padding: 0, cursor: "pointer" }}
                title="Thông Báo"
              >
                <Icon
                  style={{
                    borderRadius: "50%",
                    background: "#ebedf0",
                    padding: 5,
                    fontSize: 20
                  }}
                  type="bell"
                  title="Thông Báo"
                />
              </Badge>
            </Col>
            <Col span={8} style={{ textAlign: "end" }}>
              <Icon
                style={{
                  borderRadius: "50%",
                  background: "#ebedf0",
                  padding: 5,
                  fontSize: 20
                }}
                type="question-circle"
              />
            </Col>
          </Row>
        </Col>
      );
    };

    const menu = () => {
      return (
        <Menu>
          <Menu.Item>
            <Link to="/name">Quản Lý Tài Khoản</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/logout">Đăng Xuất</Link>
          </Menu.Item>
        </Menu>
      );
    };
    return (
      <BrowserRouter>
        <Row
          type="flex"
          justify="center"
          style={{ background: "#24292e", padding: "10px 0" }}
        >
          <Col span={16}>
            <Row type="flex" justify="center" align="middle">
              <Col span={2}>
                <img src={logo} />
              </Col>
              <Col span={18}>
                <Row>
                  <Col span={20}>
                    <Search enterButton placeholder="Tìm Kiếm" />
                  </Col>
                </Row>
              </Col>
              {this.state.isAuthenticated
                ? isAuthenticated()
                : unAuthenticated()}
            </Row>
          </Col>
        </Row>
      </BrowserRouter>
    );
  }
}

export default HeaderComponent;
