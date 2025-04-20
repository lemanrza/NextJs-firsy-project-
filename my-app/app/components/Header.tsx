import { Contact, Mails, Package } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], 
});
const Header = () => {
  return (
    <header className={`${inter.className} lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md `}>
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="text-xl">
          <img className="w-60 h-10" src="https://dash.expargo.com/assets/img/logo_dark.png" alt="" />
        </Link>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            <li>
              <Link className="flex items-center md:p-4 py-3 px-0" href="/news">
                <Mails className="mr-2" />
                News
              </Link>
            </li>
            <li>
              <Link className="flex items-center md:p-4 py-3 px-0" href="/tariffs">
                <Package className="mr-2" />
                Tariffs
              </Link>
            </li>
            <li>
              <Link className="flex items-center md:p-4 py-3 px-0" href="/contact">
                <Contact className="mr-2" />
                Contact
              </Link>
            </li>
          </ul>

        </nav>
      </div>
    </header >)
}

export default Header