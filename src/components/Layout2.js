import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout2 = () => {
    return (
        <>
            <Header />  
            <section className='h-full'>
                <Outlet />
            </section>
        </>
    )
}

export default Layout2
