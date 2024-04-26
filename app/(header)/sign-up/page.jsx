"use client"

import { Button, Label, TextInput } from "flowbite-react"
import Link from "next/link"

function page() {
  const handleChange =(e)=>{
    console.log(e.target.value);
  }
  return (
    <div className='min-h-screen mt-20 '>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6'>
        {/* Left */}
        <div className='flex-1'>
        <Link href='/' className='font-bold text-4xl dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 
          via-purple-500 to-pink-500 rounded-lg text-white'>Next</span>
          Blog's
        </Link>
        <p className='text-sm mt-5'>
          This is a demo project.You can sign up with your email and password
        </p>
        </div>
        {/*Right */}
        <div className='flex-1'>
          <form className="flex flex-col gap-4">
            <div>
            <Label value='Your Username'/>
            <TextInput type='text' placeholder="Username" id="username" onChange={handleChange} autoComplete="off"/>
            </div>
            <div>
            <Label value='Your Email'/>
            <TextInput type='email' placeholder="users@gmail.com" id="email" onChange={handleChange} autoComplete="off"/>
            </div>
            <div>
            <Label value='Your Password'/>
            <TextInput type='password' placeholder="Password" id="password" onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">
              Sign Up 
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link href='/sign-in' className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
