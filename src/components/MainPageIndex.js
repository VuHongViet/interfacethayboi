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
import LeftSideBarPageIndex from "./LeftSideBarPageIndex";
import RightSideBarPageIndex from "./RightSideBarPageIndex";
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
      <Row type="flex" className="main-page-index">
        <LeftSideBarPageIndex />
        <Col xs={24}>
          <Row type="flex" className="main-page-index-border">
            <Col xs={12}>
              <div className="header-name-page-index">
                <Avatar size="large" icon={<Icon type="user" />} />
                <div className="header-name-page-index-name">
                  <h4>Vũ Hồng Việt</h4>
                  <span className="send-post-minute">40 phút</span>
                </div>
              </div>
            </Col>
            <Col xs={12} className="header-name-page-index-right">
              <div className="post-page-index">
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiFpWwrv2-ss8Bp4mLBtOdCQUm7ZbrPZA68D3I-Ye0A_aaJBPl"
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
                    <span className="rate">200 đánh giá</span>
                  </div>
                }
              />
              <Tag className="location">Thái Bình</Tag>
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
        <RightSideBarPageIndex />
      </Row>
    );
  }
}

export default Main_Page_Index;
