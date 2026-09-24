import { useContext } from "react";
import AuthContext from "./AuthContext";

function ProfilePage() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile Page</h1>

      <p>Welcome, {user.name}</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;