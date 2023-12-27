import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

const Login = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(user);

  return (
    <div>
      {isAuthenticated ? (
        <>
        <h1>{user.family_name}</h1>
          <Logout />
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
};

export default Login;
