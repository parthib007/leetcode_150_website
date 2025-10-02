'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-white">Welcome, {session.user?.name}</p>
        <button 
          onClick={() => signOut()} 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={() => signIn('github')} 
        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with GitHub
      </button>
      <button 
        onClick={() => signIn('google')} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
