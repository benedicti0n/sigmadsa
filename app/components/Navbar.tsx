"use client"
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button';

const Navbar = () => {
    const { data: session } = useSession();
    return (
        <div className='w-full h-16 flex items-center justify-between fixed top-0 border-2 border-black px-4'>
            {/* <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png" alt="logo" className='w-16 h-full' /> */}

            {session ? (<Button onClick={() => signOut()}>Sign out</Button>) : (<Button onClick={() => signIn()}>Sign in</Button>)}
        </div>
    )
}

export default Navbar