import React from 'react'
import Navbar from '../components/Head/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Provider } from 'react-redux'
import { store } from '../Redux/Store'
const Layout = () => {
  return (
  <Provider store={store}>
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  </Provider>
  )
}

export default Layout
