"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = () => {
    const session = useSession()
    return (
        <div className='w-full h-16 flex items-center justify-between fixed top-0 border-2 border-black px-4'>
            {/* <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png" alt="logo" className='w-16 h-full' /> */}

            {session.status === "authenticated" && <button className='h-16 bg-slate-600' onClick={() => signOut()}>Log Out</button>}
            {session.status === "unauthenticated" && <button className='h-16 bg-slate-600' onClick={() => signIn()}>Sing In</button>}

        </div>
    )
}

export default Navbar