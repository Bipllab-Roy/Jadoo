import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext({
  currentUser: null,
  loading: true,
  signup: () => {},
  logout: () => {},
  login: () => {},
});

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signup = (email, password,navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
   .then(()=>{
     sendEmailVerification(auth.currentUser)
   .then(() => {
    alert("Email verification sent! check your email")
    console.log("Email verification sent! check your email")

    if (navigate) {
      return navigate("/auth/login")
    }
   
  });
   })
  };


  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      
      })
      .catch((error) => {
        
        const errorMessage = error.message;
      });
  };

  const logout = () => {
    signOut(auth);
  };

  const value = {
    currentUser,
    loading,
    signup,
    logout,
    login
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
