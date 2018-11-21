import FirebaseUtils from './FirebaseUtils';

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
}

export default AccountUtils;