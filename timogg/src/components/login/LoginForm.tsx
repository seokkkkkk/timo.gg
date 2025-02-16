import React from 'react';

function LoginForm() {
  return (
    <div className="mb-[64px] flex flex-col gap-[8px]">
      <div className="flex flex-col gap-[8px] mb-[12px]">
        <input
          type="email"
          placeholder="이메일"
          className="w-[320px] h-[53px] bg-white px-[15px] rounded-[10px] text-[#5c667b] outline-none text-[15px]"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-[320px] h-[53px] bg-white px-[15px] rounded-[10px] text-[#5c667b] outline-none text-[15px]"
        />
      </div>
      <button
        type="submit"
        className="bg-[#46CFA7] h-[53px] rounded-[10px] font-bold text-[20px]"
      >
        로그인
      </button>
      <div className="flex gap-[20px] px-[17.5px] items-center text-[13px]">
        <div className="flex gap-[8px] items-center">
          <input type="checkbox" className="w-4 h-4 rounded-[4px]" />
          <p>로그인 유지</p>
        </div>
        <div className="flex gap-[8px] items-center">
          <p>회원가입</p>
          <p>|</p>
          <p>아이디/비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
