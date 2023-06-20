import * as yup from 'yup';

export const loginFormFields = {
  email: '',
  password: '',
};

export const signupFormFields = {
  name: '',
  email: '',
  password: '',
};

export const updateUserFormFields = {
  name: '',
  email: '',
};
export const forgotPassFormFields = {
  email: '',
};

export const newPassFormFields = {
  password: '',
  confirmPassword: '',
};
export const resetPassFormFields = {
  oldPassword: '',
  password: '',
  confirmPassword: '',
};

export const deleteAccountFields = {
  password: '',
};

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const SignupVS = yup.object().shape({
  name: yup.string().required('Name Required'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const UpdateUserVS = yup.object().shape({
  name: yup.string().required('Name Required'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const ForgotPassVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const NewPassVS = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const ResetPassVS = yup.object().shape({
  oldPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Old Password Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const DeleteAccountVS = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});
