import { signOut } from "firebase/auth";
import { auth } from "../Firebase/config";

export const useLogout = () => {
  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  return { logout };
};
