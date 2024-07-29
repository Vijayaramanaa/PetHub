import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black text-white flex w-full h-auto p-8 flex-col text-center font-bold'>
        <h1><span>Created By</span>: Vijayaramanaa L G</h1>
        <Link to="mailto:vijayaramanaa207320@gmail.com">Contact by : vijayaramanaa207320@gmail.com</Link>
    </div>
  )
}

export default Footer