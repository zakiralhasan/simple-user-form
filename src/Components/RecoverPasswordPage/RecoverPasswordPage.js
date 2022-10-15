import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { app } from '../../firebase/firebase.init';


const auth = getAuth(app);
const RecoverPasswordPage = () => {

    const [userEmail, setUserEmail] = useState('')
    const getUserEmail = (e) => setUserEmail(e.target.value);

    //function for reset password through email
    const resetUserPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
        .then(() => {
            toast.info('A link has been sent to your email address.')

        }).catch(error => {console.error('error', error)})
    }
    return (
        <div className='bg-gray-300 h-screen pt-16'>
            
            <div className='bg-white w-1/2 mx-auto py-8 rounded shadow-md'>
                <div className='my-6 text-start px-8'>
                    <h1 className='text-3xl font-semibold my-1'>Recover your password.</h1>
                    <small className='text-gray-400 text-justify'>Fill in your email below and we will send you an email with further instructions.</small>
                </div>
                <div className='flex flex-col gap-4'>
                    <input onBlur={getUserEmail} className='mx-4 outline-none px-3 py-1 rounded' type="email" name="" placeholder='Enter your email' required/>
                    <hr className='mx-8'/>
                </div>
                <div className='px-8 py-4'>
                    <button onClick={resetUserPassword} className='bg-blue-500 w-full px-8 py-2 rounded text-white font-semibold'>Recover your password</button>
                </div>
                <div className='flex flex-col'>
                    <Link to='/' className='underline'>Already have an account?</Link>
                    <Link to='/registration' className='underline'>Don't have an account?</Link>
                </div>
            </div>
        </div>
    );
};

export default RecoverPasswordPage;