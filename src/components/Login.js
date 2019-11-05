import React, { Component } from "react";
import { Form, Icon, Input, Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import Style from "../css/SlideForm.module.css";
import "./../css/customAntd.css";
import { BrowserRouter, Link } from "react-router-dom";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtaccount: "",
      txtpass: ""
    };
  }

  handleSubmitLogin = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (this.state.txtpass)
        if (!err) {
          localStorage.setItem("login", JSON.stringify(this.state));
        }
    });
  };

  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row
        type="flex"
        justify="center"
        style={{ alignItems: "center", marginTop: "80px" }}
      >
        <Col span={20} md={10}>
          <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
          <Form onSubmit={this.handleSubmitLogin}>
            <label>Tài Khoản</label>
            <Form.Item hasFeedback>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Mời bạn nhập tên tài khoản" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Tên Đăng Nhập"
                  name="txtaccount"
                  onChange={this.onChange}
                />
              )}
            </Form.Item>
            <label>Mật Khẩu</label>
            <Form.Item hasFeedback>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Mời bạn nhập password" }]
              })(
                <Input.Password
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Mật Khẩu"
                  name="txtpass"
                  onChange={this.onChange}
                />
              )}
            </Form.Item>
            <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
              <BrowserRouter>
                <Link to="/">Quên mật khẩu</Link>
              </BrowserRouter>
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                htmlType="submit"
                style={{
                  borderRadius: "15px",
                  background: "#38ba8a",
                  color: "#fff",
                  width: "100%",
                  height: "35px"
                }}
              >
                Đăng nhập
              </Button>
            </Form.Item>
            <div className={Style.socialContainer}>
              <div style={{ marginBottom: "10px" }}>Hoặc đăng nhập bằng</div>
              <BrowserRouter>
                <Link to="/" className={Style.socialFacebook}></Link>
                <Link to="/" className={Style.socialGoogle}></Link>
              </BrowserRouter>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "Login" })(Login);
