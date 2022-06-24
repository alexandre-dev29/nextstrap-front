import { createContext, useContext } from "react";

export const UserContext = createContext({ username: "" });

export const useUser = () => {
  const currentUser = useContext(UserContext);
  return { currentUser };
};
