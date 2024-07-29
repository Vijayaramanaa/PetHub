import React from 'react'
import { Link } from 'react-router-dom'

function PNF() {
  return (
    <div className='w-full h-full flex flex-col align-middle justify-center bg-black text-center gap-4 text-white font-extrabold text-4xl p-10'>
        <h1>
            404 Page Not Found
        </h1>
        <Link to={"/"} className='text-green-400 rounded-lg hover:bg-slate-100 '>Go To Home</Link>
    </div>
  )
}

export default PNF