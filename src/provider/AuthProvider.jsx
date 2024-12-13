import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";



export default function AuthProvider({children}) {
    const [users, setUsers] = useState(null)
    const [isLoader, setIsLoader] = useState(true)
    const createUser = (email, password) =>{
        setIsLoader(true)
       return createUserWithEmailAndPassword(auth,email,password)

    }
    const signIn = (email, password) =>{
        setIsLoader(true)
       return signInWithEmailAndPassword(auth,email,password)

    }
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currantUser) =>{
            if (currantUser) {
                setUsers(currantUser)
                setIsLoader(false)
            } else{
                setUsers(null)
                setIsLoader(true)
            }
        })
        return()=>{
            unSubscribe()
        }

    },[])
    const authInfo = {
        users,
        createUser,
        signIn,
        isLoader

    }
  return (
    <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

// export default AuthProvider
