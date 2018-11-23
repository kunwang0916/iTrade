import firebase from "firebase";
import uuidv1 from "uuid/v1";

const IMAGE_STORAGE_PATH = "image/";
const USER_TABLE_PATH = "users";
const ITEM_TABLE_PATH = "items";

class FirebaseUtils {

  static initFirebase() {
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    var config = {
      apiKey: "AIzaSyAj7HZ6tq8eZQh1tbZrGdtjD4O3okTRf0s",
      authDomain: "itrade-240ec.firebaseapp.com",
      databaseURL: "https://itrade-240ec.firebaseio.com",
      projectId: "itrade-240ec",
      storageBucket: "itrade-240ec.appspot.com",
      messagingSenderId: "3803212631"
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
    const imagePath = IMAGE_STORAGE_PATH + '/' +  uuidv1() + '.' + format;
    const imageRef = this.storageRef(imagePath);
    imageRef.put(imageFile).then(function(snapshot) {
      snapshot.ref.getDownloadURL().then(function (downloadURL) {
        callback(downloadURL);
      });
    });
  }

  static databaseRef(path) {
    return firebase.database().ref(path);
  }

  static saveUserProfile(userId, profile) {
    const path = USER_TABLE_PATH + '/' + userId;
    this.databaseRef(path).set(profile);
  }

  static loadUserProfile(userId, callback) {
    const path = USER_TABLE_PATH + '/' + userId;
    this.databaseRef(path).once('value').then(function(snapshot) {
      const val = snapshot.val();
      callback(val);
    })
  }

  static saveItem(item, callback) {
    if (!item.id) {
      item.id = uuidv1()
    }
    const path = ITEM_TABLE_PATH + '/' + item.id;
    this.databaseRef(path).set(item);
    callback(item);
  }

  static loadItem(itemId, callback) {
    const path = ITEM_TABLE_PATH + '/' + itemId;
    this.databaseRef(path).once('value').then(function (snapshot) {
      const val = snapshot.val();
      callback(val);
    })
  }

  static loadItemList(callback) {
    this.databaseRef(ITEM_TABLE_PATH).once('value', function (snapshot) {
      let items = []
      snapshot.forEach(function (childSnapshot) {
        const item = childSnapshot.val();
        items.push(item);
      });
      callback(items);
    });;
  }
}

export default FirebaseUtils;