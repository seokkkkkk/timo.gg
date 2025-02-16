import { useEffect, useState } from 'react';
import Modal from '../common/Modal.tsx';
import ReviewQuestion from './ReviewQuestion.tsx';
import StarRating from './StarRating.tsx';

function UserReview() {
  const [attitude, setAttitude] = useState('');
  const [speech, setSpeech] = useState('');
  const [skill, setSkill] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {}, [attitude, speech, skill, rating]);

  return (
    <Modal>
      <div className="max-w-[960px] w-full m-10">
        <div className="h-[120px] bg-black rounded-t-[15px] px-[50px] py-[25px] flex items-center gap-[18px]">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="user"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex flex-col justify-between gap-[7px]">
            <div className="flex items-center gap-[10px] text-[20px]">
              <p className="font-medium truncate">나는야 롤쟁이</p>
              <p className="font-extralight text-[#9aa4af] truncate">#1234</p>
            </div>
            <p className="text-[13px] text-[#dddddd] font-light truncate">
              KR | 레더 랭킹 상위 1위 (상위 0%)
            </p>
          </div>
        </div>
        <div className="h-[365px] bg-[#2c2c2c] rounded-b-[15px] px-[56px] pt-[25px] pb-[40px] flex items-center justify-between gap-10">
          <div className="flex flex-col gap-[24px]">
            <ReviewQuestion
              title="소환사분의 태도는 어떤가요?"
              options={[
                { label: '성실하게 임해요', value: 'attitude1' },
                { label: '노력해요', value: 'attitude2' },
                { label: '집중하지 않아요', value: 'attitude3' },
              ]}
              onChange={setAttitude}
            />
            <ReviewQuestion
              title="소환사분의 말투는 어떤가요?"
              options={[
                { label: '매너있는 소환사', value: 'speech1' },
                { label: '평범한 소환사', value: 'speech2' },
                { label: '공격적인 소환사', value: 'speech3' },
              ]}
              onChange={setSpeech}
            />
            <ReviewQuestion
              title="소환사분의 실력은 어떤가요?"
              options={[
                { label: '한 수 배우고 갑니다', value: 'skill1' },
                { label: '무난한 플레이', value: 'skill2' },
                { label: '고의 트롤을 해요', value: 'skill3' },
              ]}
              onChange={setSkill}
            />
          </div>
          <div className="text-center text-[16px]">
            <p className="font-bold mb-[12px]">
              소환사의 매너 점수를 남겨주세요
            </p>
            <StarRating defaultRating={rating} onChange={setRating} />
            <button
              type="submit"
              className="w-[131px] h-[56px] bg-[#46cfa7] rounded-[10px] font-bold mt-8"
            >
              평점 남기기
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default UserReview;
