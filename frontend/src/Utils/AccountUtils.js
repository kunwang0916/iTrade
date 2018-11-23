import FirebaseUtils from './FirebaseUtils';
import DatabaseUtils from './DatabaseUtils';
import firebase from 'firebase';

const USER_ID_KEY = 'itrade_user_id';
const USER_PROFILE_KEY = 'itrade_user_profile';

class AccountUtils {

  static signIn() {
    FirebaseUtils.signIn();
  }

  static signOut() {
    FirebaseUtils.signOut();
  }

  static isLogIn() {
    return FirebaseUtils.isLogin();
  }

  static getUserID() {
    return localStorage.getItem(USER_ID_KEY);
  }

  static saveUserIDToLocal(userID) {
    localStorage.setItem(USER_ID_KEY, userID);
  }

  static saveProfileToLocal(profile) {
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  }

  static loadProfileFromLocal() {
    return JSON.parse(localStorage.getItem(USER_PROFILE_KEY) || '{}');
  }

  static updateUserId() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        AccountUtils.saveUserIDToLocal(user.uid);
        AccountUtils.loadProfile((profile) => {
          AccountUtils.saveProfileToLocal(profile);
        });
      } else {
        console.log('No user is signed in.');
      }
    });
  }

  static loadProfile(callback) {
    const userId = this.getUserID();
    if (userId && userId.length > 0) {
      DatabaseUtils.loadUserProfile(userId, callback);
    } else {
      callback({})
    }
  }

  static saveProfile(profile) {
    const userId = this.getUserID();
    if (userId && userId.length > 0) {
      FirebaseUtils.saveUserProfile(userId, profile);
    }
  }

}

export default AccountUtils;