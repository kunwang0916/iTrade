import React from 'react';
import {
  Layout,
  Menu,
  Icon,
} from 'antd';

import {
  Link
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
        <Menu.Item key='sign_in' onClick={this.handleLogoutClick}>
          <Link to='/signIn'>Sign In</Link>
        </Menu.Item>
      ]
    }

    return (
      <Layout.Header style={{ textAlign: 'center', background: '#f0f2f5', color: '#333333', fontWeight: 'bold'}}>
        <Menu mode="horizontal">
          <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />{title}</span>}>
            <Menu.Item key='home'>
              <Link to='/'>Home</Link>
            </Menu.Item>
            {menuItems}
          </Menu.SubMenu>
        </Menu>
      </Layout.Header>
    )
  }
}

export default AppHeader;