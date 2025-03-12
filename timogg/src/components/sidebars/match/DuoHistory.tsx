import { SearchIcon } from '../../../assets/svgs/assets';

export default function DuoHistory({
  duoList = [{ name: ' 이름', tag: '태그', profile: '프로필' }],
}: any) {
  return (
    <>
      {/* 듀오 검색 */}
      <div className="flex flex-row gap-4 items-center bg-secondary-darkgray ">
        <input
          type="text"
          placeholder="듀오 검색"
          className="w-270 h-42 px-16 bg-transparent rounded-10 text-primary-white text-body1-16 focus:outline-none"
        />
        <button className="flex justify-center items-center rounded-10">
          <SearchIcon />
        </button>
      </div>
      {/* 듀오 히스토리 리스트 */}
      <div className="w-full flex gap-16 items-center justify-between">
        {duoList.map((duo: any) => (
          <>
            <div className="flex gap-16 items-center justify-between">
              {/* 프로필 */}
              <div className="w-40 h-40 bg-secondary-darkgray rounded-full"></div>
              <div className="flex flex-col gap-4">
                {/* 플레이어 이름 */}
                <div className="text-primary-white text-body1-16-bold">
                  {duo.name}
                </div>
                {/* 플레이어 태그 */}
                <div className="text-primary-white text-body1-16">
                  {duo.tag}
                </div>
              </div>
            </div>
            {/* 평가하기 */}
            <button className="h-42 py-8 rounded-10">
              <div className="text-secondary-green text-body1-16-bold">
                평가하기
              </div>
            </button>
          </>
        ))}
      </div>
    </>
  );
}
