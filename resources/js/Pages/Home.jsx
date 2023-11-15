import { Link } from '@inertiajs/react'
import React from 'react'

function Home() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-3'>
        <h1>IURAN APP</h1>
        <Link href={route('login')} className='btn btn-accent'>Login</Link>
    </div>
  )
}

export default Home