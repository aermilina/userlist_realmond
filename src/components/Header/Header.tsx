import React from 'react';
import Image from 'next/image';
import UserListlogo from '@/assets/userListlogo.svg';

const topLinks = [
  { name: 'Users', href: '/' },
  { name: 'Contacts', href: '/contacts' }
];

export default function Header() {
  return (
    <header className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Image src={UserListlogo.src} width={30} height={30} alt="Users logo" />
        <nav className="flex items-center lg:order-2">
          {topLinks.map((item) => {
            const { name, href } = item;
            return (
              <a
                key={href}
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                href={href}>
                {name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
