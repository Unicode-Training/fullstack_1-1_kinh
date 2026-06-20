import { createContext, type Dispatch, type SetStateAction } from "react";
type User = {
  id: string;
  fullName: string;
  email: string;
};
type AuthContext = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  setAuth?: Dispatch<
    SetStateAction<{ isAuthenticated: boolean; isLoading: boolean; user: null }>
  >;
  getProfile: () => void;
};
export const AuthContext = createContext({} as AuthContext);
