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
import logo from "./../image/logo.png";
export class HeaderComponent extends Component {
  DKM = () => {
    console.log("iframe loaded");
    window.addEventListener("message", function(e) {
      console.log(e.data);
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  render() {
    const { Search } = Input;

    const isAuthenticated = () => {
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
    const unAuthenticated = () => {
      return (
        <Col span={4}>
          <Row type="flex" justify="center" align="middle">
            <Col span={8} style={{ textAlign: "end", fontSize: 20 }}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Col>
            <Col span={8} style={{ textAlign: "end", fontSize: 20 }}>
              <Badge count={25} style={{ padding: 0 }}>
                <Icon
                  style={{
                    borderRadius: "50%",
                    background: "#ebedf0",
                    padding: 5
                  }}
                  type="bell"
                />
              </Badge>
            </Col>
            <Col span={8} style={{ textAlign: "end", fontSize: 20 }}>
              <Icon
                style={{
                  borderRadius: "50%",
                  background: "#ebedf0",
                  padding: 5
                }}
                type="question-circle"
              />
            </Col>
          </Row>
        </Col>
      );
    };
    return (
      <Row
        type="flex"
        justify="center"
        style={{ background: "#24292e", padding: "10px 0" }}
      >
        <Col span={14}>
          <Row type="flex" justify="center" align="middle">
            <Col span={4}>
              <img src={logo} />
            </Col>
            <Col span={16}>
              <Search enterButton placeholder="Tìm Kiếm" />
            </Col>
            {this.state.isAuthenticated ? isAuthenticated() : unAuthenticated()}
            <iframe
              style={{ display: "none" }}
              onLoad={this.DKM}
              src="a.html"
              width={0}
              height={0}
            ></iframe>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default HeaderComponent;
