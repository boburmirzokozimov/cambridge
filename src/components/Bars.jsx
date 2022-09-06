import React from 'react'
import { NavLink } from 'react-router-dom'
import { DATA } from '../data/DATA'
import { useSelector } from "react-redux";


const Bars = () => {
    const open = useSelector(state => state.open.isOpen)
    return <>
        {DATA.map((item) => (
            <li key={item.id} className=" transition-all">
                <NavLink
                    to={`/${item.path}`}
                    className={`w-full flex items-center pr-5 mb-2 pl-2 py-2 rounded-xl opacity-75 hover:opacity-100 ${!open && 'justify-center pr-0'}`}>
                    <img className="pr-3" src={`${item.icon}`} alt="dashboard" />
                    <p className={`delay-400 ${open ? '' : 'hidden'}`}>{item.name}</p>
                </NavLink>
            </li>
        ))
        }
    </>

}

export default Bars
