import React from 'react';

interface Message {
  id: string;
  content: string;
  sender: string;
}

const MessageList: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((message) => (
        <div key={message.id} className="mb-4">
          <strong>{message.sender}: </strong>
          <span>{message.content}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;