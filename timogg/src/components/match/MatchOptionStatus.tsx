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

interface MatchDuoOptionsSeclected {
  queueType: string;
  myInfo: {
    position: string;
    playStyle: string;
    status: string;
    mic: string;
  };
  duoInfo: {
    position: string;
    duoStyle: string;
  };
}
interface BoxItemProps {
  label: string;
  Icon?: any;
}
interface IconBoxProps {
  label?: string;
  type: 'position' | 'mic';
}
interface ButtonBoxProps {
  label?: string;
  items: BoxItemProps[];
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
const ButtonBoxItem = ({ label }: BoxItemProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center px-10 bg-primary-white hover:bg-primary-green">
      <div className="text-black text-body3-13-regular">{label}</div>
    </div>
  );
};
const IconBox = ({ label, type }: IconBoxProps) => {
  let onHover = 'hover:bg-primary-green rounded-10';
  return (
    <div className="flex-col flex gap-8">
      <div className="text-body3-13-bold text-primary-white ">{label}</div>
      {/* 타입이 포지션일때 표시 */}
      {type === 'position' && (
        <div className="w-271 h-33 flex justify-between items-center">
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <AnyPositionIcon />
          </div>
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <TopPositionIcon />
          </div>
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <JunglePositionIcon />
          </div>
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <MidPositionIcon />
          </div>
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <BottomPositionIcon />
          </div>
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <SupportPositionIcon />
          </div>
        </div>
      )}
      {/* 타입이 마이크일때 */}
      {type === 'mic' && (
        <div className="w-217 h-33 flex self-center justify-between items-center gap-72">
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <MikeMuteIcon />
          </div>
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <MikeIcon />
          </div>
          <div
            className={`w-32 h-32 flex justify-center items-center ${onHover}`}
          >
            <HeadsetIcon />
          </div>
        </div>
      )}
    </div>
  );
};
const ButtonBox = ({ label, items }: ButtonBoxProps) => {
  return (
    <div className="flex-col flex gap-8">
      <div className="text-body3-13-bold text-primary-white ">{label}</div>
      <div className="w-271 h-33 flex justify-between items-center rounded-10 overflow-hidden">
        {items.map((item, index) => (
          <ButtonBoxItem key={index} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default function MatchOptionStatus() {
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
          />
        </Section>
        <Section label="내정보">
          <IconBox type="position" label="포지션" />
          <ButtonBox
            label="플레이스타일"
            items={[
              { label: '즐겜' },
              { label: '빡겜' },
              { label: '상관없음' },
            ]}
          />
          <ButtonBox
            label="내 상태"
            items={[
              { label: '첫판' },
              { label: '계속 플레이' },
              { label: '마지막판' },
            ]}
          />
          <IconBox type="mic" label="마이크" />
        </Section>
        <Section label="듀오 찾기">
          <IconBox type="position" label="포지션" />
          <ButtonBox
            label="듀오 스타일"
            items={[
              { label: '친목/잡담' },
              { label: '오더/보이스' },
              { label: '즐겜/빡겜' },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
