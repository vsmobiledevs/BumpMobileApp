/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

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

    if (result.isCancelled) {
        Toast.showWithGravity('User cancelled the signin request ', Toast.SHORT, Toast.BOTTOM);
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        Toast.showWithGravity('Something went wrong obtaining access token', Toast.SHORT, Toast.BOTTOM);
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
}

// Handlers
const openGallery = async (Options, setVisible, setImg) => {
    setVisible(false);
    let res = await launchImageLibrary(Options, (response) => {
        if (response.didCancel) {
            /* empty */
            Toast.showWithGravity('User cancelled the request ', Toast.SHORT, Toast.BOTTOM);
        } else if (response.error) {
            /* empty */
        } else if (response.customButton) {
            /* empty */
        } else {


            return response.assets[0]
        }
    });

    let obj = {
        type: res?.assets[0]?.type,
        uri: res?.assets[0]?.uri,
        name: res?.assets[0]?.fileName,
    };

    return obj;
};

// Open Camera
const openCamera = async (Options, setVisible, setImg) => {
    setVisible(false);

    let res = await launchCamera(Options, (response) => {
        // Use launchImageLibrary to open image gallery
        if (response.didCancel) {
            /* empty */
            Toast.showWithGravity('User cancelled the request ', Toast.SHORT, Toast.BOTTOM);
        } else if (response.error) {
            /* empty */
        } else if (response.customButton) {
            /* empty */
        } else {


            return response.assets[0]
        }
    });
    let obj = {
        type: res?.assets[0]?.type,
        uri: res?.assets[0]?.uri,
        name: res?.assets[0]?.fileName,
    };
    return obj;
};

export { onGoogle, onFacebook, openCamera, openGallery };
