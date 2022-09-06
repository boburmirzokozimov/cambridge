import React from 'react'
import { useSelector } from "react-redux";

const NavBar = ({ children }) => {
    const open = useSelector(state => state.open.isOpen)
    return (
        <header className={`flex bg-color flex-col justify-between text-white transition-all ease-in duration-500  relative h-screen ${open ? '!w-[300px]' : 'w-[150px]'}`}>
            {children}
        </header>
    )
}

export default NavBar
