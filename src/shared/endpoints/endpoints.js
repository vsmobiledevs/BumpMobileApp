/* eslint-disable import/prefer-default-export */
export const endpoints = {
  signUp: 'users',
  login: 'auth/login',
  changePassword: 'users/change_password',
  forgotPassword: 'users/forgot_password',
  verifyOtp: 'users/verify_otp',
  resetPassword: 'users/reset_password',
  updateUser: 'users/update_user',
  termsAndPrivacy: 'static_pages',
  faqs: 'faqs',
  socialLogin: 'social/social_login',
  // google search
  googleSearch: 'search_histories/google_search',
  createShortCut: 'shortcuts',
  contactUs: 'contacts',

  // payment apis
  addCard: 'user_cards',
  deleteCard: 'user_cards/delete_a_card',
};
