import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Button, Input } from "antd";
export class HeaderComponent extends Component {
  render() {
    const { Search } = Input;

    //  nếu trong component có nút nào cần dispatch thì ta gọi nó
    // như là 1 props this.props.onClickAdd();
    return (
      <Row
        style={{
          position: "relative"
        }}
      >
        <Row
          style={{
            position: "fixed",
            top: 0,
            background: "#24292e",
            width: "100%",
            zIndex: "10",
            padding: "10px 0",
            height: "53px"
          }}
          type="flex"
          gutter={16}
          justify="end"
        >
          <Col span={2} order={2}>
            <Button>Đăng Nhập</Button>
          </Col>
          <Col span={2} order={3}>
            <Button onClick={this.LoadGetData}>Đăng Kí</Button>
          </Col>
          <Col span={8} order={1}>
            <Search enterButton placeholder="Tìm Kiếm" />
          </Col>
        </Row>
      </Row>
    );
  }
}

export default HeaderComponent;
