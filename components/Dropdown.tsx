'use client';
import { Menu } from '@headlessui/react';
import React from 'react';
import Link from 'next/link';

type Props = {
  name: string;
  values: Record<string, string>;
};

function Dropdown({ name, values }: Props) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='capitalize inline-flex p-3 w-full justify-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-100 shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          {name}
        </Menu.Button>
      </div>
      <Menu.Items as='ul' className='absolute right-0 bg-gray-600 z-10 mt-2 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        {Object.keys(values).map((path) => {
          return (
            <Menu.Item key={path}>
              {({ active }) => {
                return (
                  <li className='capitalize  hover:bg-gray-800'>
                    <Link className='block w-full h-full px-5 p-2' href={`/discover/${name}/${path}`}>
                      {path.replaceAll('_', ' ')}
                    </Link>
                  </li>
                );
              }}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown;
