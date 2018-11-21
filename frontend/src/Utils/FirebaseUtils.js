import firebase from "firebase";
import * as firebaseui from 'firebaseui'

class FirebaseUtils {
  
  static initFirebase() {
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    var config = {
      apiKey: "<API_KEY>",
      authDomain: "<PROJECT_ID>.firebaseapp.com",
      databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
      storageBucket: "<BUCKET>.appspot.com",
    };

    firebase.initializeApp(config);
  }

  static signIn() {
    // FirebaseUI config.
    var uiConfig = {
      signInSuccessUrl: '/signIn',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign('<your-privacy-policy-url>');
      }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);
  }

  static logout() {

  }

}

export default FirebaseUtils;