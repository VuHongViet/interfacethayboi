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
  Dropdown,
  Drawer
} from "antd";
import logo from "./../../image/logo/logo.png";
import { Link } from "react-router-dom";
import MenuDrawerIndex from "./../Drawer/MenuDrawerIndex";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      visible: false
    };
  }

  render() {
    const { Search } = Input;
    const { click } = this.props;
    const { actionClick } = click.actionClick;
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
        <Col xs={24} sm={5} style={{ paddingTop: 15 }}>
          <Row type="flex" align="middle" justify="space-between">
            <Col>
              {window.innerWidth < 768 ? (
                <Link to="profile">
                  <Avatar icon={<Icon type="home" />} />
                </Link>
              ) : (
                <Avatar icon={<Icon type="user" />} />
              )}
            </Col>
            <Col>
              <Badge
                count={25}
                style={{ padding: 0, cursor: "pointer", top: 5, right: 5 }}
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
            <Col>
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
            <Col md={0}>
              <Icon
                style={{
                  borderRadius: "50%",
                  background: "#ebedf0",
                  padding: 5,
                  fontSize: 20
                }}
                type="menu"
                onClick={this.actionClick()}
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
      <Row
        type="flex"
        align="bottom"
        style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 15 }}
      >
        <Col xs={5} sm={3} md={2}>
          <img src={logo} />
        </Col>
        <Col xs={19} md={16} sm={16}>
          <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={20}>
              <Search enterButton placeholder="Tìm Kiếm" />
            </Col>
          </Row>
        </Col>
        {this.state.isAuthenticated ? isAuthenticated() : unAuthenticated()}
        <MenuDrawerIndex />
      </Row>
    );
  }
}

export default HeaderComponent;
