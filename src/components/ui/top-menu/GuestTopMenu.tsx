'use client';

import { LoginTopMenuButton } from "./LoginTopMenuButton";

export const GuestTopMenu = () => {

  return (

    <nav className="bg-white border-b-2 border-b-gray-200">

      <div className="flex justify-between items-center px-4">

        {/* Left Side */}
        <div className="flex items-center">
          <a href="/">
            <h1 className="text-xl font-bold">MATEC</h1>
          </a>

        </div>

        {/* Center - Icons */}
        <div className="flex justify-center items-center space-x-4">



        </div>

        {/* Right Side - User Name & Avatar */}
        <div className="flex items-center space-x-2 mr-4">
          {/* User Name */}
          <LoginTopMenuButton />
        </div>
      </div>
    </nav>

  )
}
