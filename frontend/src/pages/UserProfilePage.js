import React, { Component } from 'react';

import {
  Spin,
} from 'antd';

import BasicLayout from '../components/common/BasicLayout';
import UserProfile from '../components/UserProfilePage/UserProfile';
import AccountUtils from '../utils/AccountUtils';

class UserProfilePage extends Component {
  state = {
    profile: null,
    loading: false,
  }

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.setState({
      loading: true,
    })

    AccountUtils.loadProfile((profile) => {
      this.setState({
        loading: false,
        profile: profile,
      })
    })
  }

  render() {
    const {
      loading,
      profile,
    } = this.state || {};

    const content = (
      <React.Fragment>
        {loading ? <Spin size="large" /> : null }
        <UserProfile value={profile} />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"User Profile"} />
    );
  }
}

export default UserProfilePage;