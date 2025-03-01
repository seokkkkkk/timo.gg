import { axiosInstance } from '.';
import useAuthStore from '../storage/useAuthStore';

export const socialLoginCallback = async (provider: string) => {
  switch (provider) {
    case 'naver':
      window.location.href = `http://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=${process.env.REACT_APP_NAVER_STATE}`;
      break;
    default:
      break;
  }
};

export const socialLogin = async (
  provider: string,
  authorizationCode: string,
  state: string,
) => {
  switch (provider) {
    case 'naver':
      try {
        const response = await axiosInstance.post('/auth/naver', {
          authorizationCode,
          state,
        });
        return response.data;
      } catch (error) {
        alert('로그인에 실패했습니다.');
        window.location.href = '/';
        throw error;
      }
    default:
      return { accessToken: '', refreshToken: '' };
  }
};
