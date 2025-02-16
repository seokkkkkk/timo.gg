import { Link } from 'react-router-dom';
import defaultProfile from '../../assets/images/default-profile.png';
import { TimoLogo } from '../../assets/svgs/assets';

interface MenuItemProps {
  to: string;
  label: string;
}

function MenuItem({ to, label }: MenuItemProps) {
  return (
    <Link
      to={to}
      replace
      className="cursor-pointer hover:text-white transition-colors truncate"
    >
      {label}
    </Link>
  );
}

function Menu() {
  const menuItems = [
    { to: '/', label: '홈' },
    { to: '/champion-analysis', label: '챔피언 분석' },
    { to: '/champion-tier', label: '챔피언 티어' },
    { to: '/party-finding', label: '파티찾기' },
    { to: '/community', label: '커뮤니티' },
  ];

  return (
    <div className="flex items-center gap-[23px]">
      {menuItems.map(item => (
        <MenuItem key={item.to} to={item.to} label={item.label} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="w-screen h-[48px] top-0 left-0 bg-[#3C3A3A] text-[#DDDDDD] flex items-center pl-[70px] pr-[70px] justify-between fixed">
      <div className="flex items-center max-w-[586px] w-full justify-between">
        <TimoLogo />
        <Menu />
      </div>
      <div className="flex items-center gap-[8px]">
        <img src={defaultProfile} alt="user profile" className="rounded-full" />
        <Link
          to="/login"
          className="cursor-pointer hover:text-white transition-colors truncate"
        >
          로그인
        </Link>
      </div>
    </header>
  );
}

export default Header;
