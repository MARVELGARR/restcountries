import React, { useState } from 'react'
import {MyContext} from './MyContext'

function MyProvider({children}) {

    const [isActive, setIsActive] = useState(false);

    const handleDark = () =>{
      setIsActive(true);
    }
    const handleLight = () =>{
      setIsActive(false);
    }


    const values = {
      handleDark,
      isActive,
      setIsActive,
      handleLight
    }


  return (
    <MyContext.Provider value={values}>
      {children}
    </MyContext.Provider>
  )
}


export default MyProvider