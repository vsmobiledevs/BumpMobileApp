import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const handleSelectImage = async options => {
  let res = await launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('Image picker cancelled');
    } else if (response.error) {
      console.log('Image picker error:', response.error);
    } else if (response.customButton) {
      console.log('Custom button pressed:', response.customButton);
    } else {
      return response;
    }
  });
  return res;
};

const handleTakePhoto = async options => {
  let res = await launchCamera(options, response => {
    if (response.didCancel) {
      console.log('Camera cancelled');
    } else if (response.error) {
      console.log('Camera error:', response.error);
    } else {
      return response;
    }
  });
  return res;
};

export {handleSelectImage, handleTakePhoto};
