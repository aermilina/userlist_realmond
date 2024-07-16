import React from 'react';
import { User } from '@/types';

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  const { username, email, phone } = user;
  return (
    <div className="h-auto max-w-full rounded-lgblock max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {username}
      </p>
      {email && <p className="font-normal text-gray-700 dark:text-gray-400">email: {email}</p>}
      {phone && <p className="font-normal text-gray-700 dark:text-gray-400">phone: {phone}</p>}
    </div>
  );
}
