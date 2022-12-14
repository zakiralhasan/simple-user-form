import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const NavBar = () => {
    //used context API destucturing method
    const {user, logOut} = useContext(AuthContext);

    //function for logout user through firebase
    const signOutUser = () => {
        logOut() //used context API
        .then(() => {
            toast.success('Logout successfully.');
        }).catch(error => console.error('error', error));
    }
    return (
        <div className='bg-blue-100 '>
            <div className='flex items-center '>
                <div className='w-1/2 mx-auto'>
                    <h1 className='text-3xl font-semibold px-4'>Login Form</h1>
                </div>
                <nav className=' w-full flex justify-end px-4 py-6 '>
                    <NavLink className='mr-4' to='/'>Home</NavLink>
                    <NavLink className='mr-4' to='/login'>Login</NavLink>
                    <NavLink className='mr-4' to='/registration'>Registration</NavLink>
                    <NavLink className='mr-4' to='/about'>About</NavLink>
                    {user?.email && <p>Welcome: {user?.email}</p>}
                    {user?.email? 
                    <button onClick={signOutUser} className='bg-blue-50 text-red-500 px-1 rounded border border-white ml-2'>Logout</button>: <button className='bg-blue-50 text-red-500 px-1 rounded border border-white ml-2'>Login</button>}
                </nav>
            </div>
        </div>
    );
};

export default NavBar;