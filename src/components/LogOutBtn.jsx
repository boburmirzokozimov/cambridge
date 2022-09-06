import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const LogOutBtn = () => {
    const open = useSelector(state => state.open.isOpen)

    return (
        <div className={`${!open && 'hidden'} border-t max-w-full flex items-center justify-center cursor-pointer`}>
            <Link to='/' className="p-5">Log Out</Link>
        </div>
    )
}

export default LogOutBtn
