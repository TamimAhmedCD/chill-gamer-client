import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Create new User
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login user using Google
  const handleGoogleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

    // Update user profile
    const updateUserProfile = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
    };

  //   Log-out user
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };


  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    handleGoogleLogin,
    updateUserProfile
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  return (
    <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
