import React from 'react'
import Logo from '../Logo';
import YoutubeIcon from '@/assets/youtubeIcon';
import TwitterIcon from '@/assets/twitterIcon';
import FacebookIcon from '@/assets/facebookIcon';

const Footer = () => {

  const internalLinks = ["Documentaries", "Themes", "Chrome casts"];
  const enterpise = ["Download Chrome Browser", "Chrome Browser for Enterprise", "Chrome Browser Devices", "ChromeOS", "Google Cloud", "Google Workspace"];
  const footerNavigation = ["Privacy Policy", "Terms and conditions", "Cookies Policy", "About us", "EULA", "Contact"];

  const renderLinks = (links) => {
    return links?.map((link, index) => {
      return (
        <li key={index}>
          <a href="#" className="text-gray-700 transition hover:opacity-75">{link}</a>
        </li>
      )
    })
  }

  const renderFooterNavigation = () => {
    return footerNavigation?.map((link, index) => {
      return (
        <li key={index}>
          <a href="#" className="text-black transition text-[14px] hover:opacity-75">{link}</a>
        </li>
      )
    })
  }

  return (
    <footer className="p-4 mx-auto bg-gray-200/50 sm:p-6 lg:p-8">
      {/* Social Icons */}
      <div className='flex items-center gap-5 px-4 pb-6 border-b border-gray-300 sm:px-6 lg:px-8'>
        <span className='font-semibold'>Follow Us</span>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <YoutubeIcon />
            </a>
          </li>
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="flex flex-wrap justify-between mt-8 gap-x-2 gap-y-10 lg:mt-0">
            <div className="min-w-64">
              <p className="font-medium text-gray-900">Internal Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {renderLinks(internalLinks)}
              </ul>
            </div>

            <div className="min-w-64">
              <p className="font-medium text-gray-900">Enterprise</p>
              <ul className="mt-6 space-y-4 text-sm">
                {renderLinks(enterpise)}
              </ul>
            </div>

            <div className="min-w-64">
              <p className="font-medium text-gray-900">Internal Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {renderLinks(internalLinks)}
              </ul>
            </div>

            <div className="min-w-64">
              <p className="font-medium text-gray-900">Enterprise</p>
              <ul className="mt-6 space-y-4 text-sm">
                {renderLinks(enterpise)}
              </ul>
            </div>

            <div className="min-w-64">
              <p className="font-medium text-gray-900">Internal Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {renderLinks(internalLinks)}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="px-4 pt-6 pb-4 border-t border-gray-300 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:items-center lg:flex-row lg:justify-between gap-y-8">
          <Logo />

          <ul className="flex flex-wrap justify-start gap-10 mt-8 text-xs sm:mt-0 lg:justify-end">
            {renderFooterNavigation()}
          </ul>
        </div>
      </div>
    </footer >
  )
}

export default Footer