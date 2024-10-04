import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Chatwoot Clone</h1>
      <Link href="/chat/1">
        <a className="text-blue-500 hover:underline">Go to Chat</a>
      </Link>
    </div>
  );
};

export default Home;