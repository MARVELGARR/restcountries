import React from 'react'
import Image from 'next/image'

function Header() {

    const HeaderNames = {
      left: "where in the worl?",
      right: "Dark mode"
    }
    

  return (
    <div className="bg-white shadow-lg">
        <header className=" text-black flex justify-between h-12 ml-5 mr-5 items-center">
          <div className="">{HeaderNames.left}</div>
          <div className="">{HeaderNames.right}</div>
        </header>

    </div>
  )
}

export default Header