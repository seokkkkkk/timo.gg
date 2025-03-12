import { useState } from 'react';
import MatchSidebar from '../components/sidebars/match/MatchSidebar';
import Header from '../components/common/Header';
import MatchingPlayerHeader from '../components/match/MatchingPlayerHeader';
import MatchingPlayerTableHeader from '../components/match/MatchingPlayerTableHeader';
import MatchingPlayerTableItem from '../components/match/MatchingPlayerTableItem';

import Chat from '../components/chat/Chat';
import BoardListSidebar from '../components/sidebars/board/BoardListSidebar';
import NotLoginedSidebar from '../components/sidebars/myInfo/NotLoginedSidebar';
let matchingPlayers = Array.from({ length: 20 }, (_, i) => ({
  playerName: `Player${i + 1}`,
  playerTag: `#KR1`,
  tier: [
    'Iron',
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Emerald',
    'Diamond',
    'Master',
    'Grandmaster',
    'Challenger',
  ][Math.floor(Math.random() * 10)],
  gamePlayed: 10,
  //45~60
  winRate: Math.floor(Math.random() * 16) + 45,
  lastPlayed: '1시간 전',
}));
const MatchPage = () => {
  return (
    <>
      <Header />

      <div className="pl-40 relative flex flex-col gap-20 justify-center items-center">
        <div
          id="sidebar"
          className="absolute top-20 left-30 h-full w-307 flex flex-col gap-16"
        >
          <MatchSidebar />
          <NotLoginedSidebar />
          <BoardListSidebar />
        </div>
        {/* 매칭중인 플레이어 헤더 */}
        {/* todo: 듀오가 시작됐을때 화면에 표시 */}
        <Chat />
        <MatchingPlayerHeader />
        <div className="w-874 px-10 bg-secondary-realdarkgray flex flex-col items-center">
          {/* 매칭중인 플레이어 테이블 */}
          <MatchingPlayerTableHeader />
          {matchingPlayers.map((player, i) => (
            <MatchingPlayerTableItem key={i} {...player} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MatchPage;
