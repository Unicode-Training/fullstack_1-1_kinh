import { createContext } from "react";
type AppContext = {
  title: string;
  setTitle: (value: string) => void;
};
export const AppContext = createContext({} as AppContext);
