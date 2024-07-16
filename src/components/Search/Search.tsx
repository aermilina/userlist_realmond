import React from 'react';
import { User } from '@/types';

interface Props {
  defaultUsers: User[];
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  inputValue: string;
}

export default function Search({ handleChange, inputValue }: Props) {
  return (
    <div className="flex p-4 flex-wrap items-center ">
      <label
        htmlFor="search"
        className="mx-auto  mb-5 md:mb-0 md:mx-0  text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl ">
        Search for users:
      </label>
      <input
        type="text"
        id="inputId"
        placeholder="Enter your keywords"
        value={inputValue ?? ''}
        onChange={handleChange}
        className="block p-4 mx-auto md:mx-10 w-full md:w-auto ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
