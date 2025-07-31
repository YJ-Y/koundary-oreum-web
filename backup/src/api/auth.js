import axiosInstance from './axiosInstance';  // axiosInstance.js 파일에서 axios 인스턴스를 import

export const login = async (loginId, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      loginId,
      password
    });
    return response.data;  // 서버에서 받은 데이터 반환
  } catch (error) {
    throw error.response?.data || error;  // 에러 처리
  }
}

export const checkUsername = async (loginId) => {
  try {
    const response = await axiosInstance.post('users/check-loginId', { loginId });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export const sendVerificationEmail = async (email) => {
  try {
    const response = await axiosInstance.post('/email/send-code', { email });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export const verifyCode = async (email, code) => {
  try {
    const response = await axiosInstance.post('/email/verify-code', { email, code });
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export const signUp = async (formData) => {
  try {
    const response = await axiosInstance.post('/users/signup', formData);  // 회원가입 요청 처리
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}
