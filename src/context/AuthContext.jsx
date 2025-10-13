import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext({
  currentUser: null,
  loading: true,
  signup: () => {},
  logout: () => {},
  login: () => {},
  gmailLogin: () => {},
  githubLogin: () => {},
  facebookLogin: () => {},
  getUserInfo: () => {},
  updateUserInfo: () => {},
  resetPassword: () => {},
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


  //===============================createUserWithEmailAndPassword============
  const signup = (email, password, navigate) => {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      sendEmailVerification(auth.currentUser).then(() => {
        alert("Email verification sent! check your email");
        console.log("Email verification sent! check your email");

        if (navigate) {
          return navigate("/auth/login");
        }
      });
    });
  };


  //========================signInWithEmailAndPassword==============
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };


  //====================Logout==========
  const logout = () => {
    signOut(auth);
  };

  //.................{Gmail Login}................
  const gmailLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);

        // ...
      });
  };

  //..............GITHUB LOGIN...//////////////////

  const githubLogin = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user.providerData[0].providerId);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  //..............Facebook Login.......................

  const facebookLogin = () => {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  //===================getUserInfo====================
  const getUserInfo = () => {
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const email = user.email;
      const displayName = (user.displayName = email.slice(0, 1));
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;

      console.log(displayName);
      console.log(email);
    }
  };

  //===========updateProfile========================
  const updateUserInfo = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("Profile updated!");
      })
      .catch((error) => {
        console.log(error.message);
        
      });
  };

  //===============sendPasswordResetEmail============
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const value = {
    currentUser,
    loading,
    signup,
    logout,
    login,
    gmailLogin,
    githubLogin,
    facebookLogin,
    getUserInfo,
    updateUserInfo,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
