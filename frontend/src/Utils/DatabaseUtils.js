import FirebaseUtils from './FirebaseUtils';

class DatabaseUtils {

  static saveUserProfile(userId, profile) {
    FirebaseUtils.saveUserProfile(userId, profile);
  }

  static loadUserProfile(userId, callback) {
    FirebaseUtils.loadUserProfile(userId, callback);
  }

  static saveItem(item) {
    FirebaseUtils.saveItem(item);
  }

}

export default DatabaseUtils;