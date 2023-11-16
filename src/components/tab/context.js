import { createContext, useContext } from "react";

export const TabContext = createContext()
export const useTabContext = () => useContext(TabContext)