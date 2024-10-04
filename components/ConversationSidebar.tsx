import React from 'react';
import Link from 'next/link';

interface Conversation {
  id: string;
  name: string;
}

const ConversationSidebar: React.FC<{ conversations: Conversation[] }> = ({ conversations }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id} className="mb-2">
            <Link href={`/chat/${conversation.id}`}>
              <a className="text-blue-500 hover:underline">{conversation.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationSidebar;