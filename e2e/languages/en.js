function Translate(){}

Translate.prototype.get = function(term){
  this.languages = languages[term];
  return this.languages
}

const languages = {
  // UTILS
  'UTILS_LOADING': 'Loading...',
  'UTILS_NAME': 'Name',
  'UTILS_CANCEL': 'CANCEL',
  'UTILS_CANCEL_2': 'Cancel',
  'UTILS_CREATE': 'CREATE',
  'UTILS_CREATE_2': 'Create',
  'UTILS_UPLOAD': 'UPLOAD',
  'UTILS_UPLOAD_2': 'Upload',
  'UTILS_OPEN': 'Open',
  'UTILS_DOWNLOAD': 'Download',
  'UTILS_DELETE': 'DELETE',
  'UTILS_DELETE_2': 'Delete',
  'UTILS_REFRESH': 'Refresh',
  'UTILS_OR': 'or',
  'UTILS_CONFIRM': 'CONFIRM',
  // VALIDATION
  'VALIDATION_REQUIRED': 'You left the field blank.',
  'VALIDATION_EMAIL': 'Your email must be look like an e-mail address.',
  'VALIDATION_MIN_LENGTH': /^Please enter at least.*characters.$/,
  'VALIDATION_MAX_LENGTH': /^Please enter no more than.*characters.$/,
  'VALIDATION_MATCH': 'Please enter the same value again.',
  // SETTINGS:
  'SETTINGS_ACCOUNT': 'My Account',
  'SETTINGS_BILLING': 'Billing & Cost Management',
  'SETTINGS_SECURITY': 'Security Credentials',
  'SETTINGS_SIGN_OUT': 'Sign Out',
  'SETTINGS_SIGN_OUT_CONFIRM_TITLE': 'Would you like to sign out without your upload?',
  'SETTINGS_SIGN_OUT_CONFIRM_MESSAGE': 'You have in progress opreations or uploads and leaving now will cancel them.Still leaving?',
  'SETTINGS_LEAVE': 'Leave',
  'SETTINGS_STAY': 'Stay',
  // BUCKET:
  'BUCKET_EMPTY_MESSAGE': 'Looks like you don\'t have any Bucket',
  'BUCKET_CREATE_MESSAGE': 'Don\'t worry. It\'s easy to create one.',
  'BUCKET_ERROR_MESSAGE': 'Oops, your connection seems off...',
  'BUCKET_REFRESH_MESSAGE': 'Don\'t worry. You can refresh to try again.',
  'BUCKET_DUPLICATE_MESSAGE': 'That bucket already exists! Please select a different name and try again.',
  'BUCKET_CREATE_2': 'CREATE BUCKET',
  'BUCKET_CREATE': 'Create Bucket',
  'BUCKET_DELETE': 'Delete Bucket',
  'BUCKET_NAME': 'Bucket Name',
  'BUCKET_CREATE_DESCRIPTION': 'The name that you choose must be unique across existing bucket names in S3 Portal.',
  'BUCKET_DELETE_DESCRIPTION': 'The buckets in S3 Portal are unique. If you delete this bucket, you may lose the bucket name to another S3 user.',
  'BUCKET_DELETE_TYPE_NAME': 'Type the name of the bucket to confirm deletion:',
  'BUCKET_DELETE_ERROR_MESSAGE': 'Type the exact name of the bucket you are trying to delete.',
  'BUCKET_DELETE_CONFIRM': /^Deleting this bucket and its objects \( including older versions if applicable\) cannot be undone\. Are you sure you want to delete.*?$/,
  // ACTION_NAVBAR:
  'ACTION_NAVBAR_ACTIONS': 'ACTIONS',
  'ACTION_NAVBAR_ACTIONS_2': 'Actions',
  'ACTION_NAVBAR_PROPERTIES': 'PROPERTIES',
  'ACTION_NAVBAR_PROPERTIES_2': 'Properties',
  'ACTION_NAVBAR_TRANSFERS': 'TRANSFERS',
  'ACTION_NAVBAR_TRANSFERS_2': 'Transfers',
  'ACTION_NAVBAR_NONE': 'NONE',
  'ACTION_NAVBAR_NONE_2': 'None',
  // TOAST:
  'TOAST_SIGN_IN_SUCCESS': 'Sign In Success!',
  'TOAST_SIGN_UP_SUCCESS': 'Sign Up Success!',
  'TOAST_SIGN_OUT_SUCCESS': 'Sign Out Success!',
  'TOAST_SIGN_OUT_FAILURE': 'Sign Out Failure!',
  'TOAST_CREATE_BUCKET_SUCCESS': /^Bucket.*are create success!$/,
  'TOAST_CREATE_BUCKET_FAILURE': /^Bucket.*are create failure, please try again!$/,
  'TOAST_DELETE_BUCKET_SUCCESS': /^Bucket.*Delete Success！$/,
  'TOAST_RESET_PASSWORD_SUCCESS': /^.*Reset Password Success!$/,
  'TOAST_DELETE_ACCOUNT_SUCCESS': /^.* Delete Success!$/,
  'TOAST_DELETE_ACCOUNT_FAIL': /^.* Delete Fail Please Try Again!$/,
  'TOAST_CREATE_FOLDER_SUCCESS': /^Folder.*Create Success！$/,
  'TOAST_CREATE_FOLDER_FAIL': /^Folder.*Create Fail Please Try Again！$/,
  // AUTH:
  'AUTH_EMAIL': 'Email',
  'AUTH_PASSWORD': 'Password',
  'AUTH_RETYPE_PASSWORD': 'Retype Password',
  'AUTH_SIGN_IN': 'SIGN IN',
  'AUTH_SIGN_IN_2': 'Sign In',
  'AUTH_SIGN_UP': 'SIGN UP',
  'AUTH_SIGN_UP_2': 'Sign Up',
  'AUTH_HAVE_ACCOUNT': 'Already have an account?',
  'AUTH_HAVE_NOT_ACCOUNT': 'Don\'t have an account?',
  'AUTH_CREATE_ACCOUNT': 'Create an account',
  'AUTH_LOGIN_TO_YOUR_ACCOUNT': 'Log in to your account',
  'AUTH_ALREADY_EXIST': 'Someone already has that username. Try another?',
  'AUTH_SIGN_IN_INCORRECT': 'Your email or password was incorrect. Please try again.',
  'ADMIN_CREATE_ACCOUNT': 'Create Account',
  // TRANSFER:
  'TRANSFER_AUTO_CLEAR': 'Automatically clear finished transfers',
  'TRANSFER_TITLE_UPLOAD': /^Upload .* to .*$/,
  'TRANSFER_TITLE_DELETE': /^Delete .* from .*$/,
  'TRANSFER_STATUS_DELETING': 'Deleting',
  'TRANSFER_STATUS_DELETED': 'Deleted',
  'TRANSFER_STATUS_UPLOADING': 'Uploading',
  'TRANSFER_STATUS_COMPLETED': 'Completed',
  'TRANSFER_STATUS_RESUMING': 'Resuming',
  'TRANSFER_CANCEL_UPLOAD': /^Upload.*Has Been Cancel$/,
  'TRANSFER_CANCEL_TITLE': 'Would you like to cancel the selected upload?',
  'TRANSFER_CANCEL_DESCRIPTION': 'Cancel this upload cannot be undone, Are You Sure you wanna do this?',
  'TRANSFER_CANCELED': 'Transfer Canceled',
  // FILE:
  'FILE_CREATE_FOLDER': 'CREATE FOLDER',
  'FILE_CREATE_FOLDER_2': 'Create Folder',
  'FILE_STORAGE_CLASS': 'Storage Class',
  'FILE_SIZE': 'Size',
  'FILE_LAST_MODIFIED': 'Last Modified',
  'FILE_EMPTY': '',
  'FILE_OWNER': 'Owner',
  'FILE_NAME': 'File Name',
  'FILE_DO_ACTIONS': 'You can do the following actions',
  'FILE_UPLOAD': 'UPLOAD FILE',
  'FILE_UPLOAD_2': 'Upload File',
  'FILE_EMPTY_BUCKET': 'This bucket is empty',
  'FILE_EMPTY_FOLDER': 'This folder is empty',
  'FILE_UPLOAD_DESCRIPTION': 'To upload files to S3 Portal, click Add Files. To remove files already selected, click the ✖ to the far right of the file name.',
  'FILE_ADD': 'ADD FILES',
  'FILE_ADD_2': 'Add Files',
  'FILE_NUMBER_OF': 'Number of files:',
  'FILE_TOTAL_SIZE': 'Total upload size:',
  'FILE_FOLDER_NAME': 'Folder Name',
  'FILE_FOLDER_DUPLICATED_MESSAGE': 'That folder already exists! Please select a different name and try again.',
  'FILE_NEW_FOLDER': 'New folder',
  'FILE_UPLOAD_SUCCESS_MESSAGE': /^File .* Upload Success!$/,
  'FILE_DELETE_SUCCESS_MESSAGE': /^.* Delete Success！$/,
  // RENAME
  'RENAME_TITLE': 'Rename',
  'RENAME_DESCRIPTION': 'Are you sure you want to rename this item?',
  'RENAME_ITEM_NAME': 'Item Name',
  'RENAME_NEW_NAME': 'New Name',
  'RENAME_SUCCESS': /^Your File.*Rename Success$/,
  'RENAME_FAILURE': /^Your File.*Rename Failure, Please Try Again!$/,
  // MANAGER
  'MANAGER_USER_LIST': 'User List',
  'MANAGER_CREATE_USER': 'CREATE ACCOUNT',
  'MANAGER_USER_DELETE': 'DELETE ACCOUNT',
  'MANAGER_USER_ACCOUNT': 'Account',
  'MANAGER_USER_ROLE': 'Role',
  'MANAGER_USER_REGISTER_TIME': 'Register Time',
  'MANAGER_USER_RESET': 'RESET PASSWORD',
  'MANAGER_USER_RESET_TITLE': 'Reset Password',
  'MANAGER_SEARCH': 'Search',
  'MANAGER_DELETE_TITLE': 'Delete User',
  'MANAGER_DELETE_EMAIL': 'User Email',
  'MANAGER_DELETE_TYPE_NAME': 'Type the email of the account to confirm deletion:',
  'MANAGER_DELETE_ERROR_MESSAGE': 'Type the exact email of the account you are trying to delete.',
  'MANAGER_DELETE_CONFIRM': /^Deleting this account and its bucket \( including older versions if applicable\) cannot be undone\. Are you sure you want to delete .*?$/,
  //MOVE
  'UTILS_MOVE': 'Move',
  'MOVE_TITLE': 'Move',
  'MOVE_DESCRIPTION': 'Choose select files or folders where you want to move',
  'MOVE_SELECTED_ITEMS': 'Selected Items',
  'MOVE_FOIDER': 'My Folders',
  'MOVE_CANCEL' : 'CANCEL',
  'MOVE_CONFIRM' : 'MOVE',
  'TOAST_MOVE_SUCCESSFULLY': /^Your File.*Move Success$/,
  'TOAST_MOVE_FAILURE': /^Your File.*Move Failure, Please Try Again!$/,
  'TOAST_MOVE_FOLDER_SUCCESSFULLY': 'Your File Move Success',
  'TOAST_MOVE_FOLDER_FAILURE': 'Your File Move Failure, Please Try Again!',
  //MAKE_COPY
  'UTILS_REPLICATE': 'Replicate',
  'REPLICATE_DESCRIPTION': 'Would you like to replicate the selected item?',
  'REPLICATE_CANCEL': 'CANCEL',
  'REPLICATE_CONFIRM': 'CONFIRM',
  'TOAST_REPLICATE_SUCCESSFULLY': 'Replicate Success!',
  //USER_QUOTA
  'UTILS_QUOTA' : 'User List',
  'QUOTA_TITLE' : 'User Quota',
  'QUOTA_FORM_TITLE' : 'Change User Quota',
  'QUOTA_FORM_LABLE0' : 'Original Quota Storage',
  'QUOTA_FORM_LABLE1' : 'Quota Capacity Selections',
  'QUOTA_FORM_CANCEL' : 'CANCEL',
  'QUOTA_FORM_SAVE' : 'CONFIRM',
  'TOAST_QUOTA_SUCCESSFULLY' : 'Setting User Quota Success!',
  //ACCOUNT
  'UTILS_ACCOUNT' : 'My Account',
  'ACCOUNT_TITLE' : 'Cpacity Storage',
  'ACOOUNT_TOTAL' : 'Total',
  'ACCOUNT_REMAIN' : 'Remaining',
  'ACCOUNT_TAG_REMAIN' : 'Remaining',
  'ACCOUNT_TAG_USED' : 'Used',
  'ACCOUNT_DISPLAY' : 'Display GB',
  'ACCOUNT_CONFIRM' : 'CONFIRM',
  'ACCOUNT_STORAGE' : 'CPACITY STORAGE',
  'ACCOUNT_TWO' : 'TWO',
  }

module.exports = Translate;
