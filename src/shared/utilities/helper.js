export const responseValidator = (response, errorMsg) => {
  let errorCode = response;
  let errorMessage = '';
  console.log(errorCode);
  switch (errorCode) {
    case 401:
      if (errorMsg?.message) {
        errorMessage = errorMsg?.message;
      } else {
        errorMessage = 'Something went wrong!';
      }
      break;

    case 400:
      errorMessage = errorMsg?.message;
      if (errorMsg?.message) {
        errorMessage = errorMsg?.message;
      } else {
        errorMessage = 'Something went wrong!';
      }
      break;

    case 404:
      errorMessage = errorMsg?.message;
      if (errorMsg?.message) {
        errorMessage = errorMsg?.message;
      } else {
        errorMessage = 'Something went wrong!';
      }
      break;

    case 500:
      if (errorMsg?.error) {
        errorMessage = errorMsg?.error[0];
      } else {
        errorMessage = 'Internal Server Error Please Try Again!';
      }
      break;

    default:
      break;
  }

  return errorMessage;
};
