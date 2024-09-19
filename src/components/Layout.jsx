import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Cart from './Cart'

export default function Layout() {
  return (
    <>
     <SideBar/>
       <Cart/>
     <Header/>
     <Outlet/>
      <Footer/>
    </>
  )
}
