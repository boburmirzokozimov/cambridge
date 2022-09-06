import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApiSlice'

const LoginPage = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { data }] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPwd('')
            navigate('/dashboard')

        } catch (err) {
            if (!err?.originalStatus) {
                setErrMsg('No Server Response')
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password')
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login Failed')
            }
            // errRef.current.focus()
            console.log(err);

        }
    }

    const handleUserInput = e => setUser(e.target.value)

    const handlePwdInput = e => setPwd(e.target.value)

    return (
        <div className='flex justify-center items-center flex-col align-middle'>
            <h1 className='text-3xl mb-10'>Login page </h1>
            <form className='flex flex-col' onSubmit={handleSubmit} method='POST'>
                <div className='mb-5'>
                    <input type="tel" placeholder='901234567' value={user} required autoComplete='off' ref={userRef} onChange={handleUserInput} className='p-4 rounded-xl outline-slate-500' />
                </div>
                <div className='mb-5'>
                    <input type="password" value={pwd} required placeholder='Enter password' onChange={handlePwdInput} className='p-4 rounded-xl outline-slate-500' />
                </div>
                <div className='flex justify-center bg-color rounded-xl text-white'>
                    <button className='px-5 py-3 '>Go forward</button>
                </div>
            </form>
        </div>

    )
}

export default LoginPage
