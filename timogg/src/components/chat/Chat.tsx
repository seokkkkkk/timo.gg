import { useState } from 'react';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';

interface Message {
  message: string;
  from: string;
}

export default function Chat() {
  //듀오 메세지 수신하면 메세지 객체에 추가
  const newDuomessage: Message = { message: '안녕하세요', from: 'duo' };
  const newMymessage: Message = { message: '안녕하세요', from: 'me' };
  const [messages, setMessages] = useState<Message[]>([
    newDuomessage,
    newMymessage,
  ]);
  // todo : 듀오에게 메세지 왔을때 메세지 객체에 추가
  return (
    <div className="w-875 flex flex-col gap-10 items-center bg-secondary-realdarkgray py-10">
      <ChatHeader playerName="롤10년차개고수" playerTag="KR1" />
      <ChatMessage messages={messages} />
      <ChatInput
        onClickEnter={message =>
          setMessages([...messages, { message, from: 'me' }])
        }
      />
    </div>
  );
}
