import React, { useContext } from 'react'
import Image from 'next/image'
import  {MyContext}  from './MyContext';
import { motion, AnimatePresence } from 'framer-motion';



function Header() {

  const {handleDark, handleLight, isActive, setIsActive} = useContext(MyContext);

  const HeaderNames = {
    left: "Where in the world?",
    right: "Dark mode"
  }





  return (

    <div className={`relative ${isActive? "Dark-mode" : "" } bg-skin-fill text-skin-base shadow-lg`}>
      <header className=" text-skin-base flex justify-between h-12 p-10 items-center ">
        <div className="lg:text-3xl text-xl font-medium">{HeaderNames.left}</div>

        <div className=" pr-7">
          <div>

            <Image 
              src="/assest/icons8-dark-85.png"
              width={120}
              height={120}
              alt ="Dark mode"
              onClick={handleDark}
              className={` ${isActive ? "hidden" : ""} absolute top-0 right-3 h-20 w-20`}  
            />
          </div>
          <div>

            <Image 
              src="/assest/icons8-smiling-sun-100.png"
              width={120}
              height={120}
              alt ="Light mode"
              onClick={handleLight}
              className={` ${isActive ? "" : "hidden" } absolute top-0 right-2 h-20 w-20`}  
            />
          </div>
        </div>

          
      </header>


    </div>

  )
}

export default Header