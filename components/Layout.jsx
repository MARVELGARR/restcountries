import React from 'react'
import Header from './Header'
import {useContext} from "react"
import MyProvider from './MyProvider'


function Layout({children}) {


  return (
    <MyProvider>

      <div className=" bg-gray-100">
        <Header/>
        {children}
      </div>
    </MyProvider>
  )
}

export default Layout