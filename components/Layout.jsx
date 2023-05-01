import React from 'react'
import Header from './Header'
import {useContext} from "react"
import MyProvider from './MyProvider'


function Layout({children}) {


  return (

    <div className=" bg-gray-100">
    <div className="sticky top-0 z-10">

      <Header/>
    </div>
      {children}
    </div>

  )
}

export default Layout