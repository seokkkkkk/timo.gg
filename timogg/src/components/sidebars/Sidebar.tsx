import BoardListSidebar from './board/BoardListSidebar';
import MatchSidebar from './match/MatchSidebar';
import NotLoginedSidebar from './myInfo/NotLoginedSidebar';

export default function Sidebar() {
  return (
    <div id="sidebar" className="w-307 flex flex-col gap-16">
      <MatchSidebar />
      <NotLoginedSidebar />
      <BoardListSidebar />
    </div>
  );
}
