import { createContext, useContext, useState } from 'react';
import { Navigate} from 'react-router-dom';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "Sumithra" });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;