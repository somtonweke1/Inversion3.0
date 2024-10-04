import React from 'react';
import { useRouter } from 'next/router';
import ConversationSidebar from '../../components/ConversationSidebar';
import MessageList from '../../components/MessageList';
import ChatBox from '../../components/ChatBox';

const ChatPage: React.FC = () => {
  const router = useRouter();
  const { conversationId } = router.query;

  // TODO: Fetch actual conversations and messages
  const conversations = [
    { id: '1', name: 'Conversation 1' },
    { id: '2', name: 'Conversation 2' },
  ];
  const messages = [
    { id: '1', content: 'Hello', sender: 'User' },
    { id: '2', content: 'Hi there!', sender: 'Agent' },
  ];

  return (
    <div className="flex h-screen">
      <ConversationSidebar conversations={conversations} />
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-bold p-4">Conversation {conversationId}</h1>
        <MessageList messages={messages} />
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatPage;