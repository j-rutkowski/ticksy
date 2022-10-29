import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { translateError } from "../lib/error";
import { createSampleLists } from "../lib/firestore";

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
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = (
    email: string,
    password: string,
    name: string,
    setError: Dispatch<SetStateAction<string>>
  ) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => updateUserName(name))
      .then(() => createSampleLists())
      .catch((error) => {
        setError(error.message);
      });
  };

  const login = (
    email: string,
    password: string,
    setError: Dispatch<SetStateAction<string>>
  ) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      const errorMessage = translateError(error.code);
      setError(errorMessage);
    });
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
