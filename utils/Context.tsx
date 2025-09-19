"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppState {
  leetcode: any;
  setLeetcode: (leetcode: any) => void;
  github: any;
  setGithub: (github: any) => void;
  gfg: any;
  setGfg: (gfg: any) => void;
}


const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [leetcode, setLeetcode] = useState();
  const [github, setGithub] = useState();
  const [gfg, setGfg] = useState();

  return (
    <AppContext.Provider value={{ leetcode, setLeetcode, github, setGithub, gfg, setGfg }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
