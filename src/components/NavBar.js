import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div>
        <div>
            <h1>Logo</h1>
           <Link href="/">Home</Link>
           <Link href="about">About</Link>
           <Link href="contact">Contact</Link>
           <Link href="services">Services</Link>
           <Link href="blog">Blog</Link>
            
        </div>
        <div></div>
    </div>
  )
}

export default NavBar