import React, { Component } from "react";
import "antd/dist/antd.css";
import { Menu, Drawer, Avatar, Icon } from "antd";
import { Link } from "react-router-dom";
class MenuDrawerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const click = () => {
      this.setState({
        visible: false
      });
    };
    return (
      <Drawer
        title={
          <div>
            <Avatar icon={<Icon type="user" />} />
            <span>Vũ Hồng Việt</span>
          </div>
        }
        placement="right"
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
      >
        <Menu style={{ borderRight: "none" }}>
          <Menu.Item>
            <Link to="/name" onClick={click}>
              Thầy Bói Đang Theo Dõi
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/topcomments" onClick={click}>
              Bình Luận Nổi Bật
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/famous" onClick={click}>
              Thầy Bói Nổi Bật
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/logout" onClick={click}>
              Đăng Xuất
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    );
  }
}

export default MenuDrawerIndex;
