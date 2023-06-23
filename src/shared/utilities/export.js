/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const onGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();
    return idToken;
  } catch (e) {
    GoogleSignin.signOut();
    Toast.showWithGravity('User cancelled the signin request ', Toast.SHORT, Toast.BOTTOM);
  }
};

async function onFacebook() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  console.log(result);
  if (result.isCancelled) {
    console.log('User cancelled the login process');
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    console.log('Something went wrong obtaining access token');
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

export { onGoogle, onFacebook };
