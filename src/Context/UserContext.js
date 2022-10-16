import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.init';


export const AuthContext = createContext();

const contextAuth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({})//state for user info.
    const [loading, setLoading] = useState(true)//state for privet route loading

    //creat new user at firebase
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(contextAuth, email, password)
    };

    //verify new user through email for firebase
    const userVerification = () => {
      return sendEmailVerification(contextAuth.currentUser)
    };

    //sign in user
    const userSignIn = (email, password) =>{
        return signInWithEmailAndPassword(contextAuth, email, password)
    };

    //monitor login user on any page
    useEffect(() => {
        const exit = onAuthStateChanged(contextAuth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => exit();
    },[])

    //logout user
    const logOut = () => {
       return signOut(contextAuth)
    }

    //reset user password through email
    const resetPassword = (email) => {
        return sendPasswordResetEmail(contextAuth, email)
    };

    const authInfo = {user, loading, setLoading, creatUser, userVerification, userSignIn, logOut, resetPassword};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;