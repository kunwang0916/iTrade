import React, { Component } from 'react';
import BasicLayout from '../components/common/BasicLayout';
import ProfileForm from '../components/EditProfilePage/ProfileForm';

class EditProfilePage extends Component {
  render() {
    const content = (
      <React.Fragment>
        <ProfileForm />
      </React.Fragment>
    )
    return (
      <BasicLayout content={content} title={"Edit Profile"} />
    );
  }
}

export default EditProfilePage;