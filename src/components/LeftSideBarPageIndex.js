import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Avatar, Icon } from "antd";
class LeftSideBar_Page_Index extends Component {
  render() {
    return (
      <Col
        xs={0}
        md={4}
        style={{ background: "#fff", border: "1px solid #e5e5e5" }}
      >
        <Row type="flex" align="middle" style={{ padding: "10px 5px" }}>
          <Col xs={12} md={12}>
            <Avatar icon={<Icon type="user" />} />
          </Col>
          <Col xs={0} md={12}>
            Vũ Hồng Việt
          </Col>
          <Row style={{ paddingTop: 5 }}>
            <Col xs={0} md={24}>
              Số thầy bói đã theo dõi :
              <span style={{ fontWeight: "bold" }}>&nbsp;10</span>
            </Col>
          </Row>
        </Row>
      </Col>
    );
  }
}

export default LeftSideBar_Page_Index;
