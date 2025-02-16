import { ReactComponent as Google } from '../../assets/svgs/google-logo.svg';
import { ReactComponent as Naver } from '../../assets/svgs/naver-logo.svg';
import { ReactComponent as Kakao } from '../../assets/svgs/kakao-logo.svg';
import { ReactComponent as Discord } from '../../assets/svgs/discord-logo.svg';

function SocialLogin() {
  return (
    <div>
      <div className="mb-[20px] flex items-center text-[12px] text-[#dddddd] gap-[8px]">
        <div className="w-[110px] h-[1px] bg-[#ebeef1]" />
        <p>소셜 계정으로 로그인</p>
        <div className="w-[110px] h-[1px] bg-[#ebeef1]" />
      </div>
      <div className="mb-[70px] flex gap-[25px] items-center justify-center">
        <Google />
        <Naver />
        <Kakao />
        <Discord />
      </div>
      <div className="text-[13px] text-[#dddddd] flex gap-[8px] justify-center">
        <p>더 많은 이야기가 궁금하다면?</p>
        <p className="text-[#00ffd0]">회원가입</p>
      </div>
    </div>
  );
}

export default SocialLogin;
