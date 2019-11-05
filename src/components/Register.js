import React, { Component } from "react";
import { Form, Icon, Input, Button, Row, Col } from "antd";
import "antd/dist/antd.css";
import Style from "../css/SlideForm.module.css";
import "./../css/customAntd.css";
import { BrowserRouter, Link } from "react-router-dom";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtaccount: "",
      txtpass: "",
      txtemail: ""
    };
  }

  handleSubmitLogin = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (this.state.txtpass)
        if (!err) {
          localStorage.setItem("register", JSON.stringify(this.state));
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

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Xác Nhận Mật Khẩu Không Khớp");
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" style={{ alignItems: "center" }}>
        <Col span={20}>
          <h1 style={{ textAlign: "center" }}>Đăng Kí</h1>
          <Form onSubmit={this.handleSubmitLogin}>
            <label>Họ Tên</label>
            <Form.Item hasFeedback>
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Mời bạn nhập tên" }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Họ Và Tên"
                  name="txtaccount"
                  onChange={this.onChange}
                />
              )}
            </Form.Item>

            <label>Địa Chỉ Email</label>
            <Form.Item hasFeedback>
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Mời bạn nhập địa chỉ Email" },
                  {
                    type: "email",
                    message: "Bạn phải nhập đúng dạng địa chỉ Email"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Địa Chỉ Email"
                  name="txtemail"
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
            <label>Xác Nhận Mật Khẩu</label>
            <Form.Item hasFeedback>
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "Please confirm your password!"
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(
                <Input.Password
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Nhập Lại Mật Khẩu"
                  name="txtpass"
                  onChange={this.onChange}
                />
              )}
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
                Đăng Kí
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

export default Form.create({ name: "Register" })(Register);
