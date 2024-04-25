"use client"

import {Button, Navbar, TextInput} from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {AiOutlineSearch} from 'react-icons/ai';
import  { FaMoon } from 'react-icons/fa';

function Header() {
  const path =useRouter().pathname;
  return (
    <Navbar className='border-b-2 '>
        <Link href='/' className='self-center whitespace-nowrap text-sm
        sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 
          via-purple-500 to-pink-500 rounded-lg text-white'>Next</span>
          Blog's
        </Link>
        <form>
          <TextInput
              type='text'
              placeholder='Search...'
              rightIcon={AiOutlineSearch}
              className='hidden cursor-pointer lg:inline'/>
        </form>
        <Button className='w-12 h-10 lg:hidden cursor-pointer' color='gray' pill>
          <AiOutlineSearch/>
        </Button>
          <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden cursor-pointer sm:inline ' color='gray' pill>
            <FaMoon />
          </Button>
          <Link href='/sign-up'>
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign Up
          </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path==="/"} as={'div'}>
              <Link href='/'>
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/about"} as={'div'}>
              <Link href='/about'>
                About
              </Link>
            </Navbar.Link >
            <Navbar.Link active={path==="/projects"} as={'div'}>
              <Link href='/projects'>
                Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
