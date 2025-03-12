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

export async function testLogin() {
  const response = await axiosInstance.get('/auth/test');
  axiosInstance.defaults.headers.common['Authorization'] =
    `Bearer ${response.data.accessToken}`;
  useAuthStore.setState({
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
  });
  console.log('테스트 로그인 성공', response.data);
}

export async function getMyInfo() {
  const response = await axiosInstance.get('/members/me');
  console.log('내 정보 조회 성공', response.data);
  return response.data;
}
