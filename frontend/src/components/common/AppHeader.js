import React from 'react';
import {
  Layout,
  Menu,
  Button,
  Dropdown,
  Row,
  Col,
} from 'antd';

import {
  Link,
  withRouter,
} from 'react-router-dom';

import AccountUtils from '../../utils/AccountUtils';
import firebase from "firebase";

class AppHeader extends React.Component {
  state = {
    isLogin: false,
  }

  handleLogoutClick =()=> {
    AccountUtils.signOut();
    this.setState({ isLogIn: false });
    // redirect to home page
    this.props.history.push("/");
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(function (user) {
      let isLogIn = false;
      if (user) {
        isLogIn = true;
      }
      this.setState({ isLogIn });
    }.bind(this));
  }

  render () {
    const {
      title,
    } = this.props;

    let menuItems;
    if (AccountUtils.isLogIn()) {
      menuItems = [
        <Menu.Item key='user_profile'>
          <Link to='/myProfile'>My Profile</Link>
        </Menu.Item>,
        <Menu.Item key='my_items'>
          <Link to='/myItems'>My Items</Link>
        </Menu.Item>,
        <Menu.Item key='log_out'
          onClick={this.handleLogoutClick}>
          Log Out
        </Menu.Item>
      ]
    } else {
      menuItems = [
        <Menu.Item key='sign_in'>
          <Link to='/signIn'>Sign In</Link>
        </Menu.Item>
      ]
    }

    const menu = (
      <Menu mode="horizontal">
        <Menu.Item key='home'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        {menuItems}
      </Menu>
    )

    return (
      <Layout.Header style={{ background: '#fff'}}>
        <Row gutter={16}>
          <Col span={4} />
          <Col span={16} style={{textAlign:'center'}}>
            <h3>{title}</h3>
          </Col>
          <Col span={4} style={{ textAlign: 'right' }}>
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button icon='setting'>Menu</Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    )
  }
}

export default withRouter(AppHeader);