import React from "react";
import { useLogin } from "../hooks/useLogin";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login, isPending } = useLogin();
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/repos" />;
  }

  return (
    <div>
      <div className="container">
        <h1>GitHub Login</h1>
        <div className="login-container">
          <button
            type="button"
            className="btn btn-primary"
            onClick={login}
            disabled={isPending}
          >
            {isPending ? "Loading..." : "Login With Github"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
