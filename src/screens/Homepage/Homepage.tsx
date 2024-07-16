import React from 'react';
import { Header, Footer, UserList } from '@/components';
import { User } from '@/types';

interface Props {
  data: User[];
}

export default function Homepage({ data }: Props) {
  const users = data.slice(0, 9);

  return (
    <>
      <Header />
      <UserList defaultUsers={users} />
      <Footer />
    </>
  );
}
