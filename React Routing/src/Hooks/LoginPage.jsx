import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/profile");
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;