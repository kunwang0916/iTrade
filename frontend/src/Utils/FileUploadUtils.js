import FirebaseUtils from './FirebaseUtils';

class FileUploadUtils {

  static uploadImage(imageFile, callback) {
    FirebaseUtils.uploadImage(imageFile, callback);
  }


}

export default FileUploadUtils;