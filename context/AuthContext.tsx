import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        console.log(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (email: string, password: string, name: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() =>
      updateUserName(name)
    );
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const updateUserName = (name: string) => {
    setUser((prevState: typeof user) => ({
      ...prevState,
      displayName: name,
    }));

    return updateProfile(auth.currentUser!, {
      displayName: name,
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, updateUserName }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
