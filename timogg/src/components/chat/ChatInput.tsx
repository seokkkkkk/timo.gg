import { useRef, useState } from 'react';
import { SendIcon } from '../../assets/svgs/assets';

interface QuickRepliesMenuProps {
  quickReplies: string[];
  selectedIndex: number;
  onClick: (index: number) => void;
}

const QuickRepliesMenu = ({
  quickReplies,
  selectedIndex,
  onClick,
}: QuickRepliesMenuProps) => {
  return (
    <div className="w-full py-8 absolute z-10 bottom-40">
      {quickReplies.map((reply, index) => (
        <div
          key={index}
          className={`h-40 py-12 px-4 my-1 flex items-center rounded shadow border-t border-secondary-gray ${
            index === selectedIndex ? 'bg-primary-green' : ''
          }`}
          onClick={() => onClick(index)}
        >
          {reply}
        </div>
      ))}
    </div>
  );
};

interface ChatInputProps {
  onClickEnter: (message: string) => void;
}

export default function ChatInput({ onClickEnter }: ChatInputProps) {
  const quickReplies = [
    '안녕하세요',
    '조합 맞추고 할까요?',
    '지금 접속중이신가요?',
    '즐거운 롤 되세요~',
  ];

  const [input, setInput] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      setSelectedIndex(prev =>
        prev <= 0 ? quickReplies.length - 1 : prev - 1,
      );
      setInput(quickReplies[selectedIndex]);
      isMenuOpen || setIsMenuOpen(true);
      // 화살표 위키로 이동시 포커스가 맨 앞으로가는 것을 방지
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      setSelectedIndex(prev =>
        prev >= quickReplies.length - 1 ? 0 : prev + 1,
      );
      setInput(quickReplies[selectedIndex]);
      isMenuOpen || setIsMenuOpen(true);
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0) {
        sendMessage(quickReplies[selectedIndex]);
      } else {
        sendMessage(input);
      }
    } else if (e.key === 'Escape') {
      // ESC 키로 메뉴 닫기
      setIsMenuOpen(false);
      setInput(inputRef.current?.value || '');
      setSelectedIndex(-1);
    }
  };

  const onClickMenu = (index: number) => {
    setInput(quickReplies[index]);
    inputRef.current?.focus();
    setSelectedIndex(index);
  };

  const sendMessage = (message: string) => {
    if (message.trim()) {
      onClickEnter(message);
      setInput('');
      setSelectedIndex(-1);
      inputRef.current?.focus();
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setSelectedIndex(-1);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      {isMenuOpen && (
        <QuickRepliesMenu
          quickReplies={quickReplies}
          selectedIndex={selectedIndex}
          onClick={onClickMenu}
        />
      )}

      <div className="flex flex-row items-center  bg-secondary-darkgray rounded-10">
        <div
          className="p-2 text-white text-center bg-primary-green rounded-l-10 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          빠른 응답
        </div>
        <input
          type="text"
          value={selectedIndex >= 0 ? quickReplies[selectedIndex] : input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border rounded bg-secondary-darkgray border-secondary-darkgray focus:outline-none"
          placeholder="메시지를 입력하세요..."
          ref={inputRef}
        />
        <div className="flex items-center justify-center bg-primary-green">
          <SendIcon
            className=" text-white rounded-r-10 cursor-pointer"
            onClick={() => sendMessage(input)}
          />
        </div>
      </div>
    </div>
  );
}
