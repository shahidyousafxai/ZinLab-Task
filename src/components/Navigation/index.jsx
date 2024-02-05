import React from 'react';

const Navigation = () => {
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
    <>
      <div class="lg:flex flex-1 items-center justify-end md:justify-between shadow px-10 hidden">
        <nav aria-label="Global">
          <ul class="flex w-full items-center text-sm py-3">
            {navigation?.map((item, index) => {
              return (
                <li key={index} className="nav-link px-6">
                  <span class="text-black cursor-pointer font-semibold transition hover:text-gray-500/75 whitespace-nowrap" href="/">{item}</span>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navigation