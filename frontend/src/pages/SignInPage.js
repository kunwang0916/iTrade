import React, { Component } from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import BasicLayout from '../components/common/BasicLayout';

class SignInPage extends Component {
  render() {
    // Configure FirebaseUI.
    const uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: '/',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ]
    };


    const content = (
      <div style={{ margin: '40vh 10vw' }}>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )
    return (
      <BasicLayout content={content} title={"Sign In"} />
    );
  }
}

export default SignInPage;