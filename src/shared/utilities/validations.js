import * as Yup from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

export const contactUsV = {
  username: '',
  email: '',
  body: '',
};

export const bankDetaisVS = {
  holderName: '',
  accountNumber: '',
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

export const cardDetails = {
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  nameOnCard: '',
  address: '',
  country: '',
};

export const LoginVS = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, 'Please provide a valid email address')
    .email('Please provide a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const UpdateProfileVS = Yup.object().shape({
  name: Yup.string().required('Name Required'),
  email: Yup.string()
    .matches(emailRegex, 'Please provide a valid email address')
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const SignupVS = Yup.object().shape({
  name: Yup.string().required('Name Required'),
  email: Yup.string()
    .matches(emailRegex, 'Please provide a valid email address')
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const ForgotPassVS = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, 'Please provide a valid email address')
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const NewPassVS = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  confirmPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const ContactUsVS = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, 'Please provide a valid email address')
    .required('Email Required')
    .email('Please provide a valid email address'),
  username: Yup.string().required('Username Required'),
  body: Yup.string().required('Message Required'),
});
export const ResetPassVS = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Old Password Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('New Password Required'),
  confirmPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const DeleteAccountVS = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const myDataVS = Yup.object().shape({
  fullName: Yup.string(),
  gender: Yup.string(),
  email: Yup.string()
    .matches(emailRegex, 'Please provide a valid email address')
    .email('Please provide a valid email address')
    .required('Email Required'),
  phone: Yup.string(),
  dob: Yup.string(),
  countries: Yup.string(),
  cities: Yup.string(),
  degrees: Yup.string(),
  profession: Yup.string(),
  experience: Yup.string(),
  status: Yup.string(),
  kids: Yup.string(),
  smoking: Yup.string(),
  weight: Yup.string(),
  interests: Yup.string(),
});

export const cardDetailsVS = Yup.object().shape({
  cardNumber: Yup.string().label('Card number').max(16).required(),
  expiryDate: Yup.string().required('Expiry Date is Required'),
  cvv: Yup.string().label('CVC').min(3).max(4).required(),
  nameOnCard: Yup.string().label('Name on card').required(),
  address: Yup.string(),
  country: Yup.string().required('Country is Required'),
});
