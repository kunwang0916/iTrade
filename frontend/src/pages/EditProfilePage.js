import React, { Component } from 'react';
import {
  Spin,
  notification,
} from 'antd';

import BasicLayout from '../components/common/BasicLayout';
import ProfileForm from '../components/EditProfilePage/ProfileForm';
import AccountUtils from '../utils/AccountUtils';

class EditProfilePage extends Component {

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

  handleProfileChange =(profile)=> {
    this.setState({profile});
  }

  handleProfileSave =()=> {
    const { profile } = this.state || {}
    AccountUtils.saveProfile(profile);
    notification.open({
      message: 'save succeed',
      description: 'user profile saved.'
    })
  }

  render() {
    const {
      loading,
      profile,
    } = this.state || {};

    const loadingComponent = (
      <Spin size="large" />
    )

    const content = (
      <React.Fragment>
        {
          loading ? loadingComponent : (
            <ProfileForm profile={profile}
              onChange={this.handleProfileChange}
              onSave={this.handleProfileSave}
            /> 
          )
        }
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"Edit Profile"} />
    );
  }
}

export default EditProfilePage;