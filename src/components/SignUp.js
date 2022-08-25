import React, { useState, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from './notify';

import { validate } from './validate';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    });
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validate(data))
        console.log(errors)
    },[data, touched])

    const changeHandler = (event) => {
        if(event.target.name === "isAccepted") {
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            console.log(data)
            notify("you sign in succeussfully", "success")
        } else {
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })
            notify("invaild data")
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <form onSubmit={submitHandler} className='h-10/12 p-4 border-4 bg-slate-900 border-slate-100 rounded-xl flex flex-col items-center md:w-2/4 lg:w-1/4 sm:w-11/12'>

                <h2 className='text-blue-500 text-4xl font-bold mb-6'>Sign Up</h2>

                <div className='flex flex-col h-24 text-lg w-2/3'>
                    <label>Name:</label>
                    <input
                    className='bg-slate-700 focus:bg-slate-600 w-full m-auto border rounded-md p-1'
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={changeHandler}
                    onFocus={focusHandler}
                    />
                    <div className='h-20 text-red-600'>
                        {errors.name && touched.name && <span>{errors.name}</span>}
                    </div>
                </div>
                <div className='flex flex-col h-28 text-lg w-2/3'>
                    <label>Email:</label>
                    <input
                    className='bg-slate-700 focus:bg-slate-600 w-full m-auto border rounded-md p-1'
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={changeHandler}
                    onFocus={focusHandler} 
                    />
                    <div className='h-20 text-red-600'>
                        {errors.email && touched.email && <span>{errors.email}</span>}
                    </div>
                </div>
                <div className='flex flex-col h-28 text-lg w-2/3'>
                    <label>Password:</label>
                    <input
                    className='bg-slate-700 focus:bg-slate-600 w-full m-auto border rounded-md p-1'
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={changeHandler}
                    onFocus={focusHandler} 
                    />
                    <div className='h-20 text-red-600'>
                        {errors.password && touched.password && <span>{errors.password}</span>}
                    </div>
                </div>
                <div className='flex flex-col h-28 text-lg w-2/3'>
                    <label>Confirm Password:</label>
                    <input
                    className='bg-slate-700 focus:bg-slate-600 w-full m-auto border rounded-md p-1'
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={changeHandler}
                    onFocus={focusHandler} 
                    />
                    <div className='h-20 text-red-600'>
                        {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                </div>
                <div className='flex h-12 items-center justify-center text-lg w-2/3'>
                    <label>i Accepted terms of privacy policy</label>
                    <input
                    className='m-1 mt-2 rounded-full w-4 h-4'
                    type="checkbox"
                    name="isAccepted"
                    value={data.isAccepted}
                    onChange={changeHandler}
                    onFocus={focusHandler} 
                    />
                    
                </div>
                <div className='h-20 text-red-600'>
                        {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                    </div>
                    <div className='flex justify-between p-1 item-center w-8/12 -mt-8'>
                        <a href='#' className='border-2 border-slate-600 p-2 rounded-xl hover:bg-slate-600 hover:border-2 hover:border-slate-400 transition-all'>Login</a>
                        <button type="submit" className='bg-slate-600 p-2 rounded-xl hover:bg-slate-400 transition-all'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;