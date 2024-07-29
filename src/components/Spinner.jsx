import React from 'react'

function Spinner() {
  return (
    <div className="flex justify-center w-full items-center bg-gray-900 h-screen">
        <div className="text-white text-xl">
            <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin">
            </div>
                Loading...
        </div>
    </div>
  )
}

export default Spinner;