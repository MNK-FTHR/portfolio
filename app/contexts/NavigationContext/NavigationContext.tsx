"use client";

import { FC, ReactNode, createContext, useState } from "react";

export type DrawerContextState = {
  mobileOpen: boolean;
  isClosing: boolean;
  handleDrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
  handleDrawerToggle: () => void;
};
const contextDefaultValues: DrawerContextState = {
  mobileOpen: false,
  isClosing: false,
  handleDrawerClose: () => {},
  handleDrawerTransitionEnd: () => {},
  handleDrawerToggle: () => {},
};

export const DrawerContext = createContext(contextDefaultValues);
type Props = { children: ReactNode };
export const DrawerContextProvider: FC<Props> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <DrawerContext.Provider
      value={{
        mobileOpen,
        isClosing,
        handleDrawerClose,
        handleDrawerTransitionEnd,
        handleDrawerToggle,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
