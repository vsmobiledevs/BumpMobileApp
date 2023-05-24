import {ENDPOINTS, HTTP_CLIENT} from '../exporter';

//Authentication Requests
export const registerUser = params => {
  return HTTP_CLIENT.post(ENDPOINTS.REGISTER, params);
};

// export const loginUser = params => {
//   return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
// };

// export const loginUser = async params => {
//   try {
//     console.log('loginUser called with params:', params);
//     const response = await HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
//     console.log('loginUser response:', response);
//     return response;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       console.error('Resource not found:', error.response.data);
//       // Handle the 404 error appropriately (e.g., show an error message)
//     } else if (error.response && error.response.status === 406) {
//       console.log('Not Acceptable:', error);
//       // Handle the 406 error appropriately (e.g., show an error message)
//     } else {
//       console.log('loginUser error:', error);
//       throw error;
//     }
//   }
// };

export const loginUser = async params => {
  try {
    const response = await HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
    console.log('loginUser response:', response);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized:', error.response.data);
      // Handle the 401 error appropriately (e.g., show an error message)
    } else if (error.response && error.response.status === 404) {
      console.log('Resource not found:', error.response.data);
      // Handle the 404 error appropriately (e.g., show an error message)
    } else if (error.response && error.response.status === 406) {
      console.log('Not Acceptable:', error);
      // Handle the 406 error appropriately (e.g., show an error message)
    } else {
      console.log('loginUser error:', error);
      throw error;
    }
  }
};
