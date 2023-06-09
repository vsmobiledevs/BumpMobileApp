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

export const myDataFields = {
  fullName: 'Leslie  Alexander',
  gender: [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ],
  email: 'jessica.hanson@example.com',
  phone: '(704) 555-0127',
  dob: '10/12/1987',
  countries: [
    { label: 'Australia', value: 'australia' },
    { label: 'England', value: 'england' },
  ],
  cities: [
    { label: 'London', value: 'london' },
    { label: 'Liverpool', value: 'liverpool' },
  ],
  degrees: [
    { label: 'BSCS', value: 'bscs' },
    { label: 'MSCS', value: 'mscs' },
  ],
  profession: [
    { label: 'Software Engineer', value: 'softwareEngineer' },
    { label: 'Project Manager', value: 'projectManager' },
  ],
  experience: '4 years',
  status: [
    { label: 'Married', value: 'married' },
    { label: 'Single', value: 'single' },
    { label: 'Divorced', value: 'divorced' },
  ],
  kids: '4',
  smoking: [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ],
  weight: '75 kg',
  interests: [
    {
      id: 0,
      title: 'Music',
      icon: '',
    },
    {
      id: 1,
      title: 'Gym',
      icon: '',
    },
    {
      id: 2,
      title: 'Food',
      icon: '',
    },
  ],
};

export const LoginVS = yup.object().shape({
  email: yup.string().required('Email Required').email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const SignupVS = yup.object().shape({
  name: yup.string().required('Name Required'),
  email: yup.string().required('Email Required').email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const ForgotPassVS = yup.object().shape({
  email: yup.string().required('Email Required').email('Please provide a valid email address'),
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

export const myDataVS = yup.object().shape({
  fullName: yup.string(),
  gender: yup.string(),
  email: yup.string().email('Please provide a valid email address'),
  phone: yup.string(),
  dob: yup.string(),
  countries: yup.string(),
  cities: yup.string(),
  degrees: yup.string(),
  profession: yup.string(),
  experience: yup.string(),
  status: yup.string(),
  kids: yup.string(),
  smoking: yup.string(),
  weight: yup.string(),
  interests: yup.string(),
});
