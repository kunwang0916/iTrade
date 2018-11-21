import firebase from "firebase";

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

  static isLogin() {
    const user = firebase.auth().currentUser;
    if (user) {
      return true;
    }
    return false;
  }

  static signOut() {
    firebase.auth().signOut()
  }

}

export default FirebaseUtils;