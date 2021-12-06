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
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  let history = useHistory();
  console.log("user from context", user);

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setLoading(false);
        } else setUser(null);
      });
    }, []);


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

  return (
    <AuthContext.Provider value={{ user, setUser, handleSignup, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export function logout() {
  const auth = getAuth();
  return signOut(auth);
}

export function login(email, password) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  return currentUser;
}