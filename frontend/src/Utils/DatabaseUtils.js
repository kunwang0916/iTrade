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
    item.user = AccountUtils.loadProfileFromLocal() || {};
    item.user.id = AccountUtils.getUserID() || '';
    FirebaseUtils.saveItem(item, callback);
  }

  static loadItemListByUserId(userId, callback) {
    FirebaseUtils.loadItemListByUserId(userId, callback);
  }

  static loadItemList(callback) {
    FirebaseUtils.loadItemList(callback);
  }

  static loadItem(id, callback) {
    FirebaseUtils.loadItem(id, callback);
  }

}

export default DatabaseUtils;