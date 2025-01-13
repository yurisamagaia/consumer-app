import { ReactNode } from 'react';

// Orders
export type Order = {
  id: number;
  client: string;
  people: number;
  items: Item[];
  isClosing: boolean;
  mine: boolean;
  totalTime: number;
};

export type Item = {
  id: number;
  name: string;
  price: number;
  obs?: string;
  extra?: string[];
};

export type AppContextType = {
  orders: Order[];
};

export type AppProviderProps = {
  children: ReactNode;
};

// Navigation
export type NavigationContextType = {
  currentScreen: string;
  params: Record<string, any>;
  navigate: (screen: string, params?: Record<string, any>) => void;
};