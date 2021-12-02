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

export const AuthContext = createContext(); // 1. create context
export const AuthContextProvider = (props) => {
  // 2. create provider
  const [user, setUser] = useState(null); // 3. state and function
  const [loading, setLoading] = useState(true);
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
      alert("Account already exists!");
    }
    setLoading(false);
  }
  // async function handleLogin() {
  //   setLoading(true);
  //   try {
  //     await login(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     alert("Already logged in!");
  //   }
  //   setLoading(false);
  // }
  // async function handleLogout() {
  //   setLoading(true);
  //   try {
  //     await logout();
  //   } catch {
  //     alert("Error!");
  //   }
  //   setLoading(false);
  // }

  // 4. return provider with its value and inject children component
  return (
    <AuthContext.Provider value={{ user, setUser, handleSignup, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// export function logout() {
//   return signOut(auth);
// }

// export function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

// Custom Hook
// export function useAuth() {
//   const [currentUser, setCurrentUser] = useState();

// useEffect(() => {
//   const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
//   return unsub;
// }, []);

//   return currentUser;
// }
