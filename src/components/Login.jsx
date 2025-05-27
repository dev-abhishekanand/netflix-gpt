import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg'
                    alt='logo' />
            </div>
            <div className=' relative flex justify-center items-center h-screen '>
                <form action="" className='flex flex-col bg-black/75 p-5 rounded-md w-80 shadow-lg '>
                    <h1 className='text-4xl font-bold mb-5 text-white text-start '>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

                    {isSignInForm ? '' : <input type='text' placeholder='Enter your UserName' className=' p-2 mb-4 rounded-md text-white border border-gray-300' />}
                    <input type='text' placeholder='Enter your email' className=' p-2 mb-4 rounded-md text-white border border-gray-300' />
                    <input type='password' placeholder='Enter your password' className='p-2 mb-4 rounded-md text-white border border-gray-300' />
                    <button className='bg-red-600 py-2 rounded-md text-white font-bold cursor-pointer'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    {isSignInForm ?
                        <h4 className='text-gray-400 text-start mt-4'>New to Netflix? <span className='text-white font-bold cursor-pointer' onClick={() => setIsSignInForm(!isSignInForm)}>Sign Up now</span></h4>
                        : <h4 className='text-gray-400 text-start mt-4'>Already a User! <span className='text-white font-bold cursor-pointer' onClick={() => setIsSignInForm(!isSignInForm)}>Sign In now</span></h4>}
                </form>
            </div>


        </div>
    )
}

export default Login