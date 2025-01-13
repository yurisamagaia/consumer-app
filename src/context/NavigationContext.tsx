import React, { createContext, useState, useContext } from 'react';
import { NavigationContextType } from '../types';

const DEFAULT_SCREEN = 'Welcome';

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<string>(DEFAULT_SCREEN);
  const [params, setParams] = useState<Record<string, any>>({});

  const navigate = (screen: string, params: Record<string, any> = {}) => {
    setCurrentScreen(screen);
    setParams(params);
  };

  return (
    <NavigationContext.Provider value={{ currentScreen, params, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
