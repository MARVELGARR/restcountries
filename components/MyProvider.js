import React, { useState } from 'react'
import {MyContext} from './MyContext'

function MyProvider({children}) {

    const [isActive, setIsActive] = useState(false);

    const handleThemes = () =>{
      setIsActive(true);
      console.log(isActive)
    }


    const values = {
      handleThemes,
      isActive,
      setIsActive
    }


  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  )
}


export default MyProvider