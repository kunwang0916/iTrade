import React from 'react';
import {
  Layout,
  Menu,
  Icon,
} from 'antd';

import {
  Link
} from 'react-router-dom';

class AppHeader extends React.Component {

  handleLogoutClick =()=> {
    console.log('handleLogoutClick');
  }

  render () {
    const {
      title,
    } = this.props;

    return (
      <Layout.Header style={{ textAlign: 'center', background: '#f0f2f5', color: '#333333', fontWeight: 'bold'}}>
        <Menu mode="horizontal">
          <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />{title}</span>}>
            <Menu.Item >
              <Link to='/userProfile'>My Profile</Link>
            </Menu.Item>
            <Menu.Item >
              <Link to='/myItems'>My Items</Link>
            </Menu.Item>
            <Menu.Item onClick={this.handleLogoutClick}>
              Log Out
            </Menu.Item>
            <Menu.Item onClick={this.handleLogoutClick}>
              <Link to='/signIn'>Sign In </Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Header>
    )
  }
}

export default AppHeader;