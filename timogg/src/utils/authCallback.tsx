import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { socialLogin } from '../apis/auth';
import useAuthStore from '../storage/useAuthStore';

function AuthCallback() {
  const { provider } = useParams();
  const [searchParams] = useSearchParams();
  const { login } = useAuthStore();

  const code = searchParams.get('code');
  const state = searchParams.get('state');

  useEffect(() => {
    const handleLogin = async () => {
      switch (provider) {
        case 'naver':
          if (code && state) {
            const data = await socialLogin(provider, code, state);

            login(data!.accessToken, data!.refreshToken);

            window.location.href = '/';
          }
          break;
        default:
          break;
      }
    };

    handleLogin();
  }, [provider, code, state]);

  return (
    <div>
      <h1>인증 콜백 처리 중...</h1>
      <p>잠시만 기다려주세요.</p>
    </div>
  );
}

export default AuthCallback;
