import Header from '../components/common/Header.tsx';
import LoginForm from '../components/login/LoginForm.tsx';
import SocialLogin from '../components/login/SocialLogin.tsx';
import UserReview from '../components/ratings/UserReview.tsx';

function LoginPage() {
  return (
    <>
      <UserReview />
      <Header />
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className="text-center mb-[54px]">
          <h1 className="text-[36px] mb-[12px] font-medium text-[#DDDDDD]">
            TIMOGG에 어서오세요
          </h1>
          <p className="text-[14px]">가입하고 유저들과 의견을 나누어보세요!</p>
        </div>
        <LoginForm />
        <SocialLogin />
      </div>
    </>
  );
}

export default LoginPage;
