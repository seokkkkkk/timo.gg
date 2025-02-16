import Header from '../components/common/Header.tsx';

function LoginPage() {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className="text-center mb-[54px]">
          <h1 className="text-[36px] mb-[12px] ">TIMOGG에 어서오세요</h1>
          <p className="text-[14px] text-normal">
            가입하고 유저들과 의견을 나누어보세요!
          </p>
        </div>
        <div className="mb-[64px] flex flex-col">로그인</div>
        <div className="flex flex-col">소셜로그인 & 회원가입</div>
      </div>
    </>
  );
}

export default LoginPage;
