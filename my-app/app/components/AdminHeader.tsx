import { Bell, Menu } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <header className="flex items-center justify-between px-10 py-5 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center space-x-4">
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <span className="text-2xl font-bold text-blue-800">Expargo</span>
          </div>
    
          <div className="hidden md:block w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full placeholder-gray-500 text-black px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
    
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
    
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn0.iconfinder.com/data/icons/man-user-human-profile-avatar-business-person/100/09B-1User-512.png"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-700">Rajesh Maheshwari</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </header>
      );
}

export default Sidebar