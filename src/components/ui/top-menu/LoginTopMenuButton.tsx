'use client';

import Link from "next/link";


export const LoginTopMenuButton = () => {

    return (


        <div className="relative" >
            
                <Link
                    href="/auth/login"
                    className="my-2 mx-4 container inline-flex items-center justify-center h-8 text-sm font-semibold leading-none rounded-full border bg-white text-gray-600 hover:bg-gray-100"
                >
                    iniciar sesion
                </Link>
            
        </div>
    )
}
