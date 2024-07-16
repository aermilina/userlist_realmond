import { useState, ChangeEvent } from 'react';
import { User } from '@/types';

export default function useUsers(defaultUsers: User[]) {
  const [inputValue, setInputValue] = useState('');
  const [filtered, setFiltered] = useState<User[]>(defaultUsers);
  const searchedUsers = inputValue.length !== 0 && filtered.length === 0 ? [] : filtered;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    search(inputValue);
  };

  const search = (term: string) => {
    const filterTerm = term.toLowerCase();
    const filtered = defaultUsers.filter((item) => {
      const { username, phone, email } = item;
      return (
        username.includes(filterTerm) || email?.includes(filterTerm) || phone?.includes(filterTerm)
      );
    });

    setFiltered(filtered);
  };

  return { handleChange, searchedUsers, inputValue };
}
