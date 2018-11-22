import firebase from "firebase";
import uuidv1 from "uuid/v1";

const IMAGE_STORAGE_PATH = "image/"

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
    firebase.auth().signOut();
  }

  static storageRef(path) {
    return firebase.storage().ref().child(path);
  }

  static uploadImage(imageFile, callback) {
    const format = imageFile.type.split("/")[1];
    const imagePath = IMAGE_STORAGE_PATH +  uuidv1() + '.' + format;
    const imageRef = this.storageRef(imagePath);
    imageRef.put(imageFile).then(function(snapshot) {
      snapshot.ref.getDownloadURL().then(function (downloadURL) {
        callback(downloadURL);
      });
    });
  }

}

export default FirebaseUtils;