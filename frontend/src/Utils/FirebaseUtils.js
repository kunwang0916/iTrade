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

}

export default FirebaseUtils;