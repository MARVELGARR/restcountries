import React, { useContext } from 'react'
import Image from 'next/image'
import  {MyContext}  from './MyContext';


function Header() {

  const {handleThemes, isActive, setIsActive} = useContext(MyContext);


  const HeaderNames = {
    left: "where in the world?",
    right: "Dark mode"
  }

 
    

  return (

    <div className={` ${isActive? "Dark-mode" : "" } bg-skin-fill text-skin-base shadow-lg`}>
        <header className=" text-skin-base flex justify-between h-12 ml-5 mr-5 items-center">
          <div className=" text-lg">{HeaderNames.left}</div>
          <div onClick={handleThemes} className=" cursor-pointer text-lg">{HeaderNames.right}</div>
        </header>

    </div>

  )
}

export default Header