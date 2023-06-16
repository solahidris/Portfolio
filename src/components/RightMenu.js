import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ChevronDownIcon,
    PhoneIcon,
    InboxIcon,
  } from "@heroicons/react/20/solid";
  import {
    HomeIcon,
    IdentificationIcon,
    ChatBubbleLeftRightIcon,
    CommandLineIcon,
  } from "@heroicons/react/24/outline";

import React from 'react';

const RightMenu = ( { scrollToSection } ) => {

    const menuRouteHandler = (ref) => {
      if (scrollToSection) {
        scrollToSection(ref);
      }
    }; 
    
    const phoneMenuHandler = (href) => {
      if (href === '#') {
        window.open("tel:+60127710626");
      }
    }; 
  
    const solutions = [
        {
          name: "Home",
          description: "Let's Start Here",
          ref: "homeDiv",
          icon: HomeIcon,
        },
        {
          name: "About Me",
          description: "A Brief Story to Understand Me as a Person",
          ref: "aboutDiv",
          icon: IdentificationIcon,
        },
        {
          name: "Projects",
          description: "My Programming Journey",
          ref: "projectsDiv",
          icon: CommandLineIcon,
        },
        {
          name: "Contact",
          description: "Let's Get Connected",
          ref: "contactDiv",
          icon: ChatBubbleLeftRightIcon,
        }
      ];
      const callsToAction = [
        { name: "Email", href: `mailto:${'solah.eth@gmail.com'}?subject=${encodeURIComponent('Work Opportunity')}&body=${encodeURIComponent('Hello Sol, I saw your website and wanted to reach out.')}` , icon: InboxIcon },
        { name: "Phone", href: '#', icon: PhoneIcon },
      ];

  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-xs font-mono leading-6 text-white">
        <span>solah.dev</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
            {/* <div className="p-4" onClick={menuRouteHandler}> */}
              {solutions.map((item) => (
                <div onClick={() => menuRouteHandler(item.ref)} key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                  onClick={() => phoneMenuHandler(item.href)}
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
};

export default RightMenu;
