import FirebaseUtils from './FirebaseUtils';
import AccountUtils from './AccountUtils';

class DatabaseUtils {

  static saveUserProfile(userId, profile) {
    FirebaseUtils.saveUserProfile(userId, profile);
  }

  static loadUserProfile(userId, callback) {
    FirebaseUtils.loadUserProfile(userId, callback);
  }

  static saveItem(item, callback) {
    item.user = AccountUtils.loadProfileFromLocal();
    FirebaseUtils.saveItem(item, callback);
  }

}

export default DatabaseUtils;