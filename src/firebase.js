// Import the functions you need from the SDKs you need
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2HFsqV5K4SMlq2eTuWodc3Yga2aYDh7w",
  authDomain: "notes-5d617.firebaseapp.com",
  projectId: "notes-5d617",
  storageBucket: "notes-5d617.appspot.com",
  messagingSenderId: "1088435693088",
  appId: "1:1088435693088:web:0bfef4b286d75da139be45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export function logout() {
  return signOut(auth);
}
export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
