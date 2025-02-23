import {
  AnyPositionIcon,
  BottomPositionIcon,
  HeadsetIcon,
  JunglePositionIcon,
  MidPositionIcon,
  MikeIcon,
  MikeMuteIcon,
  SupportPositionIcon,
  TopPositionIcon,
} from '../../assets/svgs/assets.ts';
import useMatchReducer from '../../hooks/useMatchReducer.ts';

export default function MatchOptionStatus() {
  let [state, dispatch] = useMatchReducer();

  const handleClick = (type: string, value: string) => {
    dispatch({ type, value });
  };

  return (
    <>
      <div className="w-307 py-20 bg-[#161616] rounded-2xl overflow-hidden flex flex-col gap-[16px] items-center">
        <Section label="큐 타입" changeStyle={'flex flex-col gap-0'}>
          <ButtonBox
            items={[
              { label: '솔로랭크' },
              { label: '자유랭크' },
              { label: '일반' },
              { label: '상관없음' },
            ]}
            type="queueType"
            onClick={handleClick}
            state={state}
          />
        </Section>
        <Section label="내정보">
          <IconBox
            iconType="position"
            label="포지션"
            type="myPosition"
            onClick={handleClick}
            state={state}
          />
          <ButtonBox
            label="플레이스타일"
            items={[
              { label: '즐겜' },
              { label: '빡겜' },
              { label: '상관없음' },
            ]}
            type="playStyle"
            onClick={handleClick}
            state={state}
          />
          <ButtonBox
            label="내 상태"
            items={[
              { label: '첫판' },
              { label: '계속 플레이' },
              { label: '마지막판' },
            ]}
            type="gameStatus"
            onClick={handleClick}
            state={state}
          />
          <IconBox
            iconType="mic"
            label="마이크"
            type="mic"
            onClick={handleClick}
            state={state}
          />
        </Section>
        <Section label="듀오 찾기">
          <IconBox
            iconType="position"
            label="포지션"
            type="duoPosition"
            onClick={handleClick}
            state={state}
          />
          <ButtonBox
            label="듀오 스타일"
            items={[
              { label: '친목/잡담' },
              { label: '오더/보이스' },
              { label: '즐겜/빡겜' },
            ]}
            type="duoStyle"
            onClick={handleClick}
            state={state}
          />
        </Section>
      </div>
    </>
  );
}

interface BoxItemProps {
  label: string;
  type: string;
  state: any;
  onClick: (type: string, value: string) => void;
}
interface IconBoxProps {
  label?: string;
  iconType: 'position' | 'mic';
  type: string;
  state: any;
  onClick: (type: string, value: string) => void;
}
interface ButtonBoxProps {
  label?: string;
  items: { label: string }[];
  type: string;
  state: any;
  onClick: (type: string, value: string) => void;
}
interface SectionProps {
  label: string;
  changeStyle?: string;
  children: React.ReactNode;
}

const Section = ({ label, changeStyle, children }: SectionProps) => {
  return (
    <div className={changeStyle ? changeStyle : 'flex flex-col gap-12'}>
      <div className="text-body1-16-bold text-secondary-green">{label}</div>
      <>{children}</>
    </div>
  );
};
const ButtonBoxItem = ({ label, type, onClick, state }: BoxItemProps) => {
  return (
    <div
      className={`w-full h-full flex justify-center items-center px-10 ${state[type] === label ? 'bg-secondary-green' : 'bg-primary-white'} hover:bg-primary-green`}
      // state[type] === label일때 색상 변경
      onClick={() => onClick(type, label)}
    >
      <div className="text-black text-body3-13-regular">{label}</div>
    </div>
  );
};
const IconBox = ({ label, iconType, type, onClick, state }: IconBoxProps) => {
  let onHover = 'hover:bg-primary-green rounded-10';
  let positionIcon = [
    <AnyPositionIcon />,
    <TopPositionIcon />,
    <JunglePositionIcon />,
    <MidPositionIcon />,
    <BottomPositionIcon />,
    <SupportPositionIcon />,
  ];
  let positionLabel = ['상관없음', '탑', '정글', '미드', '원딜', '서폿'];
  let micLabel = ['마이크 ON', '마이크 OFF', '헤드셋'];
  let micIcon = [<MikeIcon />, <MikeMuteIcon />, <HeadsetIcon />];
  return (
    <div className="flex-col flex gap-8">
      <div className="text-body3-13-bold text-primary-white ">{label}</div>
      {/* 타입이 포지션일때 표시 */}
      {iconType === 'position' && (
        <div className="w-271 h-33 flex justify-between items-center">
          {positionIcon.map((icon, index) => (
            <div
              key={index}
              className={`w-32 h-32 flex justify-center items-center ${onHover} ${
                state[type] === positionLabel[index] ? 'bg-secondary-green' : ''
              }`}
              onClick={() => onClick(type, positionLabel[index])}
            >
              {icon}
            </div>
          ))}
        </div>
      )}
      {/* 타입이 마이크일때 */}
      {iconType === 'mic' && (
        <div className="w-217 h-33 flex self-center justify-between items-center gap-72">
          {micIcon.map((icon, index) => (
            <div
              key={index}
              className={`w-32 h-32 flex justify-center items-center ${onHover} ${
                state[type] === micLabel[index] ? 'bg-secondary-green' : ''
              }`}
              onClick={() => onClick(type, micLabel[index])}
            >
              {icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const ButtonBox = ({ label, items, type, state, onClick }: ButtonBoxProps) => {
  return (
    <div className="flex-col flex gap-8">
      <div className="text-body3-13-bold text-primary-white ">{label}</div>
      <div className="w-271 h-33 flex justify-between items-center rounded-10 overflow-hidden">
        {items.map((item, index) => (
          <ButtonBoxItem
            key={index}
            label={item.label}
            type={type}
            onClick={onClick}
            state={state}
          />
        ))}
      </div>
    </div>
  );
};
