interface DuoPlayingStatusProps {
  duoName: string;
  duoTag: string;
  onClickOpenChatBtn: () => void;
  onClickDuoEndBtn: () => void;
}
export default function DuoPlayingStatus({
  duoName,
  duoTag,
  onClickOpenChatBtn,
  onClickDuoEndBtn,
}: DuoPlayingStatusProps) {
  return (
    <>
      <h1>
        {duoName}
        {duoTag}
      </h1>{' '}
      <button
        className="w-140 h-42 py-8 flex justify-center items-center bg-secondary-green hover:bg-primary-green rounded-10"
        onClick={onClickOpenChatBtn}
      >
        <div className="text-primary-white text-body1-16-bold">채팅창 열기</div>
      </button>
      <button
        className="w-140 h-42 py-8 flex justify-center items-center rounded-10 bg-[#CF4646] hover:bg-[#FF5A5A]"
        onClick={onClickDuoEndBtn}
      >
        <div className="text-primary-white text-body1-16-bold">듀오 종료</div>
      </button>
    </>
  );
}
