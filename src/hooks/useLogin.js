import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

import { useState } from "react";
import { auth } from "../Firebase/config";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const provider = new GithubAuthProvider();

  const login = async () => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const user = res.user;
      localStorage.setItem("idToken", user.accessToken);
      navigate("/repos");
      console.log();
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};
