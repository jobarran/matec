'use client';

import { Avatar } from "./Avatar";
import { logout } from "@/actions";
import { User } from "@/interfaces";


interface Props {
  user: User,
}

export const UserTopMenu = ({ user }: Props) => {

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
        <div className="flex items-center space-x-2">
          {/* User Name */}
          <span className="hidden lg:inline text-sm">{user.name} {user.lastName}</span>
          {/* User Avatar */}
          <Avatar
            initials={user.name[0]! + user.lastName[0]! || ''}
            id={user.id || ''}
            image={user.image || undefined}
            logout={logout}
          />
        </div>
      </div>
    </nav>

  )
}
