import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import defaultProfile from '../../assets/images/default-profile.png';

function Header() {
  return (
    <header className="w-100vw h-[48px] position-fixed top-0 left-0 bg-[#3C3A3A] text-[#DDDDDD] flex items-center pl-[70px] pr-[70px] justify-between">
      <div className="flex items-center gap-[114px]">
        <Logo />
        <div className="flex items-center gap-[23px]">
          <div>홈</div>
          <div>챔피언 분석</div>
          <div>챔피언 티어</div>
          <div>파티찾기</div>
          <div>커뮤니티</div>
        </div>
      </div>
      <div className="flex items-center gap-[8px]">
        <img src={defaultProfile} alt="user profile" className="rounded-full" />
        <p>로그인</p>
      </div>
    </header>
  );
}

export default Header;
