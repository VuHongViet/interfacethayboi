import React, { Component } from "react";
import "antd/dist/antd.css";
import {
  Col,
  Row,
  Avatar,
  Icon,
  Drawer,
  Menu,
  message,
  Card,
  Rate,
  Tag
} from "antd";
import { Link } from "react-router-dom";
import LeftSideBar_Page_Index from "./LeftSideBar_Page_Index";
import RightSideBar_Page_Index from "./RightSideBar_Page_Index";
import star from "./../image/user/follow/star.svg";
import "./../App.css";

class Main_Page_Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      visible: false
    };
  }
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const success = () => {
      message.success("Link post copied");
      this.setState({
        visible: false
      });
    };
    const { Meta } = Card;
    return (
      <Row type="flex" style={{ padding: "0 10px" }}>
        <LeftSideBar_Page_Index />
        <Col xs={24}>
          <Row
            type="flex"
            style={{ paddingTop: 10, borderTop: "1px solid #c0c0c0" }}
          >
            <Col xs={12}>
              <div style={{ display: "flex" }}>
                <Avatar size="large" icon={<Icon type="user" />} />
                <div style={{ marginLeft: 5 }}>
                  <h4 style={{ margin: 0 }}>Vũ Hồng Việt</h4>
                  <span style={{ fontSize: 11 }}>40 phút</span>
                </div>
              </div>
            </Col>
            <Col xs={12} style={{ textAlign: "right" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              >
                <img style={{ marginRight: 10 }} src={star} />
                <Icon
                  style={{ fontSize: 25 }}
                  type="ellipsis"
                  onClick={this.showDrawer}
                />
              </div>
            </Col>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Cố vấn tối cáo của Obama"
                description={
                  <div>
                    <Rate
                      style={{ marginBottom: 5 }}
                      disabled
                      defaultValue={2.5}
                    />
                    <span> 200 đánh giá</span>
                  </div>
                }
              />
              <Tag style={{ background: "#fff", border: "none", padding: 0 }}>
                Thái Bình
              </Tag>
            </Card>
          </Row>
          <Drawer
            placement="bottom"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Menu style={{ borderRight: "none" }}>
              <Menu.Item onClick={success}>
                <Icon type="paper-clip" /> Copy Link
              </Menu.Item>
            </Menu>
          </Drawer>
        </Col>
        <RightSideBar_Page_Index />
      </Row>
    );
  }
}

export default Main_Page_Index;
