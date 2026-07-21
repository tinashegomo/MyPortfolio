import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthContext = createContext(null);

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function login(email, password) {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    if (credential.user.email !== ADMIN_EMAIL) {
      await signOut(auth);
      throw new Error('Unauthorized: This account does not have admin access.');
    }
    return credential.user;
  }

  async function logout() {
    await signOut(auth);
  }

  const isAdmin = user?.email === ADMIN_EMAIL;

  const value = { user, loading, login, logout, isAdmin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
