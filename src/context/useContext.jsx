import { useContext } from "react";
import { Context } from "./CreateContext";

export const useQuizContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
};
