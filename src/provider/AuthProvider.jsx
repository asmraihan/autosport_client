import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const userProfileUpdate = (displayName,photoURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {displayName, photoURL})
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
              console.log('auth-state observer', loggedUser)
              setUser(loggedUser)
              setLoading(false)
          })
          return()=> {
              unsubscribe()
          }
      }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        userProfileUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;