import { useNavigate } from 'react-router-dom';
import Header from '../components/common/Header.tsx';
import useAuthStore from '../storage/useAuthStore.tsx';
import { useEffect } from 'react';
import RegisterForm from '../components/login/RegisterForm.tsx';
import { checkRegister } from '../utils/checkRegister.tsx';

function RegisterPage() {
  const router = useNavigate();
  const { userData } = useAuthStore.getState();

  useEffect(() => {
    checkRegister().then(result => {
      if (result) {
        router('/', { replace: true });
      }
    });
  }, [userData]);

  return (
    <>
      <Header />
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col">
        <div className="text-center mb-[54px]">
          <h1 className="text-[36px] mb-[12px] font-medium text-[#DDDDDD]">
            추가 정보 입력
          </h1>
          <p className="text-[14px]">
            서비스를 이용하기 위해 추가 정보를 입력해주세요.
          </p>
        </div>
        <RegisterForm />
      </div>
    </>
  );
}

export default RegisterPage;
