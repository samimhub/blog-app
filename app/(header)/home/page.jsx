import { Navbar } from 'flowbite-react'
import {Link} from 'next/link'
function page() {
  return (
    <Navbar className='border-b-2'>
       <Link href="/" className=''>
        <span>
            Next
        </span>
        Blog
       </Link>
    </Navbar>
  )
}

export default page