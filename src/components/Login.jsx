import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(false)
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_small.jpg" alt="body-img" />

            </div>
            <form className='absolute bg-black/80 p-12 w-3/12 mx-auto my-36 left-0 right-0 rounded-md text-white '>
                <h1 className='font-bold text-4xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Name' className='my-2 p-4 w-full rounded-md bg-black/50' />}
                <input type='email' placeholder='Email or phone number' className='my-2 p-4 w-full rounded-md bg-black/50' />
                <input type='password' placeholder='Password' className='my-2 p-4  w-full rounded-md bg-black/50' />
                <button className='bg-red-600 p-2 my-2 w-full rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <div className='flex justify-between my-2 text-sm text-gray-400'>
                    <div className='flex items-center'>
                        <input type='checkbox' className='mr-2' />
                        Remember me
                    </div>
                    <div>Need help?</div>
                </div>
                <div className='text-sm text-gray-400 my-2' >
                    {/* New to Netflix? <span className='text-white cursor-pointer' >Sign up now</span> */}
                    {isSignInForm ? "New to Netflix? " : "Already have an account? "} <span className='text-white cursor-pointer' onClick={toggleSignInForm} >{isSignInForm ? "Sign up now" : "Sign in"}</span>
                </div>


            </form >
        </div >
    )
}

export default Login