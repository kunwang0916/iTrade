import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';
import UserProfile from '../components/UserProfilePage/UserProfile';

class UserProfilePage extends Component {
  render() {
    const content = (
      <React.Fragment>
        <UserProfile />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"User Profile"} />
    );
  }
}

export default UserProfilePage;