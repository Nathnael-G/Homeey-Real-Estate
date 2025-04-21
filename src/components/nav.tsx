import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Nav() {
  return (
    <section className='flex h-full py-10 justify-around items-center'>
      <Image src={"/Homeey-logo1.png"} alt='logo' width={100} height={100}/> {/* change the picture during dark mode*/}
      <nav className='text-xl font-sans font-mono font-normal'>
        <ul className='flex justify-around items-center gap-12'>
          <li className='hover:underline'><a href="#home">Home</a>
          <div className='flex gap-1.5'>
            <div className="bg-white w-5 h-0.5"></div>
            <div className="bg-white w-3 h-0.5"></div>
            <div className="bg-white w-1.5 h-0.5"></div>
          </div>
          </li>
          <li className='hover:underline text-[#ABB6C5]'><a href="#ppty">Property</a></li>
          <li className='hover:underline text-[#ABB6C5]'><a href="about">About</a></li>
          <li className='hover:underline text-[#ABB6C5]'><a href="review">Review</a></li>
          <li className='hover:underline text-[#ABB6C5]'><a href="blog">Blog</a></li>
          <li className='hover:underline text-[#ABB6C5]'><a href="contact">Contact</a></li>
        </ul>
      </nav>
      <div className='flex justify-center items-center gap-6'>
        <Link href={"signin"} className='text-xl font-sans font-mono font-normal text-[#ABB6C5]'>Sign in</Link>
        <Button className="text-xl w-28 h-10 font-sans font-mono font-normal bg-[#1252AE26] shadow-[0px_2px_3px_0px_#1252AE66] hover:text-white hover:bg-[#1252AE40] rounded-lg text-[#1252AE]">
        <Link href="/signup">Sign Up</Link></Button>

        </div>
    </section>
  )
}

export default Nav