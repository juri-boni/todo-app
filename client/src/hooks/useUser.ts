import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};
