import React from 'react'
import { useSelector } from "react-redux";

const Logo = () => {
    const open = useSelector(state => state.open.isOpen)

    return (
        <div className={`flex items-center mb-5 p-5 ${!open && 'mb-0 pt-o justify-center'}`} >
            <img src="https://student.cambridgeonline.uz/img/new-logo.6dbd2c79.svg" alt="logo" className="pr-2" />
            <div className={`transition-all ${open ? '' : 'hidden'}`}>
                <img src="https://student.cambridgeonline.uz/img/new-logo-text.4733a14f.svg" alt="logo" />
            </div>
        </div >
    )
}

export default Logo
