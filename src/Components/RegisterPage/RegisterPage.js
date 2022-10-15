import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from 'firebase/auth'
import {app} from '../../firebase/firebase.init'
import { toast } from 'react-toastify';

const auth = getAuth(app)
const RegisterPage = () => {
    // const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    // const getUserName = (e) => setUserName(e.target.value);
    const getUserEmail = (e) => setUserEmail(e.target.value);
    const getUserPassword = (e) => setUserPassword(e.target.value);

    //function for creat new user
    const creatNewUser = () => {
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(result => {
            const user = result.user;
            console.log(user)
            userEmailVerification();
        }).catch(error => console.error('error', error))
    }

    //function for verify new user's email address
    const userEmailVerification = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            toast.info('A verification email has bee sent to your email address!')
        })
    }
    return (
        <div className='bg-gray-300 h-screen pt-16'>
            
            <div className='bg-white w-1/2 mx-auto py-8 rounded shadow-md'>
                <div className='my-6 text-center'>
                    <h1 className='text-3xl font-semibold my-1'>Registration for free!</h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <input disabled className='mx-4 outline-none px-3 py-1 rounded' type="text" name="" placeholder='Enter your name' required/>
                    <hr className='mx-8'/>
                    <input onBlur={getUserEmail} className='mx-4 outline-none px-3 py-1 rounded' type="email" name="" placeholder='Enter your email' required/>
                    <hr className='mx-8'/>
                    <input onBlur={getUserPassword} className='mx-4 outline-none px-3 py-1 rounded' type="password" name="" placeholder='Enter your password' required />
                    <hr className='mx-8'/>
                </div>
                <div className='flex px-8 my-4 justify-between'>
                    <p>I agree to the <Link className='text-blue-500 underline'>privecy policy</Link> and <Link className='text-blue-500 underline' >terms of service</Link>.</p>
                    
                </div>
                <div className='px-8 py-4'>
                    <button onClick={creatNewUser} className='bg-blue-500 w-full px-8 py-2 rounded text-white font-semibold'>Registration with email</button>
                </div>
                <Link to='/' className='underline'>Already have an account?</Link>
            </div>

        </div>
    );
};

export default RegisterPage;