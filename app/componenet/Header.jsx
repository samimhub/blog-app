"use client"

import {Button, Navbar, TextInput} from 'flowbite-react';
import Link from 'next/link';
import {AiOutlineSearch} from 'react-icons/ai';
import  { FaMoon } from 'react-icons/fa';

function Header() {
  return (
    <Navbar className='border-b-2'>
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
        <Navbar.Collapse>
            <Navbar.Link>
              <Link href='/'>
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link>
              <Link href='/about'>
                About
              </Link>
            </Navbar.Link><Navbar.Link>
              <Link href='/projects'>
                Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
          <Button className='w-12 h-10 hidden cursor-pointer sm:inline ' color='gray' pill>
            <FaMoon />
          </Button>
          <div>
          <Link href='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>
            Sign In
          </Button>
          </Link>
          <Navbar.Toggle />
        </div>
    </Navbar>
  )
}

export default Header
