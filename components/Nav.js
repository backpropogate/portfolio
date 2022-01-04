import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
    return (
        <nav  >
            <div className='flex justify-around  my-4 '>
                <div>
            <Link href="#" className=''>
            <a ><Image src='/logo.svg' width='32px' height='32px'/></a>
            </Link>
            </div>
            <ul className='flex justify-between gap-5' >
                <Link href="#">
                <li >Home</li>
                </Link>
                <Link href="#">
                <li>About</li>
                </Link>
                <Link href="#">
                <li>Portfolio</li>
                </Link >
                <Link href="#">
                <li>Contact</li>
                </Link>
            </ul>
            </div>
            
        </nav>
    )
}

export default Nav
