import MenubarButton from '@/components/MenubarButton';
import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export default function Menubar({ text, items }) {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button as={MenubarButton}>{text}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-in-out duration-150"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0">
        <Menu.Items className="absolute left-0 w-48 origin-top-right bg-white border rounded shadow focus:outline-none">
          <div className="py-2 space-y-1">
            {items.map(({ text, handler }, i) => (
              <Menu.Item key={i}>
                <button
                  onClick={handler}
                  className="w-full px-4 py-1 text-left transition duration-150 hover:bg-neutral-100 focus:bg-neutral-200">
                  {text}
                </button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
