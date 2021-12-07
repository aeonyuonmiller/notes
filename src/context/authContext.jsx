import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  // firebase,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  let history = useHistory();
  console.log("user from context", user);

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setLoading(false);
        } else {
          setUser(null)
          setLoading(false);
        };
      });
  }, []);

  async function handleLogout() {
    try {
      const auth = getAuth();
      await signOut(auth);
      setUser(null);
      history.push("/");
    } catch (err) {
      console.log(`err`, err)
    } 
  }
    
  async function handleSignup(email, password) {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setUser(user);
      history.push("/map");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
    setLoading(false);
  }
  
  async function handleLogin(email, password) {
    setLoading(true);
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      history.push("/map");
    } catch (error) {
      console.log(error);
      alert("Logged out");
    }
    setLoading(false);
  }
  
  return (
    <AuthContext.Provider value={{ user, setUser, handleSignup, loading, handleLogout, handleLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  return currentUser;
}