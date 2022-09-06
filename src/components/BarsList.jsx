import React from 'react'
import { useSelector } from "react-redux";

const BarsList = ({ children }) => {
    const open = useSelector(state => state.open.isOpen)

    return (
        <ul className={`flex flex-col gap-3 p-5 ${open ? '' : 'gap-3 p-5 justify-center items-center'}`}>
            {children}
        </ul>
    )
}

export default BarsList
