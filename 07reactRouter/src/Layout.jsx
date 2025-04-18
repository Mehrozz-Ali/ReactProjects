import React from 'react'
import Header from './header/header'
import Footer from './Footer/footer'
import {Outlet} from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

