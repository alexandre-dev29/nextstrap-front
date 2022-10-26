import { createContext, useContext } from "react";

export const UserContext = createContext({ username: "", email: "" });

export const useUser = () => {
  const currentUser = useContext(UserContext);
  return { currentUser };
};
