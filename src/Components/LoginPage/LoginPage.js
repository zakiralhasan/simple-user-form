import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';



const LoginPage = () => {
    //used context API destucturing method
    const {userSignIn} = useContext(AuthContext)

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const getUserEmail = (e) => setUserEmail(e.target.value);
    const getUserPassword = (e) => setUserPassword(e.target.value);

    const loginToUser = () => {
        userSignIn(userEmail, userPassword) //used context API
        .then(result => {
            const user = result.user;
            console.log(user)
            toast.success('Login successfully')
        }).catch(error => console.error('error', error))
    }
    
    return (
        <div className='bg-gray-300 h-screen pt-16'>

            <div className='bg-white w-1/2 mx-auto py-8 rounded shadow-md'>
                <div className='my-6 text-center'>
                    <h1 className='text-3xl font-semibold my-1'>Login to your account</h1>
                    <p>Don't have an account? <Link to='/registration' className='text-blue-500'>Regirstration free!</Link></p>
                </div>
                <div className='flex flex-col gap-4'>
                    <input onBlur={getUserEmail} className='mx-4 outline-none px-3 py-1 rounded' type="email" name="" placeholder='Enter your email' required/>
                    <hr className='mx-8'/>
                    <input onBlur={getUserPassword} className='mx-4 outline-none px-3 py-1 rounded' type="password" name="" placeholder='Enter your password' required />
                    <hr className='mx-8'/>
                </div>
                <div className='flex px-8 my-4 justify-between'>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span className='ml-2'>Remember me</span>
                    </div>
                    <Link to='/recover' className='text-blue-500' >Forgot password?</Link>
                </div>
                <div className='px-8 py-4'>
                    <button onClick={loginToUser} className='bg-blue-400 w-full px-8 py-2 rounded font-semibold text-white'>Login with email</button>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;