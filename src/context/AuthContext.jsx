import { createUserWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext({
  currentUser: null,
  loading: true,
  signup: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("Roy");
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user)
        setLoading(false)
    });
    return ()=> unsubscribe()
  }, [])

  const signup = ( email, password) => { 
    createUserWithEmailAndPassword(auth, email, password)
  
  };
  const logout = ()=>{
    signOut(auth)
  }

  const value = {
    currentUser,
    loading,
    signup,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
