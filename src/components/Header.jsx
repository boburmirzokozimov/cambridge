import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggle } from '../redux/openSlice';

const Header = () => {
    const open = useSelector(state => state.open.isOpen)
    const dispatch = useDispatch();
    console.log(open);

    return (
        <div className='bg-white !h-[97px] flex w-[100%]'>
            <div className='h-full flex justify-center items-center border-stone-100 border-r-2 border-b-2 '>
                <div
                    className='h-[72px] w-[72px]  flex justify-center items-center  cursor-pointer'>
                    <div onClick={() => dispatch(toggle())} className={`w-10 h-10 flex items-center bg-bg-color rounded-xl p-1 shadow-inner ${open ? 'justify-start' : 'justify-end'}`}>
                        <div className='bg-color w-[16px] h-[32px] rounded-xl'></div>
                    </div>
                </div>
            </div>
            <div className='h-full'></div>
        </div >
    )
}

export default Header
