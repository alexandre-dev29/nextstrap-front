import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const useUser = () => {
  const currentUser = useContext(UserContext);
  return { currentUser };
};
