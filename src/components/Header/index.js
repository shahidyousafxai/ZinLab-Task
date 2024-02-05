import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import Logo from '../Logo';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header = () => {
  const navigation = [
    "Stock Video",
    "Video Templates",
    "Music",
    "Sound Effects",
    "Graphic Templates",
    "Graphics",
    "Photos",
  ]
  return (
    <Disclosure as="nav" className="bg-white shadow lg:shadow-none">
      {({ open }) => (
        <>
          <div className="relative flex justify-between px-8 h-[72px] sm:px-6 lg:px-10">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <Logo />

              {/* Search bar */}
              <div className='items-center hidden lg:flex'>
                <div className="relative rounded-full shadow-sm w-[35vw]">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full py-[13px] pl-6 pr-20 bg-gray-200/50 border-gray-300 rounded-full placeholder:text-[16px] sm:text-sm focus:outline-none leading-4"
                    placeholder="Search for Movies, TV Shows, Themes & Cast"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-5 py-2 my-2 border-l border-gray-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 items-center hidden gap-3 pr-2 lg:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex p-3 text-sm transition-all duration-300 bg-gray-200 rounded-full hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 py-1 mt-2 origin-top-right bg-white rounded-lg shadow-lg w-[350px] -right-32 ring-1 ring-gray-200 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(active ? 'bg-gray-100 underline' : '', 'cursor-pointer block px-4 py-2 text-[18px] text-gray-700')}
                        >
                          About Us
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(active ? 'bg-gray-100 underline' : '', 'cursor-pointer block px-4 py-2 text-[18px] text-gray-700')}
                        >
                          Contact Us
                        </span>
                      )}
                    </Menu.Item>
                    <div className='my-3 border-b border-gray-300' />
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(active ? 'bg-gray-100 underline' : '', 'cursor-pointer block px-4 py-2 text-[18px] text-gray-700')}
                        >
                          Cookies Policy
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(active ? 'bg-gray-100 underline' : '', 'cursor-pointer block px-4 py-2 text-[18px] text-gray-700')}
                        >
                          Privacy Policy
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(active ? 'bg-gray-100 underline' : '', 'cursor-pointer block px-4 py-2 text-[18px] text-gray-700')}
                        >
                          Terms and Conditions
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(active ? 'bg-gray-100 underline' : '', 'cursor-pointer block px-4 py-2 text-[18px] text-gray-700')}
                        >
                          EULA
                        </span>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <div className="flex p-3 text-sm transition-all duration-300 bg-gray-200 rounded-full hover:bg-gray-300">
                <svg svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 20 20" >
                  <path fill="currentColor" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32M7 6l8 4l-8 4z">
                  </path>
                </svg >
              </div>
              <button
                type="button"
                className="flex items-center gap-3 px-10 py-2.5 text-xl font-medium text-white border border-transparent rounded-full shadow-sm bg-emerald-500 hover:bg-emerald-600 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                Wishlist
              </button>
            </div>
            <div className='lg:hidden flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden absolute z-50 bg-white w-full shadow">
            <div className="pt-2 pb-4 space-y-1">
              {navigation?.map((item, index) => {
                return (
                  <Disclosure.Button
                    as="a"
                    href="#"
                    key={index}
                    className="block py-2 pl-3 pr-4 text-base font-medium"
                  >
                    {item}
                  </Disclosure.Button>
                )
              })}

            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header