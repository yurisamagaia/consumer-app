// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
// import { RouteProp } from '@react-navigation/native';

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
  navigate: (screen: string) => void;
};


// export type RootStackParamList = {
//   Welcome: undefined;
//   Login: undefined;
//   Orders: undefined;
//   OrderDetails: { order: Order };
// };

// export type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
// export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
// export type OrdersScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Orders'>;
// export type OrderDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'OrderDetails'>;
// export type OrderDetailsRouteProp = RouteProp<RootStackParamList, 'OrderDetails'>;
