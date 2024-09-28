import React, { createContext, useEffect, useState } from 'react'
import { app } from '../firebase/firebase.config'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import UseAxiosPublic from '../hooks/UseAxiosPublic';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [users,setUser]=useState(null)
    const googleprovider = new GoogleAuthProvider();
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app);
    const axiosPublic=UseAxiosPublic()
    // create user 

    const CreateUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
      
    }

    const Signin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    const GoogleSignin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleprovider)
    }
 

    const Logout=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=()=>{
            onAuthStateChanged(auth,(currentuser)=>{
                setUser(currentuser)
                console.log(currentuser)
                if(currentuser){
                      const userInfo={email:currentuser.email}  
                      axiosPublic.post('/jwt',userInfo)
                      .then(res=>{
                        console.log("token",res.data.token)
                        if(res.data.token){
                            localStorage.setItem('access-token',res.data.token)
                            setLoading(false)
                        }
                      })
                }
                else{
                    localStorage.removeItem('access-token')
                    setLoading(false)
                }
              
            })
        }

        return ()=>{
            
                return unsubscribe()
            
        }
    },[])
   
        
    

    const authinfo={
        users,
        loading,
        CreateUser,
        Signin,
        GoogleSignin,
     
        Logout


    }

  return (
    <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider