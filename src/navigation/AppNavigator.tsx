import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { OrdersScreen } from '../screens/OrdersScreen';
import { OrderDetailsScreen } from '../screens/OrderDetailsScreen';
import { LoginScreen } from '../screens/LoginScreen';

export const AppNavigator: React.FC = () => {
  const { currentScreen, params } = useNavigation();

  switch (currentScreen) {
    case 'Orders':
      return <OrdersScreen />;
    case 'OrderDetails':
      return <OrderDetailsScreen {...params} />;
    case 'Login':
      return <LoginScreen />;
    case 'Home':
    default:
      return <WelcomeScreen />;
  }
};
