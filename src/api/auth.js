import axios from './axiosInstance';

export const checkNickname = (nickname) =>
  axios.post('/users/check-nickname', { nickname });

export const checkUsername = (loginId) =>
  axios.post('/users/check-loginId', { loginId });

export const sendVerificationEmail = (email) =>
  axios.post('/email/verify-code', { email });

export const verifyCode = (email, code) =>
  axios.post('/email/verify-code', { email, code });

export const signUp = (formData) =>
  axios.post('/users/signup', formData);

export const getUniversities = () =>
  axios.get('/users/universities');
