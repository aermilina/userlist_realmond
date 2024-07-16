import React from 'react';
import UserCard from '../UserCard';
import { User } from '@/types';
import Search from '../Search';
import { useUsers } from '@/hooks';

interface Props {
  defaultUsers: User[];
}

export default function UserList({ defaultUsers }: Props) {
  const { handleChange, searchedUsers, inputValue } = useUsers(defaultUsers);
  return (
    <section className="text-center min-h-screen">
      <h1 className="mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
        Users
      </h1>
      <Search defaultUsers={defaultUsers} handleChange={handleChange} inputValue={inputValue} />
      <div className="grid grid-cols-1 p-10 md:grid-cols-3 gap-4">
        {searchedUsers.length === 0 && <p className="mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Sorry, users are not found</p>}
        {searchedUsers.length > 0 &&
          searchedUsers.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
      </div>
    </section>
  );
}
